import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux/actions';
import {
  trainingsByIdSelector,
  trainingsAllIdsSelector,
} from '../../redux/selectors';
import {
  isOpenedModalSelector,
  isFetchingSelector,
  openedModalSelector,
  editableTrainingIdSelector,
} from './redux/selectors';
import { getCalendarDateISO } from '../../../../utils/dates';
import ModalCRUDTraining from './components/ModalCRUDTraining';
import StyledAddTModalBtn from './styled';

const ModalCRUDTrainingContainer = (props) => {
  const {
    isOpened,
    isFetching,
    openedModal,
    editableTrainingId,
    initialValues,
    openAddTrainingModal,
    fetchAddTraining,
    fetchDeleteTraining,
    fetchEditTraining,
    closeModal,
  } = props;

  const handleOpenAddTrainingModal = () => {
    openAddTrainingModal();
  };

  const handleAddTraining = (inputValues) => {
    const newTraining = {
      date: '',
      trainingType: '',
      distance: '',
      comment: '',
      ...inputValues,
    };
    fetchAddTraining({ newTraining });
  };

  const handleEditTraining = (inputValues) => {
    const editedTraining = {
      ...initialValues,
      ...inputValues,
    };
    fetchEditTraining({ editedTraining });
  };

  const handleDeleteTraining = () => {
    fetchDeleteTraining({ id: editableTrainingId });
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <StyledAddTModalBtn color="danger" onClick={handleOpenAddTrainingModal}>New</StyledAddTModalBtn>
      <ModalCRUDTraining
        handleAddTraining={handleAddTraining}
        handleEditTraining={handleEditTraining}
        handleDeleteTraining={handleDeleteTraining}
        handleCloseModal={handleCloseModal}
        isOpened={isOpened}
        isFetching={isFetching}
        openedModal={openedModal}
        initialValues={initialValues}
      />
    </>
  );
};

const actionCreators = {
  fetchAddTraining: actions.fetchAddTraining,
  fetchDeleteTraining: actions.fetchDeleteTraining,
  fetchEditTraining: actions.fetchEditTraining,
  closeModal: actions.closeModal,
  openAddTrainingModal: actions.openAddTrainingModal,
};

const mapStateToProps = (state) => {
  const getInitialValues = {
    addTraining: { date: getCalendarDateISO() },
    editTraining: trainingsByIdSelector(state)[editableTrainingIdSelector(state)],
    none: {},
  };
  return {
    initialValues: getInitialValues[openedModalSelector(state)],
    isOpened: isOpenedModalSelector(state),
    isFetching: isFetchingSelector(state),
    openedModal: openedModalSelector(state),
    trainingsIds: trainingsAllIdsSelector(state),
    editableTrainingId: editableTrainingIdSelector(state),
  };
};

ModalCRUDTrainingContainer.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  openedModal: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    trainingType: PropTypes.string,
    distance: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
  openAddTrainingModal: PropTypes.func.isRequired,
  fetchAddTraining: PropTypes.func.isRequired,
  fetchDeleteTraining: PropTypes.func.isRequired,
  fetchEditTraining: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(ModalCRUDTrainingContainer);
