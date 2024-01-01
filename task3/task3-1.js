Array.prototype.myFilter = function (callbackFunc, thisArg) {
  if (typeof callbackFunc !== 'function') {
    throw new TypeError(`Callback must be a function. Got: ${typeof callback}`);
  } 
  
  if (!Array.isArray(this)) {
    throw new TypeError('Method myFIlter can ONLY be applied only on arrays')
  }

  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFunc.call(thisArg, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

(function () {
  const newMethods = ['myFilter'];

  newMethods.forEach((method) => {
    Object.defineProperty(Array.prototype, method, {
      enumerable: false,
    });
  });
})();