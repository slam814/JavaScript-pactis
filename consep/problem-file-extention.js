function isJavaScriptFile(fileName){
   const fileExtention = '.js';
   if(typeof fileName !== 'string'){
    return 'Please Provide a Valide File name(string)'
   }else if(fileName.toLowerCase().endsWith(fileExtention.toLowerCase())){
    return true;
   }else{
    return false;
   }
}


console.log(isJavaScriptFile(44));
console.log(isJavaScriptFile('hello.png'));
console.log(isJavaScriptFile('hello.Js'));
console.log(isJavaScriptFile('hello.js'));