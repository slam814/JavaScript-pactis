const friensdlist = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'Chinku'];


/*

function bestFriend(friedns){
 let longestName = '';
 for(let i = 0; i <friedns.length; i++){
    const courentName = friedns[i];
    if(courentName.length > longestName.length){
        longestName = courentName;
    }
 }
 return `"${longestName}" Is my Best Friend`;
}


const result = bestFriend(friensdlist);
console.log(result)


*/














function bestFriend(names){
   let largestName = '';
    for(let i = 0; i < names.length; i++){
        const courentName = names[i];
        // console.log(courentName);
        if(largestName.length < courentName.length  ){
            largestName = courentName;
            console.log(courentName);
        }
    }

return ` My Best Frind is: "${largestName}"`;
}







const result = bestFriend(friensdlist);
console.log(result)