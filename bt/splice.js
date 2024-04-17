// splice(start, deleteCount, item1,...) xóa hoặc thay đổi phần tử trong mảng

const as = ['Jan', 'March', 'April', 'June'];
as.splice(1, 0, 'Feb');
console.log(as); //'Jan','Feb', 'March', 'April', 'June'