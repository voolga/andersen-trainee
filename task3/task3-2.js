function createDebounceFunction(func, delay) {
  let timeoutID = 0;

  return function () {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(func, delay);
  };
};