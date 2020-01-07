import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const withAlert = (Component) => {
  const Wrapped = ({ isError, alertOff, ...props }) => (
    isError ? <Alert /> : <Component {...props} />
  );

  Wrapped.propTypes = {
    isFetching: PropTypes.bool.isRequired,
  };

  return Wrapped;
};

export default withAlert;
