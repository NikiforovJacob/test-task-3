import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import omit from 'ramda/src/omit';
import without from 'ramda/src/without';
import * as actions from './actions';
import tableReducer from '../containers/mainTable/Redux/reducer';

const trainingsDefaultState = {
  byId: {
    2: {
      date: '2019-12-29',
      activityType: 'Running',
      distance: 1.3,
      comment: 'fe',
    },
    1: {
      date: '2019-12-29',
      activityType: 'Swimming',
      distance: 0.3,
      comment: 'fe',
    },
  },
  allIds: [2, 1],
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

const modalDefaultState = {
  openedModal: null,
  editableTrainingId: null,
};

const modalStateReducer = handleActions(
  {
    [actions.openModal](state, { payload: { modalTitle } }) {
      return {
        openedModal: modalTitle,
      };
    },
    [actions.closeModal]() {
      return {
        openedModal: null,
      };
    },
    [actions.addTraining]() {
      return {
        openedModal: null,
      };
    },
  },
  modalDefaultState,
);

const domainDataReducer = combineReducers({
  trainings: trainingsReducer,
});

const uiStateReducer = combineReducers({
  table: tableReducer,
  modalState: modalStateReducer,
});

export default combineReducers({
  domainData: domainDataReducer,
  uiState: uiStateReducer,
});
