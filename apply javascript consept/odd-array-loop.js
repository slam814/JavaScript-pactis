function getSumOfArray(numbers){
    // let sum = 55;
    let oddNumbers = [];
    for(let i = 0; i <numbers.length; i ++){
        const index = i;
        const element = numbers[index];
        // sum = sum + element;
        // console.log(index, element, sum);
    
        if(element % 2 != 0){
        console.log(index, element);

        oddNumbers.push(element);

        }

    }
    return oddNumbers;
}

const myNumbers = [12, 56, 66, 78, 32, 19, 97, 14, 91];

const result1 = getSumOfArray(myNumbers);
console.log(result1);