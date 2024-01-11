function reverseString(text){
    let reversSentence = "";
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        console.log(element);
        reversSentence = reversSentence + element;

    }
    return reversSentence;
}

const myString ='tom marvel riddle';
const result = reverseString(myString);
console.log(result);