function isEven(number){
    // console.log(number,' diveded by 2 gives remainder of',number % 2);
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let isNumber1Even = isEven(54);
let isNumber2Even = isEven(57);

console.log('Is the number Even?', isNumber1Even);
