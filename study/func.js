const { odd, even } = require('./var');

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// 속성이 있는 것이 아니기 때문에
// exports.checkOddOrEven = checkOddOrEven; 이렇게 못씀

/*
불러오기
const 변수 = require('파일 경로');
*/