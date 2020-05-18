const fs = require('fs');
const zlib = require('zlib'); // 파일을 압축하는 모듈

const zlibStream = zlib.createGzip(); // 압축
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream); // 일종의 파일 복사?

// readStream.pipe(zlibStream).pipe(writeStream); // pipe를 스트림간에 연달아서 사용 가능