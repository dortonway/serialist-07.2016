import React, { PropTypes } from 'react';

export default class App extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.object.isRequired
};