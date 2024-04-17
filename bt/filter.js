// filter() lawjpp qua các phần tử trong mảng -> thỏa mãn điều kiện thì tạo ra một mảng mới chứa các phần tử đó

const abc = ['chicken', 'dog', 'elaphent', 'turtle', 'abc'];
const a = abc.filter((el) => el.length > 6);

console.log(a); // chicken  elaphent