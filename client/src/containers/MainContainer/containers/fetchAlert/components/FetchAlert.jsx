import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const FetchAlert = (props) => {
  const {
    isAlertOpen,
    handleOffAlert,
  } = props;

  return (
    <Alert
      color="danger"
      isOpen={isAlertOpen}
      toggle={handleOffAlert}
    >
      Network operation failed. Try to refresh the page.
    </Alert>
  );
};

FetchAlert.propTypes = {
  isAlertOpen: PropTypes.bool.isRequired,
  handleOffAlert: PropTypes.func.isRequired,
};

export default FetchAlert;
