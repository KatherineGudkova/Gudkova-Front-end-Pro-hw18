//task 1

const userArrayOne = prompt('*************** Task 1 ***************\nEnter array elements separated by commas (,):');

const arrayOne = userArrayOne.split(',');

//console.log(arrayOne);

function calculateAverage(array) {
    let arrayNumbers = [];
    let sum = 0;

    array.forEach(element => {
        if (!isNaN(Number(element))) {
            arrayNumbers.push(+element);
            sum += Number(element);
        } 
    });

    const average = sum / arrayNumbers.length;

    console.log(arrayNumbers);

    return average;
}

alert(`*************** Task 1 ***************\nThe arithmetic mean of only the numerical elements of the array ${arrayOne} is ${calculateAverage(arrayOne)}.`);

//task 2

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
        return x + y;
        case '-':
        return x - y;
        case '*':
        return x * y;
        case '/':
        return x / y;
        case '%':
        return x % y;
        case '^':
        return Math.pow(x, y);
    }
}


const x = Number(prompt('*************** Task 2 ***************\nEnter the first number (x):'));
if (isNaN(x)) {
    alert('*************** Task 2 ***************\nError. X is not a number.');
} else {
    const znak = prompt('*************** Task 2 ***************\nChoose an operation (+, -, *, /, %, ^):');

    if(znak == '+'|| znak=='-'||znak=='*'||znak=='/'||znak=='%'||znak=='^'){
        const y = Number(prompt('*************** Task 2 ***************\nEnter the second number y:'));
        if (isNaN(y)) {
            alert('*************** Task 2 ***************\nError. Y is not a numbe.');
        } else {
            const result = doMath(x, znak, y);
            alert(`*************** Task 2 ***************\n${x} ${znak} ${y} = ${result}`);
        }
    } else {
        alert('*************** Task 2 ***************\nError. Unknown operation sign.');
    }
}

//task 3

function fillArray() {
    const outerLength = Number(prompt('*************** Task 3 ***************\nEnter the length of the main array: '));
    if (isNaN(outerLength)) {
        alert('*************** Task 3 ***************\nError. It is not a number.');
    } else {
        const innerLength = Number(prompt('*************** Task 3 ***************\nEnter the length of the internal arrays: '));
        if (isNaN(innerLength)) {
            alert('*************** Task 3 ***************\nError. It is not a number.');
        } else {
            let array = [];

            for (let i = 0; i < outerLength; i++) {
                let innerArray = [];
                for (let j = 0; j < innerLength; j++) {
                    let element = prompt(`*************** Task 3 ***************\nEnter a value for the element [${i}][${j}]:`);
                    innerArray.push(element);
                }
                array.push(innerArray);
            }

            return array;
        }
    
    }
}

function printArray(array) {
    let print = "*************** Task 3 ***************\nThe obtained two-dimensional array:\n";
    for (let i = 0; i < array.length; i++) {
        print += "[" + array[i].join(", ") + "]\n";
    }
    alert(print);
}

const userArray = fillArray();
printArray(userArray);

//task 4

function removeChars(str, charsToRemove) {
    for (const char of charsToRemove) {
        str = str.split(char).join('');
    }
    return str;
}

const inputString = prompt('*************** Task 4 ***************\nEnter a string:');
const charsToRemove = prompt('*************** Task 4 ***************\nEnter characters to delete (no spaces):');

const outputString = removeChars(inputString, charsToRemove);

alert(`*************** Task 4 ***************\nResult: ${outputString}.`);