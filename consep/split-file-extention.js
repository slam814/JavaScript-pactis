function isJavaScriptFile(fileName){
    if(typeof fileName !== 'string'){
        return 'Inveled file name'
    }else{
        const arr = fileName.split('.');
        const lastElement = arr.pop();
        if(lastElement.toLowerCase().endsWith('js')){
            return true;
        }else{
            return false;
        }
    }

    
}


console.log(isJavaScriptFile(44));
console.log(isJavaScriptFile('he.llo.png'));
console.log(isJavaScriptFile('h.ello.Js'));
console.log(isJavaScriptFile('hello.js'));