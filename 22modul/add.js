// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(12, 45);

// console.log(result);

function add(num1, num2){
    console.log(num1, num2);

    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter Onley Number'
    }
    return num1 + num2;
}


const result = add(44, 12);
console.log(result);