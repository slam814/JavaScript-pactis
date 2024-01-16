function paperReQuirments(book1Quntity, book2Quntity, book3Quntity){
    const book1Papers = book1Quntity * 100;
    const book2Papers = book2Quntity * 200;
    const book3Papers = book3Quntity * 300;
    if(typeof book1Quntity !== 'number' || typeof book2Quntity !== 'number' || typeof book3Quntity !== 'number' ){
        return 'Please Enter a number.... in Thery input boox check'
    }
    return `Paper Requirments: ${book1Papers + book2Papers + book3Papers} pic`;
}



const result = paperReQuirments(2, 2, 1);
console.log(result);