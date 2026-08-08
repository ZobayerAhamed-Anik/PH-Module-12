console.log("====================================");
//1.
function chowdhurify(name){
    const fullName = name + ' Chowdhury';
    return fullName;
}

const robinChow = chowdhurify('Robin');
console.log(robinChow);
const alifChow = chowdhurify('Alif');
console.log(alifChow);
console.log("====================================");
console.log();

//2.
function fullName(firstName, lastName){
    console.log(firstName, lastName);
}

let fname = 'Zobayer';
let lname = 'Ahamed';

fullName(fname,lname);
console.log("====================================");
console.log();

//3.
function doubleOrHalf(price, isDouble){
    if(isDouble === true){
        const askingPrice = price * 2;
        return askingPrice;
    }
    else{
        return price;
    }
}

const myPrice = doubleOrHalf(100, true);
console.log('Price for Mango-People:', myPrice);
const leaderPrice = doubleOrHalf(100, false);
console.log('Price for leader:      ', leaderPrice);
console.log("====================================");
console.log();

//4.
function firstElementDouble(array){
    console.log("Got the parameter value", array)
    const doubledFirstElement = array[0] * 2;
    return doubledFirstElement;
}

const numbers = [34, 43, 55, 18, 13];
const doubledFirst = firstElementDouble(numbers);
console.log('Double of the firs element', doubledFirst);
console.log("====================================");
console.log();

//5.
const student = {
    name: 'Abdul Jobbar',
    id: 22223232,
    marks: 78
};

function gotAPlus(student){
    console.log('Got the student:', student);
    const marks = student.marks;
    console.log('Student got ', marks);
    if (marks >= 80){
        return 'A+';
    }
    else{
        return 'A+ tor kopale nai, bolda';
    }
}

const studentGrade = gotAPlus(student);
console.log(studentGrade);
console.log("====================================");
console.log();