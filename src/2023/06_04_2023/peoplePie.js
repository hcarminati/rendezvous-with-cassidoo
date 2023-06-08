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

// Test 1
const person1 = [
    new Person('Joe', 9),
    new Person('Cami', 3),
    new Person('Cassidy', 4)
];
const numPieces1 = 8;
const result1 = mmmPie(person1, numPieces1);
console.assert(result1 === 2, 'Test 1 failed');

// Test 2
const person2 = [];
const numPieces2 = 5;
const result2 = mmmPie(person2, numPieces2);
console.assert(result2 === 0, 'Test 2 failed');

// Test 3
const person3 = [new Person('Alice', 1)];
const numPieces3 = 3;
const result3 = mmmPie(person3, numPieces3);
console.assert(result3 === 1, 'Test 3 failed');

// Test 4
const person4 = [
    new Person('Joe', 2),
    new Person('Cami', 4),
    new Person('Cassidy', 5),
    new Person('Lucy', 2)
];
const numPieces4 = 4;
const result4 = mmmPie(person4, numPieces4);
console.assert(result4 === 4, 'Test 4 failed');
