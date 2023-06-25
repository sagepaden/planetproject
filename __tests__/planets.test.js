import Human from '../src/planets.js';

    describe('Human', () => {
    let human; 

    beforeEach(() => {
        human = new Human (56);
    });

    test('should create a "Human" object with the age of 33', () => {
        expect(human.baseEarthAge).toEqual(56);
    })
})