for(let i = 0; i <= 5000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar')
    }
    else if(i % 5 === 0){
        console.log('bar');

    }
    else if(i % 3 === 0){
        console.log('foo')
    }
    else{
        console.log(i);
    }
}

