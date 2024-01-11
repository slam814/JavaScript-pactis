const lyrics = 'tumi bondu kala paki ami jano ki. bosonto kale tomai dek parini. sada sada kala kala rong jomecha sada kala';

const searchString = 'kala rong';

const lyricsLoworCase = lyrics.toLowerCase();
const searchStringLowor = searchString.toLowerCase();
const doesExist = lyricsLoworCase.includes(searchStringLowor);


const doesExistOnline = lyrics.toLocaleLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);
console.log(doesExistOnline);
console.log(lyrics.indexOf('kala'));