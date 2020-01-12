import { createSelector } from '@reduxjs/toolkit';

const getDomainDataTrainings = (state) => state.mainContainerData.domainData.trainings;

export const trainingsByIdSelector = createSelector(
  getDomainDataTrainings,
  (trainings) => trainings.byId,
);

export const trainingsAllIdsSelector = createSelector(
  getDomainDataTrainings,
  (trainings) => trainings.allIds,
);

export const isFetchingSelector = createSelector(
  getDomainDataTrainings,
  (trainings) => trainings.isFetching,
);

export const isFetchingError = createSelector(
  getDomainDataTrainings,
  (trainings) => trainings.error !== null,
);
