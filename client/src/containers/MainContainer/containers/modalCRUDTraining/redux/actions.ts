import api from '../../../../../utils/ApiClient';
import * as actionsDomainData from '../../../redux/slice';

import {
  openAddTrainingModal,
  openEditTrainingModal,
  closeModal,
  fetchCRUDTrainingsRequest,
  fetchCRUDTrainingsFailure,
  resetFetchCRUDTrainings,
} from './slice';

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

export {
  openAddTrainingModal,
  openEditTrainingModal,
  closeModal,
  fetchCRUDTrainingsRequest,
  fetchCRUDTrainingsFailure,
  resetFetchCRUDTrainings,
};
