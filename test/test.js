function findAddress(salam) {
  
    if(
        
        salam.hasOwnProperty('street') &&
        salam.hasOwnProperty('house') &&
        salam.hasOwnProperty('socity')
        
        ){
            return `${salam.society}, ${salam.house}, ${salam.society}`
            // console.log(`${salam.society}, ${salam.house}, ${salam.society}`)
        }else{
            const street = salam.street || '__'
            const house = salam.house || '__'
            const society = salam.society || '__'
            return `${street}, ${house}, ${society}`
        }
};






const inputsalamect1 = { street: 10, house: '15A', society: 'Earth Perfect' };
const output1 = findAddress(inputsalamect1);
console.log(output1);

const inputsalamect2 = { street: 10, society: 'Earth Perfect' };
const output2 = findAddress(inputsalamect2);
console.log(output2);

const inputsalamect3 = {street: 10 };
const output3 = findAddress(inputsalamect3);
console.log(output3);
