import React, { PropTypes } from 'react';
import styles from './ToWatch.css';
import AddSerial from '../AddSerial/AddSerial.jsx';

const ToWatch = ({
    serials,
    actions,
    resetForm
  }) => {

  return <div>
    <AddSerial onAdd={ actions.addSerial } resetForm={ resetForm } />
  </div>
};

ToWatch.PropTypes = {
  serials: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default ToWatch;