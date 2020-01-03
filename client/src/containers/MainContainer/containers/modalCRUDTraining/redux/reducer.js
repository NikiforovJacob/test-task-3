import { handleActions } from 'redux-actions';
import * as actions from './actions';
import * as actionsDomainData from '../../../redux/actions';

const modalCRUDTrainingDefaultState = {
  isOpened: false,
  openedModal: 'addTraining',
  editableTrainingId: null,
};

const modalCRUDTrainingReducer = handleActions(
  {
    [actions.openAddTrainingModal](state) {
      return {
        ...state,
        openedModal: 'addTraining',
        isOpened: true,
      };
    },
    [actions.openEditTrainingModal](state, { payload: { editableTrainingId } }) {
      return {
        openedModal: 'editTraining',
        isOpened: true,
        editableTrainingId,
      };
    },
    [actions.closeModal](state) {
      return {
        ...state,
        isOpened: false,
      };
    },
    [actionsDomainData.addTraining](state) {
      return {
        ...state,
        isOpened: false,
      };
    },
    [actionsDomainData.deleteTraining](state) {
      return {
        ...state,
        isOpened: false,
      };
    },
  },
  modalCRUDTrainingDefaultState,
);

export default modalCRUDTrainingReducer;
