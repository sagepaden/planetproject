import Human from '../src/planets.js';

    describe('Human', () => {
    let human; 

    beforeEach(() => {
        human = new Human (56);
    });

    test('should return a number with 2 decimal digits without rounding', () => {
        expect(human.fixMyNum(2.3789)).toEqual(2.37);
    })

    test('should create a "Human" object with the age of 56', () => {
        expect(human.baseEarthAge).toEqual(56);
    });

    test('should return a method that tells you how many years from a past age you are at your current age', () => {
        human.mathEarthYearsFrom(43);
        expect(human.earthYearsFrom).toEqual(13);
    });

    test('should return a method that tells you how many years from a future age you are at your current age', () => {
        human.mathEarthYearsTil(61);
        expect(human.earthYearsTil).toEqual(5);
    });



    test('should return a method that calculates Earth years into Mercury years', () => {
        human.mercury();
        expect(human.baseMercuryYears).toEqual(233.33);
    });

    test('should return a method that tells you how many Mercury years from a past age you are at your current age', () => {
        human.mathMercuryYearsFrom(43);
        expect(human.mercuryYearsFrom).toEqual(54.16);
    });

    test('should return a method that tells you how many Mercury years from a future age you are at your current age', () => {
        human.mathMercuryYearsTil(61);
        expect(human.mercuryYearsTil).toEqual(20.83);
    });



    test('should return a method that calculates Earth years into Venus years', () => {
        human.venus();
        expect(human.baseVenusYears).toEqual(90.32);
    });

    test('should return a method that tells you how many Mercury years from a past age you are at your current age', () => {
        human.mathVenusYearsFrom(43);
        expect(human.venusYearsFrom).toEqual(20.96);
    });

    test('should return a method that tells you how many Venus Years from a future age you are, at your current age', () => {
        human.mathVenusYearsTil(61);
        expect(human.venusYearsTil).toEqual(8.06);
    })



    test('should return a method that calculates Earth years into Mars years', () => {
        human.mars();
        expect(human.baseMarsYears).toEqual(29.78);
    });

    test('should return a method that tells you how many Mars years from a past age you are at your current age', () => {
        human.mathMarsYearsFrom(43);
        expect(human.marsYearsFrom).toEqual(6.91);
    });
})