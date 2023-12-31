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

    this.baseMarsYears = 0;
    this.marsYearsFrom = 0;
    this.marsYearsTil = 0;

    this.baseJupiterYears = 0;
    this.jupiterYearsFrom = 0;
    this.jupiterYearsTil = 0;
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
    let mercYLong = Number(this.baseEarthAge / .24);
    this.baseMercuryYears = this.fixMyNum(mercYLong);
  }

  mathMercuryYearsFrom(pastAge) {
    let mercYFLong = Number((this.baseEarthAge - pastAge) / .24);
    this.mercuryYearsFrom = this.fixMyNum(mercYFLong);
  }

  mathMercuryYearsTil(futureAge) {
    let mercYTLong = Number((futureAge - this.baseEarthAge) / .24);
    this.mercuryYearsTil = this.fixMyNum(mercYTLong);
  }


  venus() {
    let venusYLong = Number(this.baseEarthAge / .62);
    this.baseVenusYears = this.fixMyNum(venusYLong);
  }

  mathVenusYearsFrom(pastAge) {
    let venYFLong = Number((this.baseEarthAge - pastAge) / .62);
    this.venusYearsFrom = this.fixMyNum(venYFLong);
  }

  mathVenusYearsTil(futureAge) {
    let venYTLong = Number((futureAge - this.baseEarthAge) / .62);
    this.venusYearsTil = this.fixMyNum(venYTLong);
  }


  mars() {
    let marsYLong = Number(this.baseEarthAge / 1.88);
    this.baseMarsYears = this.fixMyNum(marsYLong);
  }

  mathMarsYearsFrom(pastAge) {
    let marsYFLong = Number((this.baseEarthAge - pastAge) / 1.88);
    this.marsYearsFrom = this.fixMyNum(marsYFLong);
  }

  mathMarsYearsTil(futureAge) {
    let marsYTLong = Number((futureAge - this.baseEarthAge) / 1.88);
    this.marsYearsTil = this.fixMyNum(marsYTLong);
  }


  jupiter() {
    let jupYLong = Number(this.baseEarthAge / 11.86);
    this.baseJupiterYears = this.fixMyNum(jupYLong);
  }

  mathJupiterYearsFrom(pastAge) {
    let jupYFLong = Number((this.baseEarthAge - pastAge) / 11.86);
    this.jupiterYearsFrom = this.fixMyNum(jupYFLong);
  }

  mathJupiterYearsTil(futureAge) {
    let jupYTLong = Number((futureAge - this.baseEarthAge) / 11.86);
    this.jupiterYearsTil = this.fixMyNum(jupYTLong);
  }
}