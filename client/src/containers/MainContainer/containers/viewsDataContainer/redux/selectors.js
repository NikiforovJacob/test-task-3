import { createSelector } from '@reduxjs/toolkit';
import trainingTypes from '../../../../../shared/data';
import { getWeekNumber, getCalendarDateISO } from '../../../../../utils/dates';

const getDomainDataTrainings = (state) => state.mainContainerData.domainData.trainings;

const targetWeeks = (num) => {
  const nowWeekNo = getWeekNumber(getCalendarDateISO());
  const numWeeksInTheYear = 52;
  const firstWeekNo = (nowWeekNo - num) > 0
    ? (nowWeekNo - num)
    : (nowWeekNo - num + numWeeksInTheYear);
  const iter = (acc, currentWeekNo) => {
    if (currentWeekNo === firstWeekNo) {
      return acc;
    }
    const newCurrentWeekNo = ((currentWeekNo - 1) > 0)
      ? (currentWeekNo - 1)
      : (currentWeekNo - 1 + numWeeksInTheYear);
    return iter([currentWeekNo, ...acc], newCurrentWeekNo);
  };
  return iter([], nowWeekNo);
};

const defaultAccActivityByWeek = (types) => types.reduce(
  (acc, type) => ({
    ...acc,
    [type]: targetWeeks(12).reduce(
      (acc2, w) => ({ ...acc2, [w]: 0 }), {},
    ),
  }), {},
);

const getActivityByWeekSelector = createSelector(
  getDomainDataTrainings,
  ({ allIds, byId }) => {
    const dataObject = allIds.reduce((acc, id) => {
      const { trainingType, date, distance } = byId[id];
      const weekNo = getWeekNumber(date);
      if (({}).hasOwnProperty.call(acc[trainingType], weekNo)) {
        acc[trainingType][weekNo] += Number(distance);
      }
      return acc;
    }, defaultAccActivityByWeek(trainingTypes));
    const categories = targetWeeks(12);
    const dataByType = trainingTypes.map(
      (type) => ({
        name: type,
        data: categories.map(
          (week) => dataObject[type][week],
        ),
      }),
    );
    return {
      categories,
      series: dataByType,
    };
  },
);

export default getActivityByWeekSelector;
