class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  };
};

class Stack {
  constructor(maxLength = 10, length = 0) {
    this.last = null;
    this.maxLength = maxLength;
    this.length = length;
  };

  push(data) {
    if (this.length === this.maxLength) {
      throw new Error("stack is full");
    }

    this.last = new Node(data, this.last);
    this.length++;
  };

  pop() {
    if (this.last === null) {
      throw new Error("stack is empty");
    }

    let result = this.last.data;

    this.last = this.last.prev;
    this.length--;

    return result;
  };

  peek() {
    if (this.last) {
      return this.last.data;
    } else {
      return null;
    }
  };

  isEmpty() {
    return this.last === null;
  };

  toArray() {
    let arrFromStack = [];
    let currentNode = this.last;

    while (currentNode) {
      arrFromStack.push(currentNode.data);
      currentNode = currentNode.prev;
    }

    return arrFromStack.reverse();
  };

  static fromIterable(iterable) {
    if (iterable?.[Symbol.iterator] instanceof Function) {
      const stack = new Stack(iterable.length);

      for (let el of iterable) {
        stack.push(el);
      }

      return stack;
    } else {
      throw new TypeError("passed data type is NOT iterable");
    }
  };
};
