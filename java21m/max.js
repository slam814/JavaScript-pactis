function maxInArray(numbers){
    console.log(numbers);
    
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];

        if(element > largest){
            largest = element;
        }
    }
    return largest;
}


const heighis = [45, 98, 96, 456, 12, 897];
const tallest = maxInArray(heighis);
console.log(`tallest person is: ${tallest}`);