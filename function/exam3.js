/*
3) Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.

*/
function make_avg(arr, size){
    // console.log(arr, size);
    if(size <= 0){
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < size; i++){
        sum += arr[i];
        // console.log(sum);
    }


    return sum / size;
}







const arrayNumbers = [12, 22, 34, 65, 77, 19, 99, 66];

const arraySize = arrayNumbers.length;

const avarage = make_avg(arrayNumbers, arraySize);
console.log(avarage);