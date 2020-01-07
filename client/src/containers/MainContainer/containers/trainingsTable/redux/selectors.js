import { createSelector } from 'reselect';

const getUiStateTrainingsTable = (state) => state.mainContainerData.uiState.trainingsTable;

export const tainingsFilterByTypesSelector = createSelector(
  getUiStateTrainingsTable,
  (trainingsTableState) => trainingsTableState.filterByTypes,
);

export const tainingsSortBySelector = createSelector(
  getUiStateTrainingsTable,
  (tainings) => tainings.sortBy,
);

export const tainingsSortDerrectionSelector = createSelector(
  getUiStateTrainingsTable,
  (trainingsTableState) => trainingsTableState.sortDerrection,
);

const getMainContainer = (state) => state.mainContainerData;

export const tainingsAllFilteredAndSortedIdsSelector = createSelector(
  getMainContainer,
  ({
    domainData: { trainings: { byId, allIds } },
    uiState: { trainingsTable: { sortBy, sortDerrection, filterByTypes } },
  }) => {
    const tainingsFiltered = allIds.filter((id) => filterByTypes[byId[id].trainingType]);
    const isToLower = sortDerrection === 'toLower';
    const cnvrt = {
      date: (v) => new Date(v),
      distance: (v) => Number(v),
    };
    return tainingsFiltered.sort((a, b) => {
      const A = cnvrt[sortBy](byId[a][sortBy]);
      const B = cnvrt[sortBy](byId[b][sortBy]);
      if (isToLower) {
        return A - B;
      }
      return B - A;
    });
  },
);
