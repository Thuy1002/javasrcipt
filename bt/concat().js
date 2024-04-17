// concat() dùng để hợp nhất 2 hoặc nhiều mảng với nhau -> tạo ra mảng mới

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const abc = array1.concat(array2);
console.log(abc); // trả về mảng mới chứa phần tử của cả hai mảng

//nối các giá trị vào 1 mảng từ mảng abc

const abc2 = abc.concat([1,2],"abc");
console.log("nối tiếp:",abc2);

