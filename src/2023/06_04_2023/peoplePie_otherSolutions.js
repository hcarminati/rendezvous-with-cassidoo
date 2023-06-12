/* Solution 1 */
const PIE_SLICES = 8;

const mmmPie = (arr) =>
    Math.ceil(arr.map(({ num }) => num).reduce((a, b) => a + b, 0) / PIE_SLICES);

/* Solution 2 */
function mmmPie(arr, slices) {
    return Math.ceil(
        arr.reduce((acc, { num }) => {
            return acc + num;
        }, 0) / slices
    );
}