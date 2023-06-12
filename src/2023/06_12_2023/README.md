# Trim Array - June 12, 2023
Given an array arr and integers n and m, remove n elements from the front of the array,
and m elements from the back. Assume that n + m <= arr.length.

### Examples
```
trimArray([1, 2, 3, 4, 5, 6], 2, 1)
[3, 4, 5]

trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)
[1, 3]

trimArray([1, 7], 0, 0)
[1, 7]
```

## What I learned

* [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 
   - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

* [Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) 
   - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent. 
   - However, if we assign a completely new value to an object in the copied array, it will not affect the corresponding object in the original array. The copied array will now have a new object with a different reference, while the original array retains the original object.
