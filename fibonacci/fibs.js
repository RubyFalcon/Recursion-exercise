// Iterative approach:

/**
 * 
 * @param {*} num the number of elements in the fibonacci sequence
 * @returns the array of elements in the fibonacci sequence
 */

const fibs = (num) => {
    let answer = [];
    let x= 0; //1st element
    let y = 1; //2nd element
    let z; //sum of x,y
    let i = 2

    answer.push(x);
    answer.push(y)

    while (i < num) {
        z = x + y;
        x = y;
        y = z;
        answer.push(z) //store current element
        i+=1;
    }
    return answer
}

console.log(fibs(8))