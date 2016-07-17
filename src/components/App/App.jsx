import React, { PropTypes } from 'react';
import styles from './App.css';

const App = ({
    children
  }) => (
    <div className={ styles.app }>
      <div className={ styles.content }>
        { children }
      </div>
    </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;