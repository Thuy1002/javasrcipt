//tạo đơn hàng -> lưu vào localStogare -> lấy ra -> tính tổng giá trị
const data = [
    { stt: 1, name: "chicken", quantity: 3, price: 2000 },
    { stt: 2, name: "dog", quantity: 1, price: 12333 },
    { stt: 3, name: "duck", quantity: 5, price: 7 },
    { stt: 4, name: "elephant", quantity: 3, price: 20000 }
]


function saveLocalS(ar) {
    localStorage.setItem('order', JSON.stringify(ar));
}
saveLocalS(data);

function getSto() {
    const getO = localStorage.getItem('order');
    const arr = JSON.parse(getO);
    let total = 0;
    arr.forEach(element => {
        total += element.quantity * element.price;
    });
    console.log(total);
}
getSto(); 