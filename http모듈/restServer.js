const http = require('http');
const fs = require('fs');

const users = {}; // 메모리 (서버 재시작하면 날아감)

const router = {
    get: {
        '/': (req, res) => {
            fs.readFile('./restFront.html', (err, data) => { // 요청한 url과 이름이 똑같은 파일을 보내주는 것
                if (err) {
                  throw err;
                }
                res.end(data);
              });
        },
        '/users' : (req, res) => {
            res.end(JSON.stringify(users));
        },
        '*': (req, res) => {
            fs.readFile(`.${req.url}`, (err, data) => { 
                return res.end(data);
            });
        },
    },
    post: {
        '/users' : (req, res) => {
            let body = ''; // data(chunk)를 모으는 역할
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('POST 본문(Body):', body);
                const { name } = JSON.parse(body); // 비구조화 할당 문법
                const id = +new Date(); // 사용자에게 고유한 key 부여
                users[id] = name; // users에 등록
                res.writeHead(201, {'Content-Type': 'text/html; charset=utf-8'});
                res.end('사용자 등록 성공');
            });
        },
    },
    patch: {

    },
    put: {
        '/users': (req, res) => {
            const key = req.url.split('/')[2]; // 공백, users, 숫자 에서 숫자를 가져오게
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('PUT 본문(Body):', body);
                users[key] = JSON.parse(body).name; // 수정
                return res.end(JSON.stringify(users)); // 수정 완료된 사용자 정보를 front로 보내주기
            });
        },
    },
    delete: {
        '/users': (req, res) => {
            const key = req.url.split('/')[2]; // 공백, users, 숫자 에서 숫자를 가져오게
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('delete:', body);
                delete users[key];
                return res.end(JSON.stringify(users));
            });
        },
    },
};

const server = http.createServer((req, res) => {
    const matchedUrl = router[req.method.toLowerCase()][req.url]
    (matchedUrl || router[req.method.toLowerCase()]['*'])(req, res);
}).listen(8085, () => {
    console.log('8085번 포트에서 서버 대기중입니다');
  });