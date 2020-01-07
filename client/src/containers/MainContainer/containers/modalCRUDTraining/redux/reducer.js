import { handleActions } from 'redux-actions';
import * as actions from './actions';
import * as actionsDomainData from '../../../redux/actions';

const modalCRUDTrainingDefaultState = {
  isOpened: false,
  openedModal: 'none',
  editableTrainingId: null,
  isFetching: false,
  error: null,
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
        ...state,
        openedModal: 'editTraining',
        isOpened: true,
        editableTrainingId,
      };
    },
    [actions.closeModal](state) {
      return {
        ...state,
        isOpened: false,
        openedModal: 'none',
      };
    },
    [actions.fetchCRUDTrainingsRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [actions.fetchCRUDTrainingsFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [actions.resetFetchCRUDTrainings](state) {
      return {
        ...state,
        error: null,
      };
    },
    [actionsDomainData.addTraining](state) {
      return {
        ...state,
        isOpened: false,
        openedModal: 'none',
        isFetching: false,
      };
    },
    [actionsDomainData.deleteTraining](state) {
      return {
        ...state,
        isOpened: false,
        openedModal: 'none',
        isFetching: false,
      };
    },
    [actionsDomainData.editTraining](state) {
      return {
        ...state,
        isOpened: false,
        openedModal: 'none',
        isFetching: false,
      };
    },
  },
  modalCRUDTrainingDefaultState,
);

export default modalCRUDTrainingReducer;
