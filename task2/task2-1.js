function makeObjectDeepCopy(obj) {
  if (obj === null || typeof obj !== "object" || typeof obj === "function") {
    return obj;
  }

  let copyObj;

  if (Array.isArray(obj)) {
    copyObj = [];
  } else {
    copyObj = {};
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      copyObj[key] = makeObjectDeepCopy(obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }

  return copyObj;
}

// test

// const obj = [{
//   a: 1,
//   b: 2,
//   c: {
//     d: 1,
//     e: {
//       f: 3,
//       v: [{m: 6}, {l: 33}]
//     },
//   },
// }];
// let newObj = makeObjectDeepCopy(obj);



