class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
  }

  #isStringPropertyValid(value) {
    return typeof value === 'string' && value.length >= 1 && value.length <= 50;
  }

  #throwStringPropertyError(propName) {
    throw new Error(`invalid value of ${propName}`);
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (!this.#isStringPropertyValid(value)) {
      this.#throwStringPropertyError('brand');
    }

    this.#brand = value;
  }

  get model() {
    return this.#model;
  }
  
  set model(value) {
    if (!this.#isStringPropertyValid(value)) {
      this.#throwStringPropertyError('model');
    }

    this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (!(value >= 1900 && value <= 2024)) {
      this.#throwStringPropertyError('yearOfManufacturing');
    }

    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (!(value >= 100 && value <= 300)) {
      this.#throwStringPropertyError('maxSpeed');
    }

    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (!(value >= 5 && value <= 20)) {
      this.#throwStringPropertyError('maxFuelVolume ');
    }

    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number') {
      this.#throwStringPropertyError('fuelConsumption');
    }

    this.#fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuel) {
    if (typeof fuel !== 'number' || fuel <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (this.#currentFuelVolume + fuel > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += fuel;
  }

  drive(speed, hours) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (typeof hours !== 'number' || hours <= 0) {
      throw new Error('Неверное количество часов');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    let requiredFuel = (speed * hours * this.#fuelConsumption) / 100;

    if (this.#currentFuelVolume < requiredFuel) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= requiredFuel;
    this.#mileage += speed * hours;
  }
}
