export const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};

export const formatDate = (date) => {
  let d = new Date(date),
    day = d.getDate().toString();

  if (day.length < 2) day = "0" + day;

  return [day].join("-");
};
