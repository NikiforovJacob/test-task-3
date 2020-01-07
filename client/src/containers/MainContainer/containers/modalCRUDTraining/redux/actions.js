import { createAction } from 'redux-actions';
import api from '../../../../../utils/ApiClient';
import * as actionsDomainData from '../../../redux/actions';

export const openAddTrainingModal = createAction('MODAL_OPEN');
export const openEditTrainingModal = createAction('MODAL_EDIT_T_OPEN');
export const closeModal = createAction('MODAL_CLOSE');

export const fetchCRUDTrainingsRequest = createAction('FETCH_TRAINING_CRUD_REQUEST');
export const fetchCRUDTrainingsFailure = createAction('FETCH_TRAINING_CRUD_FAILURE');
export const resetFetchCRUDTrainings = createAction('ERROR_FETCH_CRUD_TRAININGS_RESET');

export const fetchAddTraining = ({ newTraining }) => async (dispatch) => {
  try {
    dispatch(fetchCRUDTrainingsRequest());
    const response = await api.trainings.add(newTraining);
    const { result } = response.data;
    dispatch(actionsDomainData.addTraining({ newTraining: result }));
  } catch (error) {
    dispatch(fetchCRUDTrainingsFailure(error));
    console.log(error);
  }
};

export const fetchDeleteTraining = ({ id }) => async (dispatch) => {
  try {
    dispatch(fetchCRUDTrainingsRequest());
    await api.trainings.delete(id);
    dispatch(actionsDomainData.deleteTraining({ id }));
  } catch (error) {
    dispatch(fetchCRUDTrainingsFailure(error));
    console.log(error);
  }
};

export const fetchEditTraining = ({ editedTraining }) => async (dispatch) => {
  try {
    dispatch(fetchCRUDTrainingsRequest());
    await api.trainings.edit(editedTraining);
    dispatch(actionsDomainData.editTraining({ editedTraining }));
  } catch (error) {
    dispatch(fetchCRUDTrainingsFailure(error));
    console.log(error);
  }
};
