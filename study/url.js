const url = require('url');

const URL = url.URL;
const myURL = new URL('https://blog.naver.com/heo__ys');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('----------------------------');

const parsedUrl = url.parse('https://blog.naver.com/heo__ys');
console.log('url.parse():', parsedUrl);