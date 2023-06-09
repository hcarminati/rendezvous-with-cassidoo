/* Solution 1 */
const PIE_SLICES = 8;

const mmmPie = (arr) =>
    Math.ceil(arr.map(({ num }) => num).reduce((a, b) => a + b, 0) / PIE_SLICES);

/*
reduce(callbackFn, initialValue)
Executes a user-supplied "reducer" callback function on each element of the array, in order,
passing in the return value from the calculation on the preceding element.
*/

/* Solution 2 */
function mmmPie(arr, slices) {
    return Math.ceil(
        arr.reduce((acc, { num }) => {
            return acc + num;
        }, 0) / slices
    );
}