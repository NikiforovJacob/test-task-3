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
