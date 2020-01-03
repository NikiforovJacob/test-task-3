const getCalendarDateISO = () => new Date().toISOString().slice(0, 10);

export default getCalendarDateISO;
