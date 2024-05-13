
// // - hoc thuoc cu phap cua promise
// // - luong chay va cach hoat dong cua try...catch( khi nao chay vao try | khi nao chay vao catch )


// // //đợi 1 promise thành công rồi mới cho thực hiện tiếp promise  thứ 2 

// // const promiseA = new Promise((resolved, reject) => {
// //     resolved("xin chào");
// // })
// // const promiseB = new Promise((resolved, reject) => {
// //     resolved("xin chào 2");
// // })

// // const abc = promiseA.then((result) => {
// //     return promiseB;
// // }).then(data => {
// //     console.log(data);
// // })



// // Hàm mô phỏng việc gửi một yêu cầu mạng và trả về một promise
// function sendNetworkRequest() {
//     // Giả sử là một yêu cầu mạng đang được gửi
//     // Trong ví dụ này, có thể thay bằng một yêu cầu thực sự, như sử dụng fetch hoặc axios
//     return new Promise((resolve, reject) => {
//         // Giả sử nhận được phản hồi thành công
//         // Trong ví dụ này, resolve được gọi ngay lập tức
//         resolve("Kết quả từ Tác vụ A");
//     });
// }

// // Hàm thực hiện Tác vụ B, cần kết quả từ Tác vụ A
// function taskB() {
//     console.log("Bắt đầu thực hiện Tác vụ B");
//     // Gọi hàm sendNetworkRequest() và sử dụng then để xử lý kết quả thành công
//     sendNetworkRequest().then((result) => {
//         console.log("Kết quả từ Tác vụ A:", result);
//         console.log("Tiếp tục thực hiện Tác vụ B");
//         // Tiếp tục thực hiện Tác vụ B sau khi có kết quả từ Tác vụ A
//     }).catch((error) => {
//         console.error("Đã xảy ra lỗi trong Tác vụ A:", error);
//     });
// }

// // Bắt đầu thực hiện Tác vụ B
// taskB();


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     reject(2222);
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// }).catch(error => {
//     console.log("cái này lỗi:", error);
// });
// // Expected output: Array [3, 42, "foo"]


const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(5);
const promise3 = Promise.reject("Lỗi!");

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, 5, **Lỗi!]** - Lỗi từ promise3
    })
    .catch(error => {
        console.error("Lỗi ở hàm sử dụng all:", error); // "Lỗi!"
    });
// nếu promise.all có promise chả về reject thì sẽ ưu tiên log ra lôi. Resolved sẽ không được hiện ra;

const ac = new Promise((re, reject) => {
    reject("lỗi nài");
})
ac.then(data => {
    console.log("đây là thành công",data)
}).catch((error => {
    console.log("đây là lỗi:", error);
}))

// const aa = async () => {
//     try {
//         // Giả sử có một tác vụ bất đồng bộ ở đây, ví dụ như gửi yêu cầu mạng
//         const isSuccess = true;

//         if (isSuccess) {
//             // Nếu tác vụ thành công, trả về kết quả thành công
//             return "Thành công!";
//         } else {
//             // Nếu tác vụ thất bại, ném một lỗi
//             throw new Error("Có lỗi xảy ra trong quá trình thực hiện tác vụ!");
//         }
//     } catch (error) {
//         // Xử lý lỗi
//         throw error;
//     }
// }

// aa().then(data => {
//     console.log("Kết quả:", data);
// }).catch(error => {
//     console.log("Lỗi  ở hàm aa:", error.message);
// });
