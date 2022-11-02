//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]
console.log('test')

OddOne = exerciseOneArr[2]
console.log(OddOne)


//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 
// first we need to loop through the array and see if its a negative
// then we need to add the sum of all the positive integer in the array and sum the total 
let sum = 0;
for (let e of numbers1){
    sum += e
}
console.log(sum);
// while(e < 0){
//     // x*=2
//     console.log(x)
// }

let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1]
let sum1 = 0;
for (let e of numbers2){
    sum1 += e
}
console.log(sum1)