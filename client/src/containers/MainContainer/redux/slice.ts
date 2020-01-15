import { createSlice } from '@reduxjs/toolkit';
import omit from 'ramda/src/omit';
import without from 'ramda/src/without';

const initialState = {
  byId: {},
  allIds: [],
  isFetching: false,
  error: null,
};

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    addTraining(state, { payload: { newTraining } }) {
      const { byId, allIds } = state;
      return {
        ...state,
        byId: { ...byId, [newTraining.id]: newTraining },
        allIds: [newTraining.id, ...allIds],
      };
    },
    editTraining(state, { payload: { editedTraining } }) {
      const { id } = editedTraining;
      const { byId } = state;
      return {
        ...state,
        byId: { ...byId, [id]: editedTraining },
      };
    },
    deleteTraining(state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        ...state,
        byId: omit([id], byId),
        allIds: without([id], allIds),
      };
    },

    fetchTrainingsRequest(state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchTrainingsSuccess(state, { payload }) {
      return {
        ...state,
        byId: payload,
        allIds: Object.keys(payload).map((id) => Number(id)).sort((a, b) => b - a),
        isFetching: false,
      };
    },
    fetchTrainingsFailure(state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    resetFetchTrainingsError(state) {
      return {
        ...state,
        error: null,
      };
    },
  },
});

export const {
  addTraining,
  editTraining,
  deleteTraining,
  fetchTrainingsRequest,
  fetchTrainingsSuccess,
  fetchTrainingsFailure,
  resetFetchTrainingsError,
} = trainingsSlice.actions;

export default trainingsSlice.reducer;
