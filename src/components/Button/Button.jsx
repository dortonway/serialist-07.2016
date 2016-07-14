import React, { PropTypes } from 'react';
import styles from './Button.css';

const Button = ({
    value,
    onClick
  }) => (
    <button className={ styles.button } onClick={ onClick }>{ value }</button>
);

Button.PropTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;