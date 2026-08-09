const numbers = [35, 21, 22, 98, 30, 15];
const evens = [];

for(const num of numbers){
    // console.log(num);
    if (num % 2 === 0){
        // console.log('Even -', num);
        evens.push(num);
    }
}
// console.log(evens);

function getEvenNumbers(array){
    const evens = [];
    for(const num of array){
        if(num % 2 === 0){
            evens.push(num);
        }
    }
    return evens;
}

const evensFromNumbers = getEvenNumbers(numbers);
console.log(evensFromNumbers);