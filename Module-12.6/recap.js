//1. How to declare a function___
function firstFunction(){

}

//2. How to call a funtion___
firstFunction();

//3. How to set parameter of a function___
function divide(number1, number2){
    console.log(number1 / number2);
}

//4. How to get a return value from a function___
function doMath(a, b, c, d){
    const firstSum = a + b;
    const secondSum = c + d;
    const multiplied = firstSum * secondSum;
    const divided= multiplied / 4;
    return divided;
}

const result = doMath(4, 8, 16, 24);

//5. call function with variable
const denominator;
divide(result, denominator);