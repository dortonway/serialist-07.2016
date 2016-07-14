import React, { PropTypes } from 'react';
import WatchingStatuses from '../components/WatchingStatuses/WatchingStatuses.jsx';
import * as ActionCreators from '../actions/serials.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset as resetForm } from 'redux-form';
import Header from '../components/Header/Header.jsx';

const Serials = ({
    children,
    serials,
    actions,
    resetForm
  }) => (
    <div>
      <Header activeType="serials" />
      <WatchingStatuses />
      { children && React.cloneElement(children, {
        serials,
        actions,
        resetForm
      }) }
    </div>
);

Serials.PropTypes = {
  children: PropTypes.object.isRequired,
  serials: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    serials: state.serials
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    resetForm: bindActionCreators(resetForm, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Serials);