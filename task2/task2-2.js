function selectFromInterval(arr, start, end) {
  if (!isArrValid(arr)) {
    throw new Error(
      "First argument must be array which contains only numbers inside"
    );
  } else if (!isRangeValid(start, end)) {
    throw new Error("2nd and 3rd arguments must be numbers");
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  return arr.filter((item) => {
    return item >= start && item <= end;
  });
};

function isRangeValid(start, end) {
  return typeof start === "number" || typeof end === "number";
};

function isArrValid(array) {
  return (
    Array.isArray(array) &&
    array.every((el) => {
      return typeof el === "number";
    })
  );
};

