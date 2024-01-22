console.log('Hellow form js');
console.log(document);

const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    console.log(li.innerText);
}

const allHeding = document.getElementsByTagName('h1');
for(const h1 of allHeding){
    console.log(h1);
    console.log(h1.innerText);
}
const places = document.getElementsByClassName('important-plases');
for(const plase of places){
    console.log(plase.innerText);
}

const someLi = document.querySelectorAll('.fruits-container li');
console.log(someLi);
for(const li of someLi){
    console.log(li.innerText);
    
}

const liCollection2 = document.getElementsByTagName('li')

for(const li2 of liCollection2){
    
    console.log(li2.innerText);
    console.log(li2.style.backgroundColor = 'blue')
    console.log(li2.style.color = 'white')
    console.log(li2.style.marginTop = '4px')
    console.log(li2.style.padding = '12px')
    console.log(li2.style.textAlign = 'center ')
    console.log(li2.style.textTransform = "uppercase")

}


const headingList = document.getElementsByTagName('h1');
for(const h1 of headingList){
    console.log(h1.innerText);
    console.log(h1.style.color = 'red');
    console.log(h1.style.backgroundColor = 'blue');
    


}


const bg_yellow = document.getElementById('flowers');
console.log(bg_yellow.style.backgroundColor = 'yellow')
console.log(bg_yellow.style.textAlign = 'center');

const sections = document.querySelectorAll('section');
for(const section of sections ){
    section.style.border = '2px solid red'
    section.style.margin = '20px'
    section.style.borderRadius = '10px'
    section.style.padding = '10px'
    section.style.backgroundColor = 'lightgray'

}


const salamContainer = document.getElementById("salam");
salamContainer.style.backgroundColor = 'yellow'

salamContainer.classList.add('yellow-bg')