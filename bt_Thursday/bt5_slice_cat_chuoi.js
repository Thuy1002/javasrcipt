let str = 'Không biết học js như thế nào !';
//5. cắt chuỗi thành các phần ngăn cách nhau bởi từ "js"
let index = str.indexOf('js');
let str_1 = str.slice(0, index);
// console.log("Chuỗi đầu tiên:", str_1);

let str_2 = str.slice(index + 'js'.length);
//console.log("chuỗi thứ 2:", str_2);