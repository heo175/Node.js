const cluster = require('cluster');
const os = require('os');
const http = require('http');
const numCPUs = os.cpus().length;

if(cluster.isMaster){ // 일꾼들을 관리하는 관리자
    console.log('마스터 프로세스 아이디', process.pid);
    for(let i=0;i<numCPUs;i++){ // cpu 개수만큼 워커들을 만들어냄
        cluster.fork(); // 워커 만들기
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(worker.process.pid, '워커가 종료되었습니다.'); // process.pid로 현재 프로세스의 아이디를 가져올 수 있음
    });
}else{ // 실제로 일하는 일꾼들
    http.createServer((req, res)=>{ // 실제로 서버에 리스닝
        res.end('http server');
        setTimeout(()=>{
            process.exit(1);
        }, 1000);
    }).listen(8080);
    console.log(process.pid, '워커 실행');
}



