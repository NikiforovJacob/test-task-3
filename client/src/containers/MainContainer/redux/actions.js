import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const addTraining = createAction('TRAINING_ADD');
export const editTraining = createAction('TRAINING_EDIT');
export const deleteTraining = createAction('TRAINING_DELETE');

export const setFilterByType = createAction('FILTER_BY_ACTIVITY_SET');
export const setSort = createAction('SORT_SET');

export const fetchTrainingsRequest = createAction('FETCH_TRAININGS_REQUEST');
export const fetchTrainingsSuccess = createAction('FETCH_TRAININGS_SUCCESS');
export const fetchTrainingsFailure = createAction('FETCH_TRAININGS_FAILURE');
export const resetFetchTrainingsError = createAction('ERROR_FETCH_TRAININGS_RESET');

export const fetchTrainings = () => async (dispatch) => {
  try {
    dispatch(fetchTrainingsRequest());
    const response = await api.trainings.get();
    const { result } = response.data;
    dispatch(fetchTrainingsSuccess(result));
  } catch (error) {
    dispatch(fetchTrainingsFailure(error));
    console.log(error);
  }
};
