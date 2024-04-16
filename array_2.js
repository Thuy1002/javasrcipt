/**Array */

// Array và obj khác nhau là chỉ mục: 
// array chỉ mục là number và bắt đầu từ số 0
// obj sử dụng name là index

//array là một kiểu dữ liệu than chiếu. Lưu giữ nhiều giá trị trong 1 biến  có thể gồm các phần tử như Number, bolean, string, obj, function,...

//tạo mới arr: const arr = [...];

//có thể thêm phần tử vào array bằng nhiều cách
//arr = [] -> arr[1] = "abc";


//arr.push("abc");
const arr = [1, 3, "xin chào", "ai"];
//arr[1]="con gà";

//dùng push
arr.push(abc = "abc");
console.log("chỉ mục:",arr.index);

// dùng splice(start,delecount, item)

/** Splice
 * tham số đầu là chỉ mục của phần tử được thêm vào
 * tham số thứ 2 là phần tử xóa từ chỉ mục đó
 * tham số 3 là phần tử thêm vào arr
 */


//xóa phần tử cuối arr || pop
/**
 * arr.pop()
 * eg: array.pop()|| phàn tử cuối của mảng array sẽ được xóa bỏ
 */


//xóa phần tử dựa vào index || delete arr[_chỉ mục_]
/**
 * delete arr[_chỉ mục_] || 
 * hoặc có thể dùng splice để xóa (chỉ cần chuyền 2 tham số || chỉ mục và tổng số phần tử cần xóa)
 * eg xóa theo splice: arr.splice(chỉ mục, conunt delete(xóa 1 phần tử thì chuyền 1));
 */
arr.splice(1, 1); // chỉ mục 1 mất 1 phần tử
console.log(arr);


//xóa phần tử đầu tiên || shift()
const a = arr.shift();
console.log("khi đã xóa bằng shift:", arr);

//thêm phần tử vào đầu mảng || undhift("phần tử")
arr.unshift("abcccc");
console.log("thêm phần tử đàu tiên vào mảng:", arr);

//phương pháp spread sẽ giúp rã 1 mảnh thafnhc các phần tử. rồi copy các phần tử của mảng cũ sang mảng mới.
//-> và khi a thay đổi giá trị ở mảng cũ thì mảng mới không bị ảnh hương
const anotherarr = [...arr];
anotherarr[1] = "jvascript";
console.log('mảng cũ:', arr);
console.log("mảng mới:", anotherarr);

arr.forEach((value, index) => console.log("dùng với foreach:", value));


//join nối tất cả phần tử của mảng thành chuỗi
console.log("dùng join để nối thành chuỗi:", arr.join('-'));


//every || lặp từng phàn tử của mảng thỏa mãn điều kiện sẽ trả về true hoặc false (chỉ cần 1 phần tử trong mảng không thỏa mãn điều kiện thì kết quả trả ra là true hoặc false)

//eg :
const ages = [32, 33, 16, 40];

// Kiểm tra
console.log(ages.every(checkAge))    // Returns false

// Hàm kiểm tra giá trị truyền vào có lớn hơn 20 không
function checkAge(age) {
    return age > 20;
}



//fill(value,start,end) thay đổi phần tử trong mảng
/**
 * nếu start là số âm thì chỉ mục được tính theo chiều ngược lại bỏ qua số 0 || bắt đầu từ -1,-2....
 * end là số âm thì cũng vậy
 */
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]



//indexOf || tìm chỉ mục trng mảng

const ac = arr.indexOf("abc");
console.log("chỉ mục của 'abc':", ac)


//includes() || kiểm tra xem mảng có chứa phần tử và trả về kq true |  false 
//(đối với chuỗi thì kiểm tra chuỗi con có tồn tại trong chuỗi con hay không rồi trả về kết quả true | false)
console.log("có 'abc' trong mảng arr không:", arr.includes('abc'));


//find lặp các phần tử trong mảng trả  về phần tử đầu tiên trong mảng được cung cấp thỏa mãn chức năng kiểm tra. || findLast chả về phần tử cuooisc cùng
const array1 = [5, 12, 8, 22, 44];
const found = array1.find((element) => element > 10);
console.log("dùng find:", found); // trả về phần tử 12 vì phần tử đầu tiên thỏa mãn điều kiện đầu tiên 


// findIndex gần giống như index cũng trả vê chỉ mục của arr đó || findLastIndex chả về chỉ mục cuối cùng

//flat() nối mảng con với phân tử trong mảng lớn thành 1 mảng mới


// fatMap kết hợp của map và flat 
/**
 * trả về một mảng mới được hình thành bằng cách áp dụng hàm gọi lại đã cho cho từng phần tử của mảng,
 *  sau đó làm phẳng kết quả theo một cấp. Nó giống hệt với a map()theo sau là a flat()có độ sâu 1 ( arr.map(...args).flat()), 
 * nhưng hiệu quả hơn một chút so với việc gọi hai phương thức đó một cách riêng biệt.
 */
// start
const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);
// Expected output: Array [1, 2, 2, 1]
//end  



//eg: thêm phân tử mới vào mảng

const fruirt = ['banana', 'apple'];
const newLeght = fruirt.push("orage"); // thêm phân tử mới vào mảng

// eg xóa mục cuối khỏi mảng
console.log("xóa mục cuối khỏi mảng:", arr.pop()) //
console.log(arr);


//xóa nhiều mục khỏi mảng || dùng splice (nếu truyền 1 tham số | số âm thì sẽ tính chỉ mục theo chiều ngược lại và dương thì vẫn như cũ) 
console.log("xóa nhiều phần tử", arr.splice(2));

//Ví dụ này sử dụng splice()phương thức để xóa chuỗi "Banana"khỏi
// fruitsmảng - bằng cách chỉ định vị trí chỉ mục của "Banana".


const fruits = ["Strawberry", "Banana", "Mango"];
const start = fruits.indexOf("Banana");
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]


//start eg về fill
const tempGirls = Array(5).fill("girl", 0);//thêm gril vào mảng bắt đầu từ chỉ mục là 0
console.log("fill nè:", tempGirls);
//end fill