// findIndex(el, inde, arr) trả về chỉ mục đầu tiên của mảng thỏa mãn điều kiện
 

// findLastIndex ngược lại với finIdex
const array1 = [5, 12, 8, 130, 44];

const abc = array1.findIndex(el =>  el > 9 );
const aa = array1.findLastIndex(el =>  el > 9 );
console.log(abc); // chỉ mục 1
console.log(aa); //  4


