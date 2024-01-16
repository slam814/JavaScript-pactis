function centimeterToMeter(number){
    if(typeof number !== 'number'){
        return 'Enter a number please...'
    }
    return number / 100;
}


const result = centimeterToMeter();
console.log(result);