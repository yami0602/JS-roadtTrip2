// Video 4.1 accompanies this exercise

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value. Be careful to think about the possibility of
// equality as well and return one of the numbers. Then test your function
// by calling it with two different numbers and again with two equal numbers.

function maxOf2(num1, num2 ){
    if(num1 > num2 ){
        return num1
    }
    else {
        return num2
    }
   
}
console.log(maxOf2 (3, 2)