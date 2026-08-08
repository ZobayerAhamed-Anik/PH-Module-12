const numbers = [23, 53, 32, 65, 39];

let sum = 0;
for(const num of numbers){
    sum = sum + num;
    console.log(num);
}
console.log('The sum is', sum);

let sumOdds = 0;
const odds = [ 33, 55, 77];
for(const oddNum of odds){
    sumOdds = sumOdds + oddNum;
    console.log(oddNum);
}
console.log('The sum of odds is', sumOdds);

let sumEvens = 0;
const evens = [ 44, 66, 88];
for(const evenNum of evens){
    sumEvens = sumEvens + evenNum;
    console.log(evenNum);
}
console.log('The sum of evens is', sumEvens);

console.log();
console.log('----------------------------------------------------------');
console.log();
console.log('Using Function...');

function sumOfArray(numbersInArray){
    let sum = 0;
    for(const number of numbersInArray){
        sum += number;
        // console.log(number, "=>", sum);
    }
    return sum;
}

const sumOfNumbers = sumOfArray(numbers);
console.log('The sum of numbers is', sumOfNumbers);
const sumOfOdds = sumOfArray(odds);
console.log('The sum of odd numbers is', sumOfOdds);
const sumOfEvens = sumOfArray(evens);
console.log('The sum of evennumbers is', sumOfEvens);