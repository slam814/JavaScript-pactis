function sumOfArray(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;

        // check debag
        //console.log(index, element, sum);
    }

    return sum;
}


const array = [5, 7, 8, 10, 45, 30];
const sumAnArray = sumOfArray(array);
console.log(sumAnArray);