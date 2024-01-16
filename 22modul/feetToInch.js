function feetToInch(number){
    if(typeof number !== 'number'){
        return 'Error.......Please Enter a Feet number'
    }
    return number * 12;
}


const myFeet = 12;
const result = feetToInch(myFeet);
console.log(result);