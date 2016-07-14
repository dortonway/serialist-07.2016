import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AddSerial.css';
import { reduxForm } from 'redux-form';
import Button from '../Button/Button.jsx';

class AddSerial extends React.Component {

  onButtonClick() {
    const { onAdd, resetForm, fields: { serialName } } = this.props;

    onAdd(serialName.value);
    resetForm('addSerial');
  }

  render() {
    const { fields: { serialName } } = this.props;

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <input type="text" className={ styles.input } { ...serialName } placeholder="New serial name" />
        <Button value="Add" onClick={ this.onButtonClick.bind(this) } />
      </form>
    );
  }

}

AddSerial.PropTyps = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addSerial',
  fields: ['serialName']
})(AddSerial);