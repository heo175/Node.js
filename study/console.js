/*
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');

console.log('평범한 로그. 쉼표로 구분해 여러 값을 찍을 수 있음');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담기');

console.dir(obj, { colors: false, depth: 2});
console.dir(obj, { colors: true, depth: 1});

console.time('시간 측정');
for(let i=0;i<10000;i++){
    continue;
}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}

function a(){
    b();
}

a();

console.timeEnd('전체 시간');
*/

console.log(__filename);
console.log(__dirname);

for(let i=0;i<100000;i++){
    console.log(i);
    Process.exit();
}