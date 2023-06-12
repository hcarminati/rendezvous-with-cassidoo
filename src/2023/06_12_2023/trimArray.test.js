const {trimArray} = require("./trimArray");

/*  Returns the trimmed array when...  */

test('Test 1: Removing elements from the front and back', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const n = 2;
    const m = 1;

    const trimmedArray = trimArray(array, n, m);
    expect(trimmedArray).toStrictEqual([3, 4, 5]);
});

test('Test 2: Removing elements from the front', () => {
    const array = [6, 2, 4, 3, 7, 1, 3];
    const n = 5;
    const m = 0;

    const trimmedArray = trimArray(array, n, m);
    expect(trimmedArray).toStrictEqual([1, 3]);
});

test('Test 3: Not removing any elements', () => {
    const array = [1, 7];
    const n = 0;
    const m = 0;

    const trimmedArray = trimArray(array, n, m);
    expect(trimmedArray).toStrictEqual([1, 7]);
});

test('Test 4: Removing all elements', () => {
    const array = [1, 2, 3, 4, 5];
    const n = 5;
    const m = 5;

    const trimmedArray = trimArray(array, n, m);
    expect(trimmedArray).toStrictEqual([]);
});

test('Test 5: Throws an error for negative n and m', () => {
    const array = [1, 2, 3, 4, 5];
    const n = -6;
    const m = -7;

    expect(() => {
        trimArray(array, n, m);
    }).toThrow("n and m must be positive.");
});
