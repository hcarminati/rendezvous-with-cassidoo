/*
Given an array of people objects (where each person has a name and a number of pie pieces they’re
hungry for) and a number for the number of pieces that the pie can be cut into, return the number
of pies you need to buy.

Example:
> arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
> mmmPie(arr, 8)
> 2 // 16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought
 */

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