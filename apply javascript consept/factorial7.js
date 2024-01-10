function factorial(number){
let result = 1;

for(let i = 1; i <=number; i++){

    result = result * i;
}
return result;

}


const myFavaretNumber = 7;
const fact = factorial(myFavaretNumber);
console.log('ThisNumber',myFavaretNumber, 'is Factorial Numbber ', fact);