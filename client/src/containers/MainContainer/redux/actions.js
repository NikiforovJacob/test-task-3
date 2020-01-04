import { createAction } from 'redux-actions';

export const addTraining = createAction('TRAINING_ADD');
export const editTraining = createAction('TRAINING_EDIT');
export const deleteTraining = createAction('TRAINING_DELETE');

export const setFilterByType = createAction('FILTER_BY_ACTIVITY_SET');
export const setSort = createAction('SORT_SET');
