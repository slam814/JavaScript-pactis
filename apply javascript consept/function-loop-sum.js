function loopOfSum(number){
    let sum = 0;

    for(let i = 0; i <= number; i++){

        sum = sum + i;

        console.log(sum, i)
    }




return sum;
}

const myNUmber = 24;
const result = loopOfSum(myNUmber);
console.log(result);
