
/* eslint-disable */
export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== "number") {
      throw new TypeError("Sqft must be a number");
    }
    this._sqft = sqft;
  }
}
