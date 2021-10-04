import { gql } from '@apollo/client';

import { UserConProfileFields, UserConProfileAdminTicketFields } from './queries';

export const CreateUserConProfile = gql`
  mutation CreateUserConProfile($user_id: ID!, $user_con_profile: UserConProfileInput!) {
    createUserConProfile(input: { transitionalUserId: $user_id, user_con_profile: $user_con_profile }) {
      user_con_profile {
        id: transitionalId
      }
    }
  }
`;

export const UpdateUserConProfile = gql`
  mutation UpdateUserConProfile($input: UpdateUserConProfileInput!) {
    updateUserConProfile(input: $input) {
      user_con_profile {
        id: transitionalId
        ...UserConProfileFields
      }
    }
  }

  ${UserConProfileFields}
`;

export const DeleteUserConProfile = gql`
  mutation DeleteUserConProfile($userConProfileId: Int!) {
    deleteUserConProfile(input: { id: $userConProfileId }) {
      user_con_profile {
        id: transitionalId
      }
    }
  }
`;

export const CreateTicket = gql`
  mutation CreateTicket($userConProfileId: Int!, $ticket: TicketInput!) {
    createTicket(input: { user_con_profile_id: $userConProfileId, ticket: $ticket }) {
      ticket {
        id: transitionalId
        ...UserConProfileAdminTicketFields
      }
    }
  }

  ${UserConProfileAdminTicketFields}
`;

export const UpdateTicket = gql`
  mutation UpdateTicket($id: ID!, $ticket: TicketInput!) {
    updateTicket(input: { transitionalId: $id, ticket: $ticket }) {
      ticket {
        id: transitionalId
        ...UserConProfileAdminTicketFields
      }
    }
  }

  ${UserConProfileAdminTicketFields}
`;

export const DeleteTicket = gql`
  mutation DeleteTicket($ticketId: ID!, $refund: Boolean!) {
    deleteTicket(input: { transitionalId: $ticketId, refund: $refund }) {
      ticket {
        id: transitionalId
      }
    }
  }
`;

export const ConvertTicketToEventProvided = gql`
  mutation ConvertTicketToEventProvided(
    $eventId: ID!
    $ticketTypeId: ID!
    $userConProfileId: ID!
  ) {
    convertTicketToEventProvided(
      input: {
        transitionalEventId: $eventId
        transitionalTicketTypeId: $ticketTypeId
        transitionalUserConProfileId: $userConProfileId
      }
    ) {
      ticket {
        id: transitionalId
        ...UserConProfileAdminTicketFields
      }
    }
  }

  ${UserConProfileAdminTicketFields}
`;
