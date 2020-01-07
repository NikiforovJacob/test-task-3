import { createSelector } from 'reselect';

const getModalCRUDTrainingUiState = (state) => state.mainContainerData.uiState.modalCRUDTraining;

export const isOpenedModalSelector = createSelector(
  getModalCRUDTrainingUiState,
  (modalCRUDUiState) => modalCRUDUiState.isOpened,
);

export const isFetchingSelector = createSelector(
  getModalCRUDTrainingUiState,
  (modalCRUDUiState) => modalCRUDUiState.isFetching,
);

export const isFetchingCRUDSelector = createSelector(
  getModalCRUDTrainingUiState,
  (modalCRUDUiState) => modalCRUDUiState.error !== null,
);

export const openedModalSelector = createSelector(
  getModalCRUDTrainingUiState,
  (modalCRUDUiState) => modalCRUDUiState.openedModal,
);

export const editableTrainingIdSelector = createSelector(
  getModalCRUDTrainingUiState,
  (modalCRUDUiState) => modalCRUDUiState.editableTrainingId,
);
