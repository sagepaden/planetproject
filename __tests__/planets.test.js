import Human from '../src/planets.js';

    describe('Human', () => {
    let human; 

    beforeEach(() => {
        human = new Human (56);
    });

    test('should return a number with 2 decimal digits without rounding', () => {
        human.fixMyNum(2.3789);
        expect(human.dummy).toEqual(2.37);
    })

    test('should create a "Human" object with the age of 56', () => {
        expect(human.baseEarthAge).toEqual(56);
    });

    test('should return a method that tells you how many years from a past age you are at your current age', () => {
        human.mathEarthYearsFrom(43)
        expect(human.earthYearsFrom).toEqual(13);
    });

    test('should return a method that tells you how many years from a future age you are at your current age', () => {
        human.mathEarthYearsTil(61)
        expect(human.earthYearsTil).toEqual(5);
    });

    test('should return a method that calculates Earth years into Mercury years', () => {
        human.mercury();
        expect(human.baseMercuryYears).toEqual(233.33);
    });

    // test('should return a method that tells you how many Mercury years from a past age you are at your current age', () => {
    //     human.mathMercuryYearsFrom(43);
    //     expect(human.mercuryYearsFrom).toEqual(54.16)
    // });


})