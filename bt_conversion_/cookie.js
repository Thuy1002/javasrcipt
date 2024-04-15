//tạo đơn hàng -> lưu vào cookie -> lấy ra -> tính tổng giá trị don hamng

const data = [
    { stt: 1, name: "chicken", quantity: 3, price: 2000 },
    { stt: 2, name: "dog", quantity: 1, price: 12333 },
    { stt: 3, name: "duck", quantity: 5, price: 7 },
    { stt: 4, name: "elephant", quantity: 3, price: 20000 }
]

function saveCo(value) {
    document.cookie = "orders=" + JSON.stringify(value) + "; expires=Wed,16 Apr 2024 12:00:00 UTC; path=/"
    //console.log("chạy vào đay:",JSON.stringify(value))
}
saveCo(data);

function getCo() {
    const getCook = document.cookie.split(';').find(cookie => cookie.startsWith('orders='));
    console.log("Có cookie không ?:", document.cookie);
    console.log("Chạy vào đây không?:", getCook);
    if (getCook) {
        const a = getCook.split('=')[1];
        const order = JSON.parse(a);
        let total = 0;
        order.forEach(element => {
            total += element.quantity * element.price;
        });
        return total;
    }

}
// const abc = getCo();
// console.log("tổng là:", abc);