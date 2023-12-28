const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    if (typeof this.from !== 'number' || typeof this.to !== 'number') {
      throw new Error('Properties "from" and "to" must be a numbers');
    };

    if (this.to < this.from) {
      throw new Error('Property "to" cant be less than "from"');
    };

    this.current = this.from;
    return this;
  },

  next() {

    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};


