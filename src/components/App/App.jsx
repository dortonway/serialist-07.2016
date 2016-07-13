import React, { PropTypes } from 'react';
import styles from './App.css';

export default class App extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className={ styles.app }>
        { children }
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.object.isRequired
};