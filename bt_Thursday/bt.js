let str = "Không biết học js như thế nào !";

/**1. xác định chuỗi 'js' làm ở vị trí nào */
console.log("Vị trí 'js' xuất hiện tại:", str.indexOf('js'));


//2. viết hoa tất cả các từ trong chuỗi
console.log("Viết hoa tất cả:", str.toLocaleUpperCase());


//3. đảo ngược chuỗi ||
console.log("đảo ngược chuỗi cần -> mảng rồi -> dùng reverse để đảo ngược -> chuyển chuỗi: ", str.split('').reverse().join(''));


//4. đảo ngược từ trong chuỗi  đảo ngược lại theo thứ tự
console.log("đảo ngược lại thứ tự trong chuỗi:", str.split(' ').reverse().join(' ')); //  '  ' khoảng cash=ch   


//5. cắt chuỗi thành các phần ngăn cách nhau bởi từ "js"
let index = str.indexOf('js');
let str_1 = str.slice(0, index);
console.log("Chuỗi đầu tiên:", str_1);
let str_2 = str.slice(index + "js".length);
console.log("chuỗi thứ 2:", str_2);


//6. xác định xem chuỗi có bắt đầu bằng "js" hay không
console.log("chuỗi có bắt đầu bằng 'js' không:", str.endsWith('js'));
//7. xác định xem chuỗi có kết thúc bằng "js" hay không
console.log("chuỗi có kết thúc bằng 'js' không:", str.startsWith('js'));
//8. đếm xem trong chuỗi có bao nhiêu chữ cái 'h'
let count = 0;
for (let index = 0; index < str.length; index++) {
    if (str[index] == 'h') {
        count++;
    }
}
console.log("ký tự 'h' xuất hiện trong chuỗi:", count, "lần");
//9. xác định trong chuỗi có chứ từ 'js' hay không
console.log("chuỗi có chứ ký tự 'js' không:", str.includes());
//thay thế tất cả chữ cái o -> ôm trong chuỗi
console.log("thay thế ký tự 'o' -> 'hello':", str.replace(/o/g, 'hello'));
//xáo bỏ tất cả các chữ cái "h" trong chuỗi
console.log("xóa bỏ tất cả chứ 'h':", str.replace(/h/g, ''));
//in ra 1 từ ghép tạo bời 2 từ liên tiếp trong chuỗi 
const str_sp = str.split(' ');
console.log("độ dài mảng:", str_sp.length);
const arr_null = [];
for (let index = 0; index < str_sp.length - 1; index++) { // -1 vì sau dấu ? không có từ nào để ghép 
    const arr = str_sp[index] + " " + str_sp[index + 1];
    arr_null.push(arr);
}
console.log('các từ ghép:', arr_null);
//in ra tổ hợp từ ghép tạo bởi 2 từ bất kỳ trong chuỗi theo thứ tự, không trùng nhau, 

//in ra từ láy tạo từ 1 từ đơn trong. Nhưng từ đầu tiên viết hoa, từ thứ 2 viết thường

// đổi chỗ từ "biết " với "thế"
let str_3 = str.replace("biết", "temp");// không temp học js thế nào
let str_4 = str_3.replace("thế", "biết"); //không biết học js thế nào
let str_5 = str_4.replace("temp", "thế");
console.log("đổi chỗ đây nầy:", str_5);