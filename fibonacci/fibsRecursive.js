//Recursive Approach:

/**
 * 
 * @param {*} num the number of elements in the fibonacci sequence
 * @returns the array of elements in the fibonacci sequence
 */
const fibRecursive = (num) => {
    //Base cases:
    if (num == 1) return [0] 
    if (num == 2) return [0,1]
    if (num <= 0) return []

    //recursive case:
    let arr = fibRecursive(num - 1) //create the array calling fibRecursive
    arr.push(arr[num-2] + arr[num-3]);
    return arr;
}

console.log(fibRecursive(8))