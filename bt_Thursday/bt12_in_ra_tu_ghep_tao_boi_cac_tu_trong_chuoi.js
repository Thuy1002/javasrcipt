let str = 'Không biết học js như thế nào !';
//12. in ra 1 từ ghép tạo bời 2 từ liên tiếp trong chuỗi
const str_sp = str.split(' ');
const arr_null = [];
for (let index = 0; index < str_sp.length - 1; index++) {
  // -1 vì sau dấu ? không có từ nào để ghép
  const arr = str_sp[index] + ' ' + str_sp[index + 1];
  arr_null.push(arr);
}
//console.log('các từ ghép:', arr_null);
