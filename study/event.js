const EventEmitter = require('events'); // 이벤트를 발생시키는 장치

const myEvent = new EventEmitter();

myEvent.addListener('방문', ()=>{
    console.log('방문해주셔서 감사합니다.');
});

myEvent.on('종료', ()=>{
    console.log('안녕히가세요.');
});

myEvent.on('종료', ()=>{
    console.log('제발 좀 가세요.');
}); // 하나의 이벤트에 여러 개의 리스너가 붙을 수 있음

myEvent.once('특별이벤트', ()=>{
    console.log('한 번만 실행됩니다.');
}); // once : 한 번만 실행

myEvent.emit('방문'); // emit : 이벤트 호출
myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.emit('특별이벤트');

myEvent.on('계속', ()=>{
    console.log('계속 리스닝');
});

myEvent.removeAllListeners('계속');
myEvent.emit('계속');

const callback = () => {
    console.log('제발 좀 가세요.');
};

myEvent.on('종료1', ()=>{
    console.log('안녕히가세요.');
});
myEvent.on('종료1', callback);

myEvent.removeListener('종료1', callback);
myEvent.emit('종료1');

console.log(myEvent.listenerCount('종료1')); // 이벤트 몇개 달렸는지