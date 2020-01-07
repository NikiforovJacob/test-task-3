import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import omit from 'ramda/src/omit';
import without from 'ramda/src/without';
import * as actions from './actions';
import modalCRUDTrainingReducer from '../containers/modalCRUDTraining/redux/reducer';
import trainingsTableReducer from '../containers/trainingsTable/redux/reducer';

const trainingsDefaultState = {
  byId: {},
  allIds: [],
  isFetching: false,
  error: null,
};

const trainingsReducer = handleActions(
  {
    [actions.addTraining](state, { payload: { newTraining } }) {
      const { byId, allIds } = state;
      return {
        ...state,
        byId: { ...byId, [newTraining.id]: newTraining },
        allIds: [newTraining.id, ...allIds],
      };
    },
    [actions.editTraining](state, { payload: { editedTraining } }) {
      const { id } = editedTraining;
      const { byId } = state;
      return {
        ...state,
        byId: { ...byId, [id]: editedTraining },
      };
    },
    [actions.deleteTraining](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        ...state,
        byId: omit([id], byId),
        allIds: without([id], allIds),
      };
    },


    [actions.fetchTrainingsRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [actions.fetchTrainingsSuccess](state, { payload }) {
      return {
        ...state,
        byId: payload,
        allIds: Object.keys(payload).map((id) => Number(id)).sort((a, b) => b - a),
        isFetching: false,
      };
    },
    [actions.fetchTrainingsFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [actions.resetFetchTrainingsError](state) {
      return {
        ...state,
        error: null,
      };
    },
  },
  trainingsDefaultState,
);

const domainDataReducer = combineReducers({
  trainings: trainingsReducer,
});

const uiStateReducer = combineReducers({
  modalCRUDTraining: modalCRUDTrainingReducer,
  trainingsTable: trainingsTableReducer,
});

export default combineReducers({
  domainData: domainDataReducer,
  uiState: uiStateReducer,
});
