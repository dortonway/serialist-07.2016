import React, { PropTypes } from 'react';
import WatchingStatuses from '../components/WatchingStatuses/WatchingStatuses.jsx';

const Serials = ({
    children
  }) => (
    <div>
      <WatchingStatuses />
      { children }
    </div>
);

Serials.propTypes = {
  children: PropTypes.object.isRequired
};

export default Serials;