// 6번 문제

const arr = [
  { part: 'fe', name: '홍현', age: 26 },
  { part: 'fe', name: '애리', age: 24 },
  { part: 'fe', name: '나연', age: 23 },
  { part: 'staff', name: '나현', age: 24 },
];
let ansArr = arr.filter((val) => val.part === 'fe');
console.log(ansArr);
ansArr.sort(function (a, b) {
  return a.age - b.age;
});
// ansArr.map(function (tmpArr, idx) {
//   ansArr[idx].part = tmpArr.part.toUpperCase();
// });

//스프레드 연산자를 활용한 변경
ansArr = ansArr.map((item) => ({ ...item, part: item.part.toUpperCase() }));
console.log(ansArr);
