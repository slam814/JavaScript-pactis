function findLeapYear(array){

    console.log(array)
    for(let i = 0; i < array.length; i++){

        const index = i;
        const element = array[index];
        if((element % 4 === 0 && element % 100 !== 0) || element % 400 === 0){
            console.log(element, 'This Year is LeapYear')
        }
        else{
            console.log(element, 'This Year is not LeapYear')
        }

    }

}

const arrayMy = [2023, 2024, 2025, 2028, 2030];
const result = findLeapYear(arrayMy);