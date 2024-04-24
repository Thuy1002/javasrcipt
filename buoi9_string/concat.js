// String.concat(str1,str2,...) || nối các chuôi với nhau

// **string.concat(' ',str2) | trường hợp truyền tham số tham số thứ 2 là kiểu nối | 
// -> kq:  chả về các chuỗi được nối với nhau cách nhau bởi dấu cách 


const str = "xin chao";
console.log("nối kiểu chuyền tham số:", str.concat(', ', "hello")); //xin chao, hello
//xin chao, hello  có thêm dấu phẩy và dấu cách khi kết nối 2 chuỗi 


const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"
console.log("".concat(...greetList));