/*
setInterval(()=>{
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마');
    } catch (error) {
        console.error(error);
    }
}, 1000);

*/

// uncaughtException : 처리하지 않은 예외를 한 번에 모아서 처리해줌
process.on('uncaughtException', (err)=>{ 
    console.error('예기치 못한 에러', err);
});

setInterval(()=>{
    throw new Error('서버를 고장내주마');
}, 1000);

setTimeout(()=>{
    console.log('실행됩니다.');
});