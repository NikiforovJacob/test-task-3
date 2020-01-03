import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as actionsDomainData from '../../redux/actions';
import getCalendarDateISO from '../../../../utils/dates';
import ModalCRUDTraining from './components/ModalCRUDTraining';

const actionCreators = {
  addTraining: actionsDomainData.addTraining,
  editTraining: actionsDomainData.editTraining,
  deleteTraining: actionsDomainData.deleteTraining,
  openModal: actions.openModal,
  closeModal: actions.closeModal,
};

const mapStateToProps = ({
  mainContainerData: {
    uiState: { modalCRUDTraining: { isOpened, openedModal, editableTrainingId } },
    domainData: { trainings: { allIds, byId } },
  },
}) => {
  if (openedModal === 'addTraining') {
    return {
      initialValues: { date: getCalendarDateISO() },
      isOpened,
      openedModal,
      trainingsIds: allIds,
    };
  }
  return {
    initialValues: byId[editableTrainingId],
    isOpened,
    openedModal,
    trainingsIds: allIds,
    editableTrainingId,
  };
};

const ModalCRUDTrainingContainer = (props) => {
  const handleAddTraining = ({
    date,
    activityType,
    distance,
    comment = '',
  }) => {
    const { addTraining, trainingsIds } = props;
    const newTraining = {
      id: trainingsIds.length === 0 ? 1 : (trainingsIds[0] + 1),
      date,
      activityType,
      distance,
      comment,
    };
    addTraining({ newTraining });
  };

  const handleEditTraining = ({
    date,
    activityType,
    distance,
    comment,
  }) => {
    const { editTraining, initialValues } = props;
    const editedTraining = {
      ...initialValues,
      date,
      activityType,
      distance,
      comment,
    };
    editTraining({ editedTraining });
  };

  const handleDeledeTraining = () => {
    const { deleteTraining, editableTrainingId } = props;
    const id = editableTrainingId;
    deleteTraining({ id });
  };

  const handleCloseModal = () => {
    const { closeModal } = props;
    closeModal();
  };

  const { isOpened, openedModal, initialValues } = props;

  return (
    <ModalCRUDTraining
      handleAddTraining={handleAddTraining}
      handleEditTraining={handleEditTraining}
      handleDeledeTraining={handleDeledeTraining}
      handleCloseModal={handleCloseModal}
      isOpened={isOpened}
      openedModal={openedModal}
      initialValues={initialValues}
    />
  );
};

export default connect(mapStateToProps, actionCreators)(ModalCRUDTrainingContainer);
