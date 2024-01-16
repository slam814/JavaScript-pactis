function multiply(num1, num2){
    console.log(num1, num2);
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number'
    }
    return num1 * num2;
}


const output = multiply(12, 12);
console.log(output);


