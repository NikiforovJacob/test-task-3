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

export const tainingsFilterByTypesSelector = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.filterByTypes,
);

export const tainingsSortBySelector = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.sortBy,
);

export const tainingsSortDerrectionSelector = createSelector(
  getDomainDataTrainings,
  (tainings) => tainings.sortDerrection,
);

export const tainingsAllFilteredAndSortedIdsSelector = createSelector(
  getDomainDataTrainings,
  ({
    byId,
    allIds,
    filterByTypes,
    sortBy,
    sortDerrection,
  }) => {
    const tainingsFiltered = allIds.filter((id) => filterByTypes[byId[id].trainingType]);
    const isToLower = sortDerrection === 'toLower';
    return tainingsFiltered.sort((a, b) => {
      if (byId[a][sortBy] > byId[b][sortBy]) {
        return isToLower ? -1 : 1;
      }
      if (byId[a][sortBy] < byId[b][sortBy]) {
        return isToLower ? 1 : -1;
      }
      return 0;
    });
  },
);
