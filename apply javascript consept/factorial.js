function factorial(number){
    let result = 1;

    for(let i = number; i >= 1; i--){

        result = result * i;
    }



    return result;
}


const myNumber = 9;
const fact = factorial(myNumber);
console.log(fact, 'is factoral of:', myNumber);