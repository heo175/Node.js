const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16}); // 16바이트씩 읽음
const data = [];

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on('end', ()=>{
    console.log('end', Buffer.concat(data).toString()); // concat : 합치기
});

readStream.on('error', (err)=>{
    console.log('error', err); // 
});