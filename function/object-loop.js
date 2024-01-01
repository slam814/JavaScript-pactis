var friendsAge = {
    rahim: 12,
    samad: 54,
    karim: 78,
    jamal: 12, 
    robi: 32,
    kazi: 14
}

const keysAge = Object.keys(friendsAge);
console.log(keysAge);
const valueAge = Object.values(friendsAge);
console.log(valueAge);


for(let i = 0; i < keysAge.length; i++){
    var propertyName = keysAge[i];
    var propertyValue = friendsAge[propertyName];
    console.log(propertyName, propertyValue);
}