import {
  addTraining,
  editTraining,
  deleteTraining,
  fetchTrainingsRequest,
  fetchTrainingsSuccess,
  fetchTrainingsFailure,
  resetFetchTrainingsError,
} from './slice';
import api from '../../../utils/ApiClient';


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

export {
  addTraining,
  editTraining,
  deleteTraining,
  fetchTrainingsRequest,
  fetchTrainingsSuccess,
  fetchTrainingsFailure,
  resetFetchTrainingsError,
};
