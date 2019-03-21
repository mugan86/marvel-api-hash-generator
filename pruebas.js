const getApiHash = require('./dist').getApiHash;
const timeStamp = 1;
const privateKey = 'privateKeyValue';
const publicKey = 'publicVale';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);

const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters?';
const exampleUrl = `${requestConstantCharacters}ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<public-key>&hash=09fe991c34996e64c0424e446f27c9f0
console.log(exampleUrl);