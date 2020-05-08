const odd = '홀수입니다';
const even = '짝수입니다';

exports.odd = odd;
exports.even = even;
// 같은 코드
module.exports = { odd, even, };

/*
모듈이 될 파일은
module.exports = 값;
을 마지막에 붙여주세요.

변수뿐만 아니라, 함수 등도 다 가능

모듈은 여러 번 재사용 가능

module.exports === exports
exports는 객체 속성만 담을 수 있음
*/