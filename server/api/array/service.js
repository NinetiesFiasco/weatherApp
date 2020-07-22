const sort = (recievedArray, callBack) => {
  let sortedArray = recievedArray.sort((a,b)=>a-b);
  callBack(null,sortedArray);
};

module.exports = {
  sort: sort
};

  