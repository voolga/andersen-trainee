function selectFromInterval(arr, start, end) {
  isArrValid(arr);
  isRangeValid(start, end);

  let min, max;
  
  if (start < end) {
    min = start;
    max = end;
  } else {
    min = end;
    max = start;
  };
  let result = [];

  arr.filter((item) => {
    return item >= min && item <= max;
  });

  return result;
};

function isRangeValid(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("это не кот и он не умеет говорить мяу, дурень");
  };
};

function isArrValid(array) {
  if (!Array.isArray(array)) {
    throw new Error("это не кот и он не умеет говорить мяу, дурень");
  };

  array.some((el) => {
    if (typeof el !== "number") {
      throw new Error("это не кот и он не умеет говорить мяу, дурень");
    };
  });
};

