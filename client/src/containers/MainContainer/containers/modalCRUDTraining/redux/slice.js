import { createSlice } from '@reduxjs/toolkit';
import * as actionsDomainData from '../../../redux/actions';

const initialState = {
  isOpened: false,
  openedModal: 'none',
  editableTrainingId: null,
  isFetching: false,
  error: null,
};

const modalCRUDTrainingSlice = createSlice({
  name: 'modalCRUDTraining',
  initialState,
  reducers: {
    openAddTrainingModal(state) {
      return {
        ...state,
        openedModal: 'addTraining',
        isOpened: true,
      };
    },
    openEditTrainingModal(state, { payload: { editableTrainingId } }) {
      return {
        ...state,
        openedModal: 'editTraining',
        isOpened: true,
        editableTrainingId,
      };
    },
    closeModal(state) {
      return {
        ...state,
        isOpened: false,
        openedModal: 'none',
      };
    },
    fetchCRUDTrainingsRequest(state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchCRUDTrainingsFailure(state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    resetFetchCRUDTrainings(state) {
      return {
        ...state,
        error: null,
      };
    },
  },
  extraReducers: {
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
});

export const {
  openAddTrainingModal,
  openEditTrainingModal,
  closeModal,
  fetchCRUDTrainingsRequest,
  fetchCRUDTrainingsFailure,
  resetFetchCRUDTrainings,
} = modalCRUDTrainingSlice.actions;

export default modalCRUDTrainingSlice.reducer;
