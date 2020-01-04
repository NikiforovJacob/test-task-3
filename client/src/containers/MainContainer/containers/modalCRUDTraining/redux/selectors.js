import { createSelector } from 'reselect';

const getModalCRUDTrainingUiState = (state) => state.mainContainerData.uiState.modalCRUDTraining;

export const isOpenedModalSelector = createSelector(
  getModalCRUDTrainingUiState,
  (mainContainerData) => mainContainerData.isOpened,
);

export const openedModalSelector = createSelector(
  getModalCRUDTrainingUiState,
  (mainContainerData) => mainContainerData.openedModal,
);

export const editableTrainingIdSelector = createSelector(
  getModalCRUDTrainingUiState,
  (mainContainerData) => mainContainerData.editableTrainingId,
);
