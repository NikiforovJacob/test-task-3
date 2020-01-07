export const getCalendarDateISO = () => new Date().toISOString().slice(0, 10);
export const getWeekNumber = (data) => {
  const d = new Date(data);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000) / 7);
  return weekNo;
};

export const getWeekNumberWithYear = (data) => `${data.slice(2, 4)}-w${getWeekNumber(data)}`;
