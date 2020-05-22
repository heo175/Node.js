const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('서버 실행');
    fs.readFile('./server2.html', (err, data)=>{
        if(err){
            throw err;
        }
        res.end(data); // 알아서 브라우저에서 toString() 하게 해줌
    });
}).listen(8081);

server.on('listening', () => { // listen : server 를 죽지 않게 유지 시켜줌
    console.log('8081번 포트에서 서버 대기중입니다.');
});

server.on('error', (error) => { 
    console.error(error);
});