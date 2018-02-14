import React from 'react';
import PropTypes from 'prop-types';
import { enableUniqueIds } from 'react-html-id';
import BooleanInput from '../BuiltInFormControls/BooleanInput';
import BootstrapFormInput from '../BuiltInFormControls/BootstrapFormInput';
import StaffPositionPropType from './StaffPositionPropType';
import UserConProfileSelect from '../BuiltInFormControls/UserConProfileSelect';
import { FIELD_TYPES, ModelStateChangeCalculator } from '../FormUtils';

class StaffPositionForm extends React.Component {
  static propTypes = {
    staffPosition: StaffPositionPropType.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    enableUniqueIds(this);

    this.staffPositionMutator = new ModelStateChangeCalculator(
      'staffPosition',
      {
        name: FIELD_TYPES.STRING,
        email: FIELD_TYPES.STRING,
        visible: FIELD_TYPES.BOOLEAN,
        user_con_profiles: FIELD_TYPES.OBJECT,
      },
    ).getMutatorForStatelessComponent(this, props.onChange);
  }

  userConProfilesChanged = (newValue) => {
    this.staffPositionMutator.onValueChange(
      'user_con_profiles',
      newValue.map(choice => choice.data),
    );
  }

  render = () => {
    const userConProfileSelectId = this.nextUniqueId();

    return (
      <div>
        <BootstrapFormInput
          name="name"
          label="Position name"
          value={this.props.staffPosition.name || ''}
          onChange={this.staffPositionMutator.onInputChange}
        />

        <BootstrapFormInput
          name="email"
          type="email"
          label="Contact email"
          value={this.props.staffPosition.email || ''}
          onChange={this.staffPositionMutator.onInputChange}
        />

        <BooleanInput
          name="visible"
          caption="Visible in CMS content?"
          value={this.props.staffPosition.visible}
          onChange={this.staffPositionMutator.valueChangeCallback('visible')}
        />

        <div className="form-group">
          <label htmlFor={userConProfileSelectId}>People</label>
          <UserConProfileSelect
            id={userConProfileSelectId}
            multi
            value={this.props.staffPosition.user_con_profiles.map(userConProfile => userConProfile.id)}
            onChange={this.userConProfilesChanged}
          />
        </div>
      </div>
    );
  }
}

export default StaffPositionForm;
