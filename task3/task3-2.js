function createDebounceFunction(func, delay) {
  if (typeof func !== 'function') {
    throw new TypeError(`Func must be a function. Got: ${typeof func}`);
  }

  if (typeof delay !== 'number' || delay < 0) {
    throw new TypeError('Delay must be a positive number');
  }

  let timeoutId = 0;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(func, delay);
  };
};
