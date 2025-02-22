//mergeSort is a recursive algorithm
/**
 * 
 * @param {*} arr the array to be sorted
 * @returns the sorted array
 */
const mergeSort = (arr) => {
    //base case:
    if (arr.length == 1)  return arr;
    const n = arr.length; // n is length of the array
    const m = Math.floor(n / 2) ; // m is the half point
    const left = arr.slice(0,m)
    const right = arr.slice(m)
    return sortArrays(mergeSort(left) ,mergeSort(right))
}


//sortArrays takes 2 arrays
/**
 * 
 * @param {*} arrL:Array the left Array
 * @param {*} arrR the right Array
 * @returns sorted Array of merging left and right arrays
 */
const sortArrays = (arrL, arrR) => {
    const sortedArray = []
    let iL = 0; //index of arrL
    let iR = 0; // index of arrR

    while (iL < arrL.length && iR < arrR.length  ){ //push the smaller value into sortedArray
        if(arrL[iL] < arrR[iR]) {
            sortedArray.push(arrL[iL]);
            iL++;
        } else {
            sortedArray.push(arrR[iR]);
            iR++;
        }
    }

    while (iL < arrL.length){ //when right Array is empty
        sortedArray.push(arrL[iL]);
        iL++;
    }
    while (iR < arrR.length) { // when left Array is empty
        sortedArray.push(arrR[iR]);
        iR++;
    }
    return sortedArray
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))//   [0, 1, 1, 2, 3, 5, 8, 13]
    