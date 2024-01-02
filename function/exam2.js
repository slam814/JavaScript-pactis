/*
2) Write a function called make_avg() which will take an three integers and return the
average of those values.
*/

function make_avg(a, b, c){
    const sum = a + b + c;
    const avarage = sum / 3;
    return avarage;
}

let makeAvg = make_avg(10, 9, 10);
console.log(makeAvg);