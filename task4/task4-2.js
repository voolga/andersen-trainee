class Calculator {
  constructor(num1, num2) {
    if (!this.#isValidNumber(num1) || !this.#isValidNumber(num2)) {
      throw new TypeError('Arguments are invalid');
    }

    this.num1 = num1;
    this.num2 = num2;

    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSumm = this.logSumm.bind(this);
    this.logMult = this.logMult.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDivid = this.logDivid.bind(this);
  }

  setX(value) {
    if (!this.#isValidNumber(value)) {
      throw new TypeError(`Invalid X value. Got ${typeof value}`);
  }
    this.num1 = value;
  }

  setY(value) {
    if (!this.#isValidNumber(value)) {
      throw new TypeError(`Invalid Y value. Got ${typeof value}`);
  }
    this.num2 = value;
  }

  logSumm() {
    console.log(this.num1 + this.num2);
  }

  logMult() {
    console.log(this.num1 * this.num2);
  }

  logSub() {
    console.log(this.num1 - this.num2);
  }

  logDivid() {
    if (this.num2 === 0) {
      throw new Error("Division by zero is forbidden");
    }
    console.log(this.num1 / this.num2);
  }

  #isValidNumber(value) {
    return typeof value === "number" && isFinite(value);
  }
}