# Buying Pie - June 04, 2023
Given an array of people objects (where each person has a name and a number of pie pieces they’re
hungry for) and a number for the number of pieces that the pie can be cut into, return the number
of pies you need to buy.

### Examples
```
arr = [{ name: Joe, num: 9 }, 
       { name: Cami, num: 3 }, 
       { name: Cassidy, num: 4 }]

mmmPie(arr, 8)
2 
```
16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought

## What I learned

* [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 
   - array.reduce(callback, initialValue);
   - Executes a user-supplied "reducer" callback function on each element of the array, in order,
     passing in the return value from the calculation on the preceding element.
   - The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
