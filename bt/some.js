// some(el,index,arr)  kiểm tra xem ít nhất một phần tử trong mảng có vượt qua bài kiểm tra do
//  hàm được cung cấp thực hiện hay không rồi trả về true false


function abc(element, index, array) {
    return element > 10;
}

console.log([2, 5, 8, 1, 4].some(abc)); // false
console.log([12, 5, 8, 1, 4].some(abc)); // true