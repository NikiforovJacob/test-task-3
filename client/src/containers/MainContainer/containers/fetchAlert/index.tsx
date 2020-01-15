import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionsDomainData from '../../redux/actions';
import * as actionsModalCRUD from '../modalCRUDTraining/redux/actions';
import { isFetchingError } from '../../redux/selectors';
import { isFetchingCRUDSelector } from '../modalCRUDTraining/redux/selectors';
import FetchAlert from './components/FetchAlert';

const FetchAlertContainer = (props) => {
  const {
    isDomainDataFetchError,
    isCRUDFetchError,
    offAlertDomainData,
    offAlertModalCRUD,
  } = props;

  const handleOffAlert = () => {
    if (isDomainDataFetchError) {
      offAlertDomainData();
      return;
    }
    offAlertModalCRUD();
  };

  return (
    <FetchAlert
      color="danger"
      isAlertOpen={isDomainDataFetchError || isCRUDFetchError}
      handleOffAlert={handleOffAlert}
    />
  );
};

FetchAlertContainer.propTypes = {
  isDomainDataFetchError: PropTypes.bool.isRequired,
  isCRUDFetchError: PropTypes.bool.isRequired,
  offAlertDomainData: PropTypes.func.isRequired,
  offAlertModalCRUD: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDomainDataFetchError: isFetchingError(state),
  isCRUDFetchError: isFetchingCRUDSelector(state),
});

const actionCreators = {
  offAlertDomainData: actionsDomainData.resetFetchTrainingsError,
  offAlertModalCRUD: actionsModalCRUD.resetFetchCRUDTrainings,
};

export default connect(mapStateToProps, actionCreators)(FetchAlertContainer);
