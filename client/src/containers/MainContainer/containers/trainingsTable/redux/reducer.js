import { handleActions } from 'redux-actions';
import * as actions from './actions';
import trainingTypes from '../../../../../shared/data';

const trainingsTableDefaultState = {
  sortBy: 'date',
  sortDerrection: 'toLower',
  filterByTypes: trainingTypes.reduce((acc, type) => ({ ...acc, [type]: true }), {}),
};

const trainingsTableReducer = handleActions(
  {
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
  trainingsTableDefaultState,
);

export default trainingsTableReducer;
