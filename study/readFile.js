// 비동기
const fs = require('fs');
fs.readFile('./readme.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString()); // 사람이 읽을 수 있게 바꿈
});