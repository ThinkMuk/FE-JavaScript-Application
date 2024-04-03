// 4번 문제.

let user = {
  name: '지환',
  years: 24,
};

// 아래에 코드를 작성해주세요 ~
let { name: Name, years: age, isAdmin } = user;
isAdmin = isAdmin === undefined ? false : isAdmin;
alert(Name); // "지환"
alert(age); // 24
alert(isAdmin); // false
