const namesList = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'Chinku'];

function isBigName(names){
    let bigNameInArray = '';
    for(let i = 0; i < names.length; i++){
        const currentName = names[i];
        if(currentName.length > bigNameInArray.length){
            bigNameInArray = currentName;
        }
    }
    return bigNameInArray;
}


const result = isBigName(namesList);
console.log(result);