// 2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// 3 part-1
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = 
function makeBlue(){
  document.body.style.backgroundColor = 'blue'
}

//3 part-2
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = makePurple;
function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// 4:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink'
}

//4:
const greenButton = document.getElementById('make-green');
    greenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
    })

// 4:
const goldenrodButton = document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
