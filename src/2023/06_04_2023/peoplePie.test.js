const { Person, mmmPie } = require('./peoplePie');

test('Calculates the number of pies needed correctly', () => {
    const peopleArray = [
        new Person('Joe', 9),
        new Person('Cami', 3),
        new Person('Cassidy', 4)
    ];
    const numPiecesPerPie = 8;

    const piesNeeded = mmmPie(peopleArray, numPiecesPerPie);
    expect(piesNeeded).toBe(2);
});
