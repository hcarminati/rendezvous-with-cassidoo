function trimArray(arr, n, m) {
    if(n < 0 || m < 0) {
        throw new Error("n and m must be positive.")
    }
    if (totalToRemove > arr.length) {
        return [];
    }

    const totalToRemove = n + m;
    const trimmedArray = arr.slice(n, arr.length - m);

    return trimmedArray;
}