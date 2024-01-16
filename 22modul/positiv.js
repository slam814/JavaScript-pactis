
const arr = [45, 87, 11, 63, -56, 71, 28];

function onlyPositive(numbers){
  
    for(let i = 0; i < numbers.length; i++){
        
        let number = numbers[i];
      
        if(number > 0){

           console.log(number)
            continue;

        }
    }
    
}


const result = onlyPositive(arr);
