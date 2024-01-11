function findLowestNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return "The array is empty";
    }
  
    // Use the spread operator (...) to pass the array elements as arguments to Math.min
    const lowestNumber = Math.min(...arr);
  
    return lowestNumber;
  }
  
  // Example usage:
  const numbers = [];
  const lowest = findLowestNumber(numbers);
  
  console.log("The lowest number is:", lowest);
  

/*
function findLowestNumber(arr){
    if(arr.length !== 0){
        const lowestNumber = Math.min(...arr);

        return lowestNumber;
    }
    else{
        return "The array is empty";
    }
  
}


const myArray = [];
const result = findLowestNumber(myArray);
console.log(`The lowest number is: ${result}`);

*/