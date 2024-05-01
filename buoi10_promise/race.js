// Promise.race()  giả quyết bất đồng bộ  trả về trạng thái đầu tiên được xử lý

const promise1 = new Promise((resolved, reject) => {
    setTimeout(resolved, 500, "one");
});
const promise2 = new Promise((resolved, reject) => {
    setTimeout(resolved, 100, "two");
});
const proRace = Promise.race([promise1,promise2]).then((val) => {
    console.log(val)
})