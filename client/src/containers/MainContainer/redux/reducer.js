import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import omit from 'ramda/src/omit';
import without from 'ramda/src/without';
import * as actions from './actions';
import modalCRUDTrainingReducer from '../containers/modalCRUDTraining/redux/reducer';
import trainingTypes from '../../../shared/data';

const trainingsDefaultState = {
  byId: {
    4: {
      id: 4,
      date: '2019-12-20',
      trainingType: 'Running',
      distance: 5.0,
      comment: 'fe',
    },
    3: {
      id: 3,
      date: '2019-12-02',
      trainingType: 'Running',
      distance: 4.3,
      comment: 'fe',
    },
    2: {
      id: 2,
      date: '2020-01-01',
      trainingType: 'Cycling',
      distance: 10.8,
      comment: 'fe',
    },
    1: {
      id: 1,
      date: '2019-12-29',
      trainingType: 'Swimming',
      distance: 0.5,
      comment: 'fe',
    },
  },
  allIds: [4, 3, 2, 1],
  filterByTypes: trainingTypes.reduce((acc, type) => ({ ...acc, [type]: true }), {}),
  sortBy: 'date',
  sortDerrection: 'toLower',
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
    [actions.setFilterByType](state, { payload: { filterByTypes } }) {
      return {
        ...state,
        filterByTypes,
      };
    },
    [actions.setSort](state, { payload: { sortBy, sortDerrection } }) {
      return {
        ...state,
        sortBy,
        sortDerrection,
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
});

export default combineReducers({
  domainData: domainDataReducer,
  uiState: uiStateReducer,
});
