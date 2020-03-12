class ReceiveEmailService < CivilService::Service
  def self.kms_client
    @kms_client ||= Aws::KMS::Client.new
  end

  def self.s3_client
    @s3_client ||= Aws::S3::Encryption::Client.new(
      kms_key_id: 'alias/aws/ses',
      kms_client: kms_client
    )
  end

  def self.ses_client
    @ses_client ||= Aws::SES::Client.new
  end

  attr_reader :message

  def initialize(message:)
    @message = message
  end

  private

  def inner_call
    recipients.each do |recipient|
      address = EmailRoute.normalize_address(recipient)
      route = EmailRoute.find_by(receiver_address: address)
      if route
        forward_email(recipient, route.forward_addresses)
      else
        Rails.logger.warn("Could not find matching route for #{recipient}")
      end
    end

    success
  end

  def recipients
    @recipients ||= Array(common_header('To')).map { |recipient| Mail::Address.new(recipient) }
  end

  def header(name)
    headers_hash[name.downcase]
  end

  def headers_hash
    @headers_hash ||= message['mail']['headers'].each_with_object({}) do |header, hash|
      hash[header['name'].downcase] = header['value']
    end
  end

  def common_header(name)
    common_headers_hash[name.downcase]
  end

  def common_headers_hash
    message['mail']['commonHeaders']
  end

  def receipt_action
    message['receipt']['action']
  end

  def raw_email
    @raw_email ||= self.class.s3_client.get_object(
      bucket: receipt_action['bucketName'],
      key: receipt_action['objectKey']
    ).body.read
  end

  def email
    @email ||= Mail.read_from_string(raw_email)
  end

  def transform_email_for_forwarding(original_recipient, new_recipients)
    from_addresses = email.from.map do |from|
      address = Mail::Address.new(from)
      address.display_name = "#{address.display_name || address.address} via #{original_recipient.address}"
      address.address = original_recipient.address
      address
    end

    forward_message = email.dup
    forward_message.reply_to = email.from
    forward_message.from = from_addresses.map(&:to_s)
    forward_message.to = new_recipients
    forward_message.header['Return-Path'] = nil

    forward_message
  end

  def forward_email(original_recipient, new_recipients)
    forward_message = transform_email_for_forwarding(original_recipient, new_recipients)

    self.class.ses_client.send_raw_email({
      raw_message: {
        data: forward_message.to_s
      }
    })
  end
end
