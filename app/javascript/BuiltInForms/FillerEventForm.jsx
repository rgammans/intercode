import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { humanize } from 'inflected';

import BootstrapFormSelect from '../BuiltInFormControls/BootstrapFormSelect';
import CommonEventFormFields from './CommonEventFormFields';
import RunFormFields from './RunFormFields';
import getFormForEventCategory from '../EventAdmin/getFormForEventCategory';

class FillerEventForm extends React.Component {
  static propTypes = {
    initialEvent: PropTypes.shape({
      id: PropTypes.number,
      runs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        rooms: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired).isRequired,
      })).isRequired,
    }).isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,

    // The convention prop type we're using is already required
    // eslint-disable-next-line react/require-default-props
    convention: RunFormFields.propTypes.convention,
    cancelPath: PropTypes.string,
    onSave: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cancelPath: null,
    disabled: false,
    error: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      event: props.initialEvent,
      run: props.initialEvent.runs[0] || {},
    };
  }

  isDataComplete = () => (
    this.state.event.form_response_attrs.title != null
    && this.state.event.form_response_attrs.length_seconds
  )

  eventFieldChanged = (eventData) => {
    this.setState(prevState => ({
      event: {
        ...prevState.event,
        ...eventData,
      },
    }));
  }

  runChanged = (runData) => {
    this.setState(prevState => ({ run: { ...prevState.run, ...runData } }));
  }

  saveClicked = (event) => {
    event.preventDefault();
    this.props.onSave({
      event: this.state.event,
      run: this.state.run,
    });
  }

  renderRunFormFields = () => {
    if (!this.state.event.form_response_attrs.length_seconds) {
      return null;
    }

    return (
      <RunFormFields
        run={this.state.run}
        event={{ length_seconds: this.state.event.form_response_attrs.length_seconds }}
        convention={this.props.convention}
        onChange={this.runChanged}
      />
    );
  }

  renderErrorDisplay = () => {
    if (this.props.error) {
      return <div className="alert alert-danger">{this.props.error}</div>;
    }

    return null;
  }

  render = () => {
    const saveCaption = (this.state.event.id ? 'Save single-run event' : 'Create single-run event');
    let cancelLink = null;
    if (this.props.cancelPath) {
      cancelLink = <Link to={this.props.cancelPath} className="btn btn-link">Cancel</Link>;
    }

    const categoryOptions = this.props.convention.event_categories
      .filter(category => category.scheduling_ui === 'single_run')
      .map(category => (
        <option value={category.id} key={category.id}>{humanize(category.name)}</option>
      ));

    const disabled = this.props.disabled || !this.isDataComplete();

    return (
      <form className="my-4">
        <h3 className="mb-4">
          {this.state.event.id ? 'Edit single-run event' : 'New single-run event'}
        </h3>

        <BootstrapFormSelect
          label="Category"
          name="cagegory"
          value={this.state.event.category}
          onChange={event => this.eventFieldChanged({ category: event.target.value })}
        >
          {categoryOptions}
        </BootstrapFormSelect>

        <CommonEventFormFields
          event={this.state.event}
          convention={this.props.convention}
          form={getFormForEventCategory(this.state.event, this.props.convention)}
          onChange={this.eventFieldChanged}
        />

        {this.renderRunFormFields()}

        {this.renderErrorDisplay()}

        <button type="button" className="btn btn-primary" onClick={this.saveClicked} disabled={disabled}>
          {saveCaption}
        </button>
        {cancelLink}
      </form>
    );
  }
}

export default FillerEventForm;
