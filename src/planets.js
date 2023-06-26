export default class Human {
    constructor(baseEarthAge) {
      this.baseEarthAge = baseEarthAge;
      this.earthYearsFrom = 0;
      this.earthYearsTil = 0;
      
      this.baseMercuryYears = 0;
      this.mercuryYearsFrom = 0;
      this.mercuryYearsTil = 0;

      this.baseVenusYears = 0;
      this.venusYearsFrom = 0;
      this.venusYearsTil = 0;

    }

    fixMyNum(number) {
      return Math.trunc(number*100)/100;
    }

    mathEarthYearsFrom(pastAge) {
      this.earthYearsFrom = this.baseEarthAge - pastAge;
    }

    mathEarthYearsTil(futureAge) {
      this.earthYearsTil = futureAge - this.baseEarthAge;
    }

    mercury() {
      let mercYLong = Number(this.baseEarthAge / 0.24);
      this.baseMercuryYears = this.fixMyNum(mercYLong);
    }

    mathMercuryYearsFrom(pastAge) {
      let mercYFLong = Number((this.baseEarthAge - pastAge) / 0.24);
      this.mercuryYearsFrom = this.fixMyNum(mercYFLong);
    }

    mathMercuryYearsTil(futureAge) {
      let mercYTLong = Number((futureAge - this.baseEarthAge) / 0.24);
      this.mercuryYearsTil = this.fixMyNum(mercYTLong);
    }

};