// function 
function isMoonUp(time){
    if(time > 7){
        return true
    }
    else{
        return false;
    }
}


const timeNow = 9;
const timeNow2 = 7;

const result1 = isMoonUp(timeNow);
console.log(result1);

const result2 = isMoonUp(timeNow2);
console.log(result2);
