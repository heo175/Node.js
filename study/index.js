const {odd,even} = require('./var');
const checkNumber = require('./func'); // checkOddOrEven 을 변수명을 바꿔서 사용

function checkStringOddOrEven(str){
    if(str.length%2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
console.log(global);