class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  constructor(maxLength = 10) {
    this.last = null;
    this.maxLength = maxLength;
    this.length = 0;
  }

  push(data) {
    if (this.length === this.maxLength) {
      throw new Error('stack is full');
    }

    this.last = new Node(data, this.last);
    this.length++;
  }

  pop() {
    if (this.last === null) {
      throw new Error('stack is empty');
    }

    const result = this.last.data;

    this.last = this.last.prev;
    this.length--;

    return result;
  }

  peek() {
      return this.last?.data ?? null;
  }

  isEmpty() {
    return this.last === null;
  }

  toArray() {
    const arrFromStack = [];
    let currentNode = this.last;

    while (currentNode) {
      arrFromStack.push(currentNode.data);
      currentNode = currentNode.prev;
    }

    return arrFromStack.reverse();
  }

  static fromIterable(iterable) {
    if (!(iterable?.[Symbol.iterator] instanceof Function)) {
      throw new TypeError('passed data type is NOT iterable');
    }

    const stack = new Stack(iterable.length);

    for (let el of iterable) {
      stack.push(el);
    }

    return stack;
  }
};