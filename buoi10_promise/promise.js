// // Promise : sử dụng logic bất đồng bộ
// là hàm chả về một Object. Obj chứa các hoạt động không đồng bộ

// Trạng thái của nó :
pending : đợi
fulfilled : hoàn hành
rejected : lỗi

// syntax: const abc = new Promise(function(reso,reje))

// Promise có 3 phương thức hay sử dụng

// .then() khi resolved thành công
// .catch() khi thất bại reject
// .finally()  khi hoàn thành 1 trong 2 resolved hoặc reject

const promise  = new Promise((resolved,rejected)=>{
    const a1 = Math.random();
})
promise.then((data)=>{setTimeout(alert)})

//bt promise đợi 3 cái api để trả về kết quả
// cùng sử dụng như vậy nhưng dùng es6,7 (asyn wait)
// -> mô tả luồng chạy
// -> só sánh cú pháp cách sử dụng
//  - note ra các key trong promise 
/****/