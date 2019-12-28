import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import omit from 'ramda/src/omit';
import without from 'ramda/src/without';
import * as actions from './actions';
import tableReducer from '../containers/mainTable/Redux/reducer';

const trainingsDefaultState = {
  byId: {},
  allIds: [],
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
  },
  trainingsDefaultState,
);

const domainDataReducer = combineReducers({
  trainings: trainingsReducer,
});

const uiStateReducer = combineReducers({
  table: tableReducer,
});

export default combineReducers({
  domainData: domainDataReducer,
  uiState: uiStateReducer,
});
