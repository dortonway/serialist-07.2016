import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Header.css';
import classNames from 'classnames';

const Header = ({
    activeType
  }) => (
  <div className={ styles.header }>
    <Link to="/serials/in-progress" className={ serialsClassNames(activeType) }>Serials</Link>
    <Link to="/movies" className={ moviesClassNames(activeType) }>Movies</Link>
  </div>
);

Header.PropTypes = {
  activeType: PropTypes.string
};

function serialsClassNames(activeType) {
  return classNames(styles.item, { [styles._active]: activeType === 'serials' });
}

function moviesClassNames(activeType) {
  return classNames(styles.item, { [styles._active]: activeType === 'movies' });
}

export default Header;