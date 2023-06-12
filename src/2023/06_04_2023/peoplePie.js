class Person {
    constructor(name, num) {
        this.name = name;
        this.num = num;
    }
}

function mmmPie(array, numPieces) {
    let hungryPieces = 0;

    for(let i = 0; i < array.length; i++) {
        hungryPieces += array[i].num;
    }

    return Math.ceil(hungryPieces / numPieces);
}

module.exports = {
    Person,
    mmmPie,
};