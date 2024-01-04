const infiniteCurry = () => {
  const reduceValue = (args) =>
    args.reduce((acc, a) => {
      return acc + a;
    });

  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        return reduceValue(args);
      }
      return next(...args, ...x);
    };
  };

  return next();
};

const iSum = infiniteCurry();

console.log(iSum("first")("second")("third")("fourth", "fifth", "LOL")("")());
console.log(iSum(1)(3, 4)(5, 6)(7, 8, 9)()); // 43
console.log(iSum(3, 4, 5)()); // 12

// function concatStrings(initialString, separator = "") {
//   let result = initialString;

//   function concat(nextString) {
//     // console.log(nextString);
//     if (nextString === undefined) {
//       return result;
//     }

//     if (typeof nextString === "string") {
//       if (separator && typeof separator === "string") {
//         result += separator + nextString;
//       }
//       result += nextString;
//     }

//     return concat;
//   }

//   return concat;
// }

// concatStrings("some-value")("333")(123n)();
