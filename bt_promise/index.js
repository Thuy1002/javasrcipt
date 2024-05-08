//bt promise đợi 3 cái api để trả về kết quả 
// cùng sử dụng như vậy nhưng dùng es6,7 (asyn wait)
// -> mô tả luồng chạy
// -> só sánh cú pháp cách sử dụng
//  - note ra các key trong promise 
/****/

function fetchData(url) {
    return fetch(url).then((res) => {
        return res.json() //promise
    }).then(data => {
        return data; //data
    }).catch(error => {
        console.log(error)
        return [];
    });
}
const url1 = fetchData('https://jsonplaceholder.typicode.com/todos/1');
const url2 = fetchData('https://jsonplaceholder.typicode.com/comments/1');
const url3 = fetchData('https://jsonplaceholder.typicode.com/albums/1');

Promise.all([url1, url2, url3])
    .then(data => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
        return undefined;
    });


// /***dùng es6 */

// const getData = async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         return data;

//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }

// const promiseAll = async () => {
//     try {
//         const urlPromise1 = getData('https://jsonplaceholder.typicode.com/todos/1');
//         const urlPromise2 = getData('https://jsonplaceholder.typicode.com/comments/1');
//         const urlPromise3 = getData('https://jsonplaceholder.typicode.com/albums/1');

//         const result = await Promise.all([urlPromise1, urlPromise2, urlPromise3]); //
//         // Promise.all chờ cả
//         console.log(result);

//     } catch (error) {
//         console.log(error);
//         return undefined;
//     }
// }
// promiseAll();


// cách sủ dụng try...catch, note só sánh es7, es5,
//luonggggg