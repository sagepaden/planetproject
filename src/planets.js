export default class Human {
    constructor(baseEarthAge) {
      this.baseEarthAge = baseEarthAge;
      this.yearsFrom = 0;
    }

    earthYearsFrom(pastAge) {
      this.yearsFrom = this.baseEarthAge - pastAge;
    }
};