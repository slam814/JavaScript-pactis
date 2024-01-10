function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
    return true;
    }
    else{
    return false;
    }
}
    const inputYear = 1933;
    const result =	isLeapYear(inputYear);
    console.log(result);

