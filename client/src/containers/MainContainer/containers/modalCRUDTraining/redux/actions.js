import { createAction } from 'redux-actions';

export const openAddTrainingModal = createAction('MODAL_OPEN');
export const openEditTrainingModal = createAction('MODAL_EDIT_T_OPEN');
export const closeModal = createAction('MODAL_CLOSE');
