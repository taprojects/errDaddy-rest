function sortByTime(errList) {
  return errList.sort((errA, errB) => {
    return Date.parse(errA.time) - Date.parse(errB.time);
  });
}

module.exports = { sortByTime };
