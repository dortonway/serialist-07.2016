import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AddSerial.css';
import { reduxForm } from 'redux-form';
import Button from '../Button/Button.jsx';

const AddSerial = ({
    onAdd,
    resetForm,
    fields: { serialName }
  }) => (
    <form onSubmit={ (e) => e.preventDefault() }>
      <input type="text" className={ styles.input } { ...serialName } placeholder="New serial name" />
      <Button value="Add" onClick={ () => onButtonClick(onAdd, resetForm, serialName) } />
    </form>
);

AddSerial.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

function onButtonClick(onAdd, resetForm, serialName) {
  onAdd(serialName.value);
  resetForm('addSerial');
}

export default reduxForm({
  form: 'addSerial',
  fields: ['serialName']
})(AddSerial);