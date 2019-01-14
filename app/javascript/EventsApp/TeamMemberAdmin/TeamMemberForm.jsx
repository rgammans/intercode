import React from 'react';
import PropTypes from 'prop-types';

import BootstrapFormCheckbox from '../../BuiltInFormControls/BootstrapFormCheckbox';
import MultipleChoiceInput from '../../BuiltInFormControls/MultipleChoiceInput';
import { mutator, Transforms } from '../../ComposableFormUtils';

function TeamMemberForm({
  event, disabled, value, onChange,
}) {
  const formMutator = mutator({
    getState: () => value,
    setState: onChange,
    transforms: {
      display: Transforms.checkboxChange,
      show_email: Transforms.checkboxChange,
      receive_con_email: Transforms.checkboxChange,
      receive_signup_email: Transforms.identity,
    },
  });

  return (
    <>
      {
        [
          { name: 'display', label: `Display as ${event.event_category.team_member_name}` },
          { name: 'show_email', label: 'Show email address' },
          { name: 'receive_con_email', label: 'Receive email from convention' },
        ].map(({ name, label }) => (
          <BootstrapFormCheckbox
            key={name}
            label={label}
            name={name}
            disabled={disabled}
            checked={value[name]}
            onChange={formMutator[name]}
          />
        ))
      }

      <MultipleChoiceInput
        caption="Receive email on signup and withdrawal"
        choices={[
          { label: 'Yes, all signup activity', value: 'ALL_SIGNUPS' },
          { label: 'Yes, except joining and dropping from waitlist', value: 'NON_WAITLIST_SIGNUPS' },
          { label: 'No', value: 'NO' },
        ]}
        value={value.receive_signup_email}
        onChange={formMutator.receive_signup_email}
      />
    </>
  );
}

TeamMemberForm.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    event_category: PropTypes.shape({
      can_provide_tickets: PropTypes.bool.isRequired,
      team_member_name: PropTypes.string.isRequired,
    }).isRequired,
    team_members: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_con_profile: PropTypes.shape({
      ticket: PropTypes.shape({}),
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

TeamMemberForm.defaultProps = {
  disabled: false,
};

export default TeamMemberForm;
