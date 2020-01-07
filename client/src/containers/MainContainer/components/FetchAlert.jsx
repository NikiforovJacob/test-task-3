import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import * as actionsDomainData from '../redux/actions';
import * as actionsModalCRUD from '../containers/modalCRUDTraining/redux/actions';
import { isFetchingError } from '../redux/selectors';
import { isFetchingCRUDSelector } from '../containers/modalCRUDTraining/redux/selectors';

const FetchAlert = (props) => {
  const {
    isDomainDataFetchError,
    isCRUDFetchError,
    offAlertDamainData,
    offAlertModalCRUD,
  } = props;

  const handleOffAlert = () => {
    offAlertDamainData();
    offAlertModalCRUD();
  };

  return (
    <Alert
      color="danger"
      isOpen={isDomainDataFetchError || isCRUDFetchError}
      toggle={handleOffAlert}
    >
      Network operation failed. Try to refresh the page.
    </Alert>
  );
};

FetchAlert.propTypes = {
  isDomainDataFetchError: PropTypes.bool.isRequired,
  isCRUDFetchError: PropTypes.bool.isRequired,
  offAlertDamainData: PropTypes.func.isRequired,
  offAlertModalCRUD: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDomainDataFetchError: isFetchingError(state),
  isCRUDFetchError: isFetchingCRUDSelector(state),
});

const actionCteators = {
  offAlertDamainData: actionsDomainData.resetFetchTrainingsError,
  offAlertModalCRUD: actionsModalCRUD.resetFetchCRUDTrainings,
};

export default connect(mapStateToProps, actionCteators)(FetchAlert);
