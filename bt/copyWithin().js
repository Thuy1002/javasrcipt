// copyWithin() sao chesp 1 phần trong mảng sang vị trí khác trong mảng mà không thay đổi độ dài của mảng
// chuyền vào 3 tham số :target , start, end
// target  là chỉ mục được chèn bắt đầu của phần sao chép
// start chỉ mục bắt đầu sao chép trong mảng
// end là kết thúc 

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(1, 3));

// output là a,d,e,d,e 
// ** do không chuyền chỉ mục kết thúc lên mặc định sẽ là đến cuối mảng
// do đó 'd' và 'e' được sao chép và chèn vào chỉ mục là 1 (chỉ mục 2 bị chèn vào là e do copy đến cuối mảng)