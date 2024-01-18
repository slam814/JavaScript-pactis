
function cubeNumber(number){
    if(typeof number !== 'number' || number < 0){
        return 'Please input a positive Number';
    }
        return Math.pow(number, 3); 
    }
    
    
    console.log(cubeNumber(3));
    console.log(cubeNumber(4));
    
    
    
    
    
    function matchFinder(string1, string2) {
     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'please Input String'
     }   
        if(string1.includes(string2)){
            return true;
        }else{
            return false
        }
    
    }
    
    
    console.log(matchFinder("John Doe", "ohn")); 
    console.log(matchFinder("JavaScript", "Code")); 
    console.log(matchFinder("Peter Parker", "Pen")); 
    console.log(matchFinder("Peter Parker", "pet")); 
    
    
    
    
    
    function sortMaker(arr) {
       
        if  (arr[0] === arr[1]) {
            return "equal";
        }
        
        else if(arr[0] > 0 && arr[1] > 0) {
            return arr.sort((a, b) => b - a);
        }
        else if (arr[0] < 0 || arr[1] < 0) {
            
            return "Invalid Input";
        }
    }
    
    console.log(sortMaker([2, 3])); 
    console.log(sortMaker([4, 2])); 
    console.log(sortMaker([4, 4])); 
    console.log(sortMaker([1, 2])); 
    console.log(sortMaker([4, -2])); 
    
    function findAddress(obj) {
        
        if (
            obj.hasOwnProperty('street') &&
            obj.hasOwnProperty('house') &&
            obj.hasOwnProperty('society')
        ) {
           
            return `${obj.street}, ${obj.house}, ${obj.society}`;
        } else {
            
            const street = obj.street || '__';
            const house = obj.house || '__';
            const society = obj.society || '__';
    
         
            return `${street},${house},${society}`;
        }
    }
    
    
    const inputObject1 = { street: 10, house: '15A', society: 'Earth Perfect' };
    const output1 = findAddress(inputObject1);
    console.log(output1);
    
    const inputObject2 = { street: 10, society: 'Earth Perfect' };
    const output2 = findAddress(inputObject2);
    console.log(output2);
    
    const inputObject3 = { street: 10 };
    const output3 = findAddress(inputObject3);
    console.log(output3);
    
    
    
    
    
    
    function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "Your array is Empty! Please input Amount"
    }
    let totalTaka = 0;
    for(let i = 0; i < changeArray.length; i++){
        const taka = changeArray[i];
        totalTaka = totalTaka + taka;
    }
    
    if(totalTaka >= totalDue){
        return true;
    }else{
        return false;
    }
    
    }
    
    const inputA1 =[];
    const inputA2 = 10;
    const outputA = canPay(inputA1, inputA2);
    console.log(outputA)
    
    
    const inputB1 =[1, 2, 5];
    const inputB2 = 10;
    const outputB = canPay(inputB1, inputB2);
    console.log(outputB)
    
    
    
    const inputC1 =[1, 5, 5];
    const inputC2 = 10;
    const outputC = canPay(inputC1, inputC2);
    console.log(outputC)
    
    
    
    
    
    
    
    
    
    