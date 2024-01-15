
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
       console.log('foobar')
    // return 'foobar';
    }
    else if(i % 5 === 0){
        console.log('bar')
        // return 'bar';

    }
    else if(i % 3 === 0){
       console.log('foo')
    // return 'foo';
    }
    else{
       console.log(i);
    // return i;
    }
}