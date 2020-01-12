import { combineReducers } from '@reduxjs/toolkit';
import { reducer as reduxFormReducer } from 'redux-form';
import trainingsReducer from '../../MainContainer/redux/slice';
import modalCRUDTrainingReducer from '../../MainContainer/containers/modalCRUDTraining/redux/slice';
import trainingsTableReducer from '../../MainContainer/containers/trainingsTable/redux/slice';

const domainDataReducer = combineReducers({
  trainings: trainingsReducer,
});

const uiStateReducer = combineReducers({
  modalCRUDTraining: modalCRUDTrainingReducer,
  trainingsTable: trainingsTableReducer,
});

const mainContainerDataReducer = combineReducers({
  domainData: domainDataReducer,
  uiState: uiStateReducer,
});

export default {
  form: reduxFormReducer,
  mainContainerData: mainContainerDataReducer,
};
