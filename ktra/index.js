
// cho tuấn với trung gồm nhưng bạn sau :...
// - nhưng người dưới đây chưa có bạn bè: trí, bình, an, xuân, hạ
// giả thiết lựa chọn tốt nhất là người có bạn chung nhiều nhất
// - Anh khôi mới lập mạng xã hội, anh mới kết bạn với chung, anh muốn kết bạn thêm với 4 người nữa.
// Đưa ra gợi ý cho anh với những người thân thiết nhất
// - Anh trung muốn tìm bạn gái, hay cho anh ấy 1 nựa chọn tốt nhất
// - chị hoa hiện tại chỉ muốn kết bạn với nữ, gợi ý danh sách bạn bè cho chị ấy,
// có sắp xếp theo thứ tự thân thiết rồi xắp xếp theo bảng chữ cái


const Tuan = [{ name: "trung", sex: "nam" },
{ name: "sỹ", sex: "nam" },
{ name: "hoa", sex: "nu" },
{ name: "huệ", sex: "nu" },
{ name: "ly", sex: "nu" }];

const Trung = [{ name: "sỹ", sex: "nam" },
{ name: "khôi", sex: "nam" },
{ name: "tuấn", sex: "nam" },
{ name: "tú", sex: "nam" }];

// danh sách bạn chung tuấn và trung
function mutual_friends(arr1, arr2) {
    return arr1.filter(el => arr2.some(el2 => el.name == el2.name))
}


const abc = mutual_friends(Tuan, Trung);
console.log(abc);
//khôi mới kết bạn với chung. Anh muốn kết bạn thêm 4 người nữa
// lựa chọn tốt nhất là nhiều bạn chung nhất
  


//lựa chọn bạn gái 

