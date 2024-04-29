// allSettled() lấy tất cả các promise và trả lại một promise.
//  Promise được chả về  khi hoàn thành tất cả các promise của input được resolved,
//  với một mảng của đối tượng mô tả kết quả của mỗi promise
 

/* allSettled chờ tất cả array trong promise chạy dufg resolved hoặc rejected 
 nó vẫn trả ra kết quả bình thường giống ví dụ dưới
*/
 const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.value)),// .value nếu là rejected thì sẽ là undefind
   // .status => resolved || rejected 
);
 