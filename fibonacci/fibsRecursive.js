//Recursive Approach:

/**
 * 
 * @param {*} num the number of elements in the fibonacci sequence
 * @returns the array of elements in the fibonacci sequence
 */
const fibRecursive = (num) => {
    //Base cases:
    if (n == 1) return [0] 
    if (n == 2) return [0,1]
    if (n <= 0) return []

    //recursive case:
    let arr = fibRecursive(n - 1) //create the array calling fibRecursive
    arr.push(arr[n-2] + arr[n-3]);
    return arr;
}