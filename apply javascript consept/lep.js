function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const result1 = isEven(98);
console.log(result1);
const inputNumber = 117;
const evenNumberResult = isEven(inputNumber);
console.log(evenNumberResult);