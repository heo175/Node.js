const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.google.com/search?q=posix&oq=posix&aqs=chrome..69i57j0l7.2148j0j7&sourceid=chrome&ie=UTF-8');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():', query);
console.log('querystring.stringify():',querystring.stringify(query));

