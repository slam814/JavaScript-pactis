function make_avg(arr, size) {
    if (size <= 0) {
        return 0; // Return 0 if the size is invalid to avoid division by zero
    }
    
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }

    return sum / size;
}

// Example usage:
const numbers = [4, 6, 8, 10, 12];
const arraySize = numbers.length;

const average = make_avg(numbers, arraySize);
console.log("Average:", average); // Output: Average: 8



