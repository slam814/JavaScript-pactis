function mindGame(number){
    if(typeof number !== 'number'){
        return 'Please provide a  number'
    }else if(number <= 0){
        return 'Please provide a positive number'
    }else{
        return (((number * 3) + 10) / 2) - 5;
    }
}


console.log(mindGame(5))