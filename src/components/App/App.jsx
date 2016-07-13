import React, { PropTypes } from 'react';
import Header from '../Header/Header.jsx';
import styles from './App.css';

export default class App extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className={ styles.app }>
        <div className={ styles.content }>
          <Header />
          { children }
        </div>
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.object.isRequired
};