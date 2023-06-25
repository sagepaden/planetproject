import Human from '../src/planets.js';

    describe('Human', () => {
    let human; 

    beforeEach(() => {
        human = new Human (56);
    });

    test('should create a "Human" object with the age of 56', () => {
        expect(human.baseEarthAge).toEqual(56);
    });

    test('should return a method that tells you how many years from an age you are at your current age', () => {
        human.earthYearsFrom(46)
        expect(human.yearsFrom).toEqual(13);
    });
})