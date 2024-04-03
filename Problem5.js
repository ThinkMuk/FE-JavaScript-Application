//5번 문제

let user = {
  name: '예린',
  part: 'FE',
};
const stringUser = JSON.stringify(user);
const parse = JSON.parse(stringUser);

console.log(stringUser);
console.log(parse);
