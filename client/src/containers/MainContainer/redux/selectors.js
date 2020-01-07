import { createSelector } from 'reselect';

const getDomainDataTrainings = (state) => state.mainContainerData.domainData.trainings;

export const tainingsByIdSelector = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.byId,
);

export const tainingsAllIdsSelector = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.allIds,
);

export const isFetchingSelector = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.isFetching,
);

export const isFetchingError = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.error !== null,
);
