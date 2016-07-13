import React from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

const Header = () => (
  <div className={ styles.header }>
    <Link to="/serials" className={ styles.item } activeClassName={ styles._active }>Serials</Link>
    <Link to="/movies"  className={ styles.item } activeClassName={ styles._active }>Movies</Link>
  </div>
);

export default Header;