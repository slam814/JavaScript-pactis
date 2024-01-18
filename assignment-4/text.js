
function canPay(changeArray, totalDue) {
if(changeArray.length === 0){
    return "Your array is Empty! Please input Amount"
}
let totalTaka = 0;
for(let i = 0; i < changeArray.length; i++){
    const taka = changeArray[i];
    totalTaka = totalTaka + taka;
}

if(totalTaka >= totalDue){
    return true;
}else{
    return false;
}

}

const inputA1 =[];
const inputA2 = 10;
const outputA = canPay(inputA1, inputA2);
console.log(outputA)


const inputB1 =[1, 2, 5];
const inputB2 = 10;
const outputB = canPay(inputB1, inputB2);
console.log(outputB)



const inputC1 =[1, 5, 5];
const inputC2 = 10;
const outputC = canPay(inputC1, inputC2);
console.log(outputC)
