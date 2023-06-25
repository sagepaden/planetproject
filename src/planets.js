export default class Human {
    constructor(baseEarthAge) {
      this.baseEarthAge = baseEarthAge;
      this.yearsFrom = 0;
      this.yearsTil = 0;
      this.mercuryYears = 0;
    }

    earthYearsFrom(pastAge) {
      this.yearsFrom = this.baseEarthAge - pastAge;
    }

    earthYearsTil(futureAge) {
      this.yearsTil = futureAge - this.baseEarthAge;
    }

    mercury() {
      this.mercuryYears = Number((this.baseEarthAge / 0.24).toFixed(2));
    }
};