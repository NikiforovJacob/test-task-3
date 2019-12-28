import { handleActions } from 'redux-actions';
import * as actions from './actions';

const tableUiStateDefault = {
  filter: null,
  sort: null,
};

const tableUiStateReducer = handleActions(
  {
    [actions.filterByActivity](state, { payload: filterBy }) {
      return {
        ...state,
        filter: filterBy,
      };
    },
    [actions.sortTrainings](state, { payload: sortBy }) {
      return {
        ...state,
        sort: sortBy,
      };
    },
  },
  tableUiStateDefault,
);

export default tableUiStateReducer;
