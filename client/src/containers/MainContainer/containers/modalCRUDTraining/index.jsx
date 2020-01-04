import React from 'react';
import { connect } from 'react-redux';
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
  const handleOpenAddTrainingModal = () => {
    const { openAddTrainingModal } = props;
    openAddTrainingModal();
  };

  const handleAddTraining = (inputValues) => {
    const { addTraining, trainingsIds } = props;
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
    const { editTraining, initialValues } = props;
    const editedTraining = {
      ...initialValues,
      ...inputValues,
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
  openModal: actions.openModal,
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

export default connect(mapStateToProps, actionCreators)(ModalCRUDTrainingContainer);
