import { createSlice } from '@reduxjs/toolkit';
import trainingTypes from '../../../../../shared/data';

const initialState = {
  sortBy: 'date',
  sortDirection: 'toLower',
  filterByTypes: trainingTypes.reduce((acc, type) => ({ ...acc, [type]: true }), {}),
};

const trainingsTableSlice = createSlice({
  name: 'trainingsTable',
  initialState,
  reducers: {
    setFilterByType(state, { payload: { filterByTypes } }) {
      return {
        ...state,
        filterByTypes,
      };
    },
    setSort(state, { payload: { sortBy, sortDirection } }) {
      return {
        ...state,
        sortBy,
        sortDirection,
      };
    },
  },
});

export const {
  setFilterByType,
  setSort,
} = trainingsTableSlice.actions;

export default trainingsTableSlice.reducer;
