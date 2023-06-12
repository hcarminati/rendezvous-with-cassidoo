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