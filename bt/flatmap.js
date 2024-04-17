//  flatMap()  trả về một mảng mới được hình thành bằng cách áp dụng hàm 
//  gọi lại đã cho cho từng phần tử của mảng, sau đó làm phẳng kết quả theo một cấp.



const arr1 = [1, 2, 1];
const a = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(a);///