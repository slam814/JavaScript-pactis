const arr = [45, 87, 11, 63, -56, 71, 28];

function getPositiveNumbers(array) {
  let positiveNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumbers.push(array[i]);
    }
  }

  return positiveNumbers;
}

const result = getPositiveNumbers(arr);
console.log("Positive Numbers:", result);
