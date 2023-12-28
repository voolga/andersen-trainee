function makeObjectDeepCopy(obj) {
  if (!isValidObjectForCopy(obj)) {
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
};

function isValidObjectForCopy(obj) {
  return obj !== null && typeof obj === "object" && typeof obj !== "function";
};