function isInteger(number){
    if(typeof number !== 'number'){
        return 'Please provide a number'
    }else if(number % 1 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger('Hello'));