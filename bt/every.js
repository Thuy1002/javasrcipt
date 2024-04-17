// every() kiểm tra xem tất cả các phần tử trong mảng và so sánh điều kiện rồi trả về kết quả là true false


const array1 = [1, 30, 39, 29, 10, 50];
function abc(currentValue) {
    return currentValue < 40;
}

const a = array1.every(abc);

console.log(a); //false
