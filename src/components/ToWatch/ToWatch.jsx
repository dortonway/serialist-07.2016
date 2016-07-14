import React, { PropTypes } from 'react';
import styles from './ToWatch.css';
import AddSerial from '../AddSerial/AddSerial.jsx';

const ToWatch = ({
    serials,
    actions,
    resetForm
  }) => (
    <div className={ styles.toWatch }>
      { serials.map((serial) =>
          <div className={ styles.serial } key={ serial.name }>{ serial.name }</div>
        )
      }
      <AddSerial onAdd={ actions.addSerial } resetForm={ resetForm } />
    </div>
);

ToWatch.PropTypes = {
  serials: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default ToWatch;