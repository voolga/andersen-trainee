const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error('Properties "from" and "to" must be a numbers');
    }

    if (this.to < this.from) {
      throw new Error('Property "to" cant be less than "from"');
    }

    let current = this.from;
    const last = this.to;

    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        }
        
        return { done: true };
      },
    };
  },
};



