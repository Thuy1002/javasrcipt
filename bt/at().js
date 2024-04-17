const arr = [1,2,"abc",null];
 const a=  arr.at(1);
console.log(a);

// at() chuyền số nguyên rồi chả về vị trí của chỉ mục đó
// số âm thì theo chiều ngược lại

//trả về vị trí cuối cùng của mảng

function abc(arr){
    return arr.at(-1);
}
const as = abc(arr);
console.log("vị trí cuối cùng của mảng arr:",as);