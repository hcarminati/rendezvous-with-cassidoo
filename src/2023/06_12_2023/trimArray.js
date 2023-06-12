/*
Given an array arr and integers n and m, remove n elements from the front of the array,
and m elements from the back. Assume that n + m <= arr.length.

Example:
> trimArray([1, 2, 3, 4, 5, 6], 2, 1)
> [3, 4, 5]

> trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)
> [1, 3]

> trimArray([1, 7], 0, 0)
> [1, 7]
 */

function trimArray(arr, n, m) {
    if(n < 0 || m < 0) {
        throw new Error("n and m must be positive.")
    }

    let trimmed = [];
    let count = 0;

    for(let i = n; i < arr.length-m; i++) {
        trimmed[count] = arr[i];
        count++;
    }

    return trimmed;
}

module.exports = {
    trimArray
};