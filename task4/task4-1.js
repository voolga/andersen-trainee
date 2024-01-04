function concatStrings(initialString, separator) {
  let resultString = initialString;

  if (typeof separator !== 'string') {
    separator = '';
  }

  function concat(nextString) {
    if (nextString === undefined) {
      return resultString;
    }

    if (typeof nextString === 'string') {
      resultString += separator + nextString;
    }

    return concat;
  }

  return concat;
}