const arr1 = [4, 2, 7, 5];
const arr2 = [3, 2, 7, 9];
// arr1.sort((a, b) => a - b);
// arr2.sort((a, b) => a - b);
const abc = arr1.filter((value, index) => value !== arr2[index]);
function abccc(bbb, ccc) {
    return bbb.filter((value, index) => value !== ccc[index]);
}
const vb = abccc(arr1, arr2);
console.log("hàm cổ:", vb);
const ax = arr1.filter(value => !arr2.includes(value));// kiểm tra xem phần tử arr1 có tồn tại trong arr2 không

console.log(abc);
