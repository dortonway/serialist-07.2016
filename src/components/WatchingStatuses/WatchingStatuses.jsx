import React from 'react';
import { Link } from 'react-router';
import styles from './WatchingStatuses.css';

const WatchingStatuses = () => (
  <div className={ styles.watchingStatuses }>
    <Link to="/serials/to-watch" className={ styles.watchingStatus } activeClassName={ styles._active }>To watch</Link>
    <Link to="/serials/in-progress" className={ styles.watchingStatus } activeClassName={ styles._active }>In progress</Link>
    <Link to="/serials/watched" className={ styles.watchingStatus } activeClassName={ styles._active }>Watched</Link>
  </div>
);

export default WatchingStatuses;