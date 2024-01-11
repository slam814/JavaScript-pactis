// console.log(Math.random());


const random = Math.round(Math.random()*6);

// console.log(random);

for(let i = 0; i <6; i++){
    const random = Math.round(Math.random()*6);
    if(random !== 0){
        console.log(random);
    }
    else{
        console.log(3)
    }
}