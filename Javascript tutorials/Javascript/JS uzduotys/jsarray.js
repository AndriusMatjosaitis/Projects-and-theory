// Create an array, containing 10 numbers.
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function outputArray() {
    console.log('Array after modification: ' + numArray);
}

// Remove the last element from the array and log it in console.
console.log('Removed last element: ' + numArray.pop());
outputArray();

// Add a new element to the end of the array.
// (best way)
numArray.push(20);
outputArray();
// (another way - not as great)
// numArray[numArray.length] = 20;
// console.log('New Array: ' + numArray);

// Change the value of the array's second element to zero.
numArray[1] = 0;
outputArray();

// Change the value of every third array's element to one. Use loops to do it.
// one way
for (let enumerator = 0; enumerator < numArray.length; enumerator += 3) {
    numArray[enumerator] = 1;
}
// another way
// for (let i = 0; i < numArray.length; i++) {
//     const position = i + 1;
//     if (position % 3 === 0) {
//         numArray[i] = 1;
//     }
// }
outputArray();

// After each of the operations, you can output your whole array in console to see what happens.
// I will create new function for this :)