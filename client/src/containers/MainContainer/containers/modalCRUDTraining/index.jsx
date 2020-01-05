import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux/actions';
import * as actionsDomainData from '../../redux/actions';
import {
  tainingsByIdSelector,
  tainingsAllIdsSelector,
} from '../../redux/selectors';
import {
  isOpenedModalSelector,
  openedModalSelector,
  editableTrainingIdSelector,
} from './redux/selectors';
import getCalendarDateISO from '../../../../utils/dates';
import ModalCRUDTraining from './components/ModalCRUDTraining';
import StyledAddTModalBtn from './styled';

const ModalCRUDTrainingContainer = (props) => {
  const {
    trainingsIds,
    isOpened,
    openedModal,
    editableTrainingId,
    initialValues,
    openAddTrainingModal,
    addTraining,
    editTraining,
    deleteTraining,
    closeModal,
  } = props;

  const handleOpenAddTrainingModal = () => {
    openAddTrainingModal();
  };

  const handleAddTraining = (inputValues) => {
    const newTraining = {
      id: trainingsIds.length === 0 ? 1 : (trainingsIds[0] + 1),
      date: '',
      trainingType: '',
      distance: 0,
      comment: '',
      ...inputValues,
    };
    addTraining({ newTraining });
  };

  const handleEditTraining = (inputValues) => {
    const editedTraining = {
      ...initialValues,
      ...inputValues,
    };
    editTraining({ editedTraining });
  };

  const handleDeledeTraining = () => {
    deleteTraining({ id: editableTrainingId });
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
        handleDeledeTraining={handleDeledeTraining}
        handleCloseModal={handleCloseModal}
        isOpened={isOpened}
        openedModal={openedModal}
        initialValues={initialValues}
      />
    </>
  );
};

const actionCreators = {
  addTraining: actionsDomainData.addTraining,
  editTraining: actionsDomainData.editTraining,
  deleteTraining: actionsDomainData.deleteTraining,
  closeModal: actions.closeModal,
  openAddTrainingModal: actions.openAddTrainingModal,
};

const mapStateToProps = (state) => {
  const initialValues = (openedModalSelector(state) === 'addTraining'
    ? { date: getCalendarDateISO() }
    : tainingsByIdSelector(state)[editableTrainingIdSelector(state)]
  );
  return {
    initialValues,
    isOpened: isOpenedModalSelector(state),
    openedModal: openedModalSelector(state),
    trainingsIds: tainingsAllIdsSelector(state),
    editableTrainingId: editableTrainingIdSelector(state),
  };
};

ModalCRUDTrainingContainer.propTypes = {
  trainingsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  isOpened: PropTypes.bool.isRequired,
  openedModal: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    trainingType: PropTypes.string,
    distance: PropTypes.number,
    comment: PropTypes.string,
  }).isRequired,
  openAddTrainingModal: PropTypes.func.isRequired,
  addTraining: PropTypes.func.isRequired,
  editTraining: PropTypes.func.isRequired,
  deleteTraining: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(ModalCRUDTrainingContainer);
