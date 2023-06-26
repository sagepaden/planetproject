export default class Human {
    constructor(baseEarthAge) {
      this.baseEarthAge = baseEarthAge;
      this.earthYearsFrom = 0;
      this.earthYearsTil = 0;
      this.baseMercuryYears = 0;
      this.mercuryYearsFrom = 0;
      this.roundlessNum = 0;
    }

    fixMyNum(number) {
      this.roundlessNum = Math.trunc(number*100)/100;
    }

    mathEarthYearsFrom(pastAge) {
      this.earthYearsFrom = this.baseEarthAge - pastAge;
    }

    mathEarthYearsTil(futureAge) {
      this.earthYearsTil = futureAge - this.baseEarthAge;
    }

    mercury() {
      let mercYearsLong = (this.baseEarthAge / 0.24);
      this.baseMercuryYears = this.fixMyNum(mercYearsLong);
    }

    mathMercuryYearsFrom(pastAge) {
      this.mercuryYearsFrom = Number(((this.baseEarthAge - pastAge) / 0.24).toFixed(2));
    }

};