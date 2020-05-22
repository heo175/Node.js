const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

    const session = {};

    const server = http.createServer((req, res) => {
        const cookies = parseCookies(req.headers.cookie); // 여기에 값을 넣으면 클라이언트와 서버가 데이터 왔다갔다 함
       if(req.url.startsWith('/login')){
            const { query } = url.parse(req.url);
            const { name } = qs.parse(query);
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 5);
            const randomInt = +Date.now(); // 밀리초
            session[randomInt] = {
                name,
                expires,
            };
            res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
            });
            res.end();
        } else if (cookies.session && session[cookies.session] && session[cookies.session].expires > new Date()) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`${session[cookies.session].name}님 안녕하세요`);
        } else {
            fs.readFile('./server4.html', (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
            });
       }
    }).listen(8081);
    
    server.on('listening', () => { // listen : server 를 죽지 않게 유지 시켜줌
        console.log('8081번 포트에서 서버 대기중입니다.');
    });
    
    server.on('error', (error) => { 
        console.error(error);
    });