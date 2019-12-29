import { createAction } from 'redux-actions';

export const addTraining = createAction('TRAINING_ADD');
export const editTraining = createAction('TRAINING_EDIT');
export const deleteTraining = createAction('TRAINING_DELETE');

export const openModal = createAction('MODAL_OPEN');
export const closeModal = createAction('MODAL_CLOSE');
