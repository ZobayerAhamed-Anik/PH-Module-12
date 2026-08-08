function isOdd(number){
    // console.log(number,' diveded by 2 gives remainder of',number % 2);
    if(number % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

let isNumber1Odd = isOdd(54);
let isNumber2Odd = isOdd(57);

console.log('Is the number1 Odd?', isNumber1Odd);
console.log('Is the number2 Odd?', isNumber2Odd);
