import { createSelector } from '@reduxjs/toolkit';

const getUiStateTrainingsTable = (state) => state.mainContainerData.uiState.trainingsTable;

export const trainingsFilterByTypesSelector = createSelector(
  getUiStateTrainingsTable,
  (trainingsTableState) => trainingsTableState.filterByTypes,
);

export const trainingsSortBySelector = createSelector(
  getUiStateTrainingsTable,
  (trainings) => trainings.sortBy,
);

export const trainingsSortDirectionSelector = createSelector(
  getUiStateTrainingsTable,
  (trainingsTableState) => trainingsTableState.sortDirection,
);

const getMainContainer = (state) => state.mainContainerData;

export const trainingsAllFilteredAndSortedIdsSelector = createSelector(
  getMainContainer,
  ({
    domainData: { trainings: { byId, allIds } },
    uiState: { trainingsTable: { sortBy, sortDirection, filterByTypes } },
  }) => {
    const trainingsFiltered = allIds.filter((id) => filterByTypes[byId[id].trainingType]);
    const isToLower = sortDirection === 'toLower';
    const convert = {
      date: (v) => new Date(v),
      distance: (v) => Number(v),
    };
    return trainingsFiltered.sort((a, b) => {
      const A = convert[sortBy](byId[a][sortBy]);
      const B = convert[sortBy](byId[b][sortBy]);
      if (isToLower) {
        return A - B;
      }
      return B - A;
    });
  },
);
