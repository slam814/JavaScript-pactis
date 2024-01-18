
function findAddress(arr){
    // console.log(arr);
    if(
        arr.hasOwnProperty('name') &&
        arr.hasOwnProperty('house') &&
        arr.hasOwnProperty('mobile') &&
        arr.hasOwnProperty('email') 
    ){
        return `${arr.name}, ${arr.house}, ${arr.mobile}, ${arr.email}`;
    }else{
        const name = arr.name || '__';
        const house = arr.house || '__';
        const mobile = arr.mobile || '__';
        const email = arr.email || '__';

        return `${name}, ${house}, ${mobile}, ${email}`
    }
}



const input = {
    name: 'Rana',
    house: 'Rajshahi',
    
}
const output = findAddress(input);
console.log(output);

