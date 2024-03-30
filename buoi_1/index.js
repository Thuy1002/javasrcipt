// Sai 1 lỗi ở trên là ở dưới không chạy được

// khai báo biến:

// var khai báo cơ bản: var userName;
// let khai báo biến tạm thời trog một pham vi nhất định ( trong các hàm hoặc ...) 
if (user >1){
    let name = "cho con";
  //  console.log(name); không lỗi vì sử dụng luôn trong if
}
 console.log(name); //lỗi vì let trong if
// const khi dùng thì phải khai báo biến cho nó luôn. Khi được khai báo thì giá trị bên trong không thay đổi.
 const age = 1;
  //age = 2;
 console.log(age) // lỗi không tìm thấy giá trị của biến age
 var user = 0; 


// -------------------

// phép gán
var gan = " gan chu N";
var duocgan = "hello" + gan;
var  v = '1'
//parseInt chuỗi cần chuyển đổi thành số nguyên
eg:
 var so = "10";
document.write(parseInt(so));
console.log(duocgan);
