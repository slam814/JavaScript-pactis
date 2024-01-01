function getAAvarage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage.toFixed(2);
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 60;

var myAvarage = getAAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My avarage Marks: ', myAvarage);