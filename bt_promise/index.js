//bt promise đợi 3 cái api để trả về kết quả
// cùng sử dụng như vậy nhưng dùng es6,7 (asyn wait)
// -> mô tả luồng chạy
// -> só sánh cú pháp cách sử dụng
//  - note ra các key trong promise 
/****/

// function fetchData(url) {
//     return fetch(url).then((data) => {
//         return data.json()
//     });
// }
// const url1 = fetchData('https://jsonplaceholder.typicode.com/todos/1');
// const url2 = fetchData('https://jsonplaceholder.typicode.com/comments/1');
// const url3 = fetchData('https://jsonplaceholder.typicode.com/albums/1');

// Promise.all([url1, url2, url3])
//     .then(data => {
//         console.log(data);
//     }).catch((erro) => {
//         console.log(erro);
//     });


// /***dùng es6 */

const getData = async (data) => {
    try {
        const res = await fetch(data);
        return res.json();
    } catch (erro) {
        return erro;
    }
}

const promiseAll = async () => {
    try {
        const data1 = await getData('https://jsonplaceholder.typicode.com/todos/1');
        const data2 = await getData('https://jsonplaceholder.typicode.com/comments/1');
        const data3 = await getData('https://jsonplaceholder.typicode.com/albums/1');

        const result = await Promise.all([data1, data2, data3]);
        console.log(result);

    } catch (erro) {
        console.log(erro);
    }
}
promiseAll();