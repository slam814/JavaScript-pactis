function multiplicationOfNumbers(number){
    let result = 1;
    
    for(let i = number; i >= 1; i-- ){
        result = result * i;

        console.log(i, result);
    }



    return result;
}


const myFaveretNumber = 14;
const result1 = multiplicationOfNumbers(myFaveretNumber);
console.log(result1);