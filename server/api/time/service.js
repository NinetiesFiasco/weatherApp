const now = (callBack) => {
  callBack(null,new Date());
};

module.exports = {
  now: now
};