// map()tạo ra một mảng mới chứa kết quả của việc gọi một hàm được cung cấp trên mọi phần tử trong mảng gọi.
const array1 = [1, 4, 9, 16];

const a = array1.map((x) => x * 2);

console.log(a);
// output: Array [2, 8, 18, 32]