// Find the nth Fibonacci number
// Write a JavaScript program to get the first n Fibonacci numbers.

// Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

// fibonnaci(0)=> [0]
// fibonnaci(1)=> [0,1]
// fibonnaci(2)=> [0,1,1]
// fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]
//     fibonnaci(8) //  [0, 1, 1, 2, 3, 5, 8, 13,21]  

function fibonnaci(n){
if (n === 0){ return [0];}
if (n === 1){ return [0, 1];}

const previous = fibonnaci(n - 1);
const currentNumber = previous[previous.length -2] + previous[previous.length - 1];
previous.push(currentNumber);

return previous;
}

console.log(fibonnaci(8));
console.log(fibonnaci(4));