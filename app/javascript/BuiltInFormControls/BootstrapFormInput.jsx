/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import useUniqueId from '../useUniqueId';

function BootstrapFormInput(props) {
  const inputId = useUniqueId(`${props.name || 'input'}-`);

  const {
    helpText, label, onChange, onTextChange, ...otherProps
  } = props;

  const onChangeProp = onChange || ((event) => { onTextChange(event.target.value); });

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{label}</label>
      <input
        className="form-control"
        id={inputId}
        onChange={onChangeProp}
        {...otherProps} // eslint-disable-line react/jsx-props-no-spreading
      />
      {
        helpText
          ? <small className="form-text text-muted">{helpText}</small>
          : null
      }
    </div>
  );
}

BootstrapFormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onTextChange: PropTypes.func,
  helpText: PropTypes.string,
  disabled: PropTypes.bool,
};

BootstrapFormInput.defaultProps = {
  name: null,
  type: 'text',
  disabled: false,
  helpText: null,
  onChange: null,
  onTextChange: null,
};

export default BootstrapFormInput;
