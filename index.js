const abc = [1, 2, 3, 3, 4, 4];
// loại bỏ phần tử chùng lặp 
const ab = abc.filter((val, index, arr) =>
    arr.lastIndexOf(val) == index
)

const av = [...new Set(abc)];
console.log(ab,av);