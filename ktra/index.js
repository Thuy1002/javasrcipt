
const DATA = [
    {
        name: "tuan",
        gender: "nam",
        friends: ["trung", "sy", "hoa", "hue", "ly"],
    },
    {
        name: "sy",
        gender: "nam",
        friends: ["tuan"],
    },
    {
        name: "trung",
        gender: "nam",
        friends: ["sy", "khoi", "tuan", "tu"],
    },
    {
        name: "tu",
        gender: "nam",
        friends: ["trung"],
    },
    {
        name: "hoa",
        gender: "nu",
        friends: ["hue", "ly", "dao", "thao", "tu"],
    },

    {
        name: "dao",
        gender: "nu",
        friends: ["hoa"],
    },
    {
        name: "thao",
        gender: "nu",
        friends: ["hoa"],
    },
    {
        name: "hue",
        gender: "nu",
        friends: ["tuan"],
    },
    {
        name: "ly",
        gender: "nu",
        friends: ["tuan"],
    },
    {
        name: "tri",
        gender: "nam",
        friends: [],
    },
    {
        name: "binh",
        gender: "nam",
        friends: [],
    },
    {
        name: "an",
        gender: "nam",
        friends: [],
    },
    {
        name: "thu",
        gender: "nu",
        friends: [],
    },
    {
        name: "xuan",
        gender: "nu",
        friends: [],
    },
    {
        name: "ha",
        gender: "nu",
        friends: [],
    },
    {
        name: "khoi",
        gender: "nam",
        friends: ["trung"],
    },
];
//tìm tên
const findUserinf = (name) => {
    return DATA.find((item) => item.name === name);
};

function mutual_friends(user1, user2) {
    const u1 = findUserinf(user1);
    const u2 = findUserinf(user2);
    return u1.friends.filter(el1 => u2.friends.some(el2 => el1 == el2));
}
const bai1 = mutual_friends("trung", "sy");
console.log("lời giải bài 1:", bai1);


// // tm cho khôi 4 bạn ưu tiên có bạn chung
// function listBB(name, number) {
//     const user = findUserinf(name);
//     if (!user) {
//         return `Không tìm thấy người dùng trong dữ liệu.`;
//     }
//     const uutien = DATA.filter(user => user.name !== name && user.friends.length > 0); // uue tiên có bạn
//     // console.log(uutien);
//     const listbb = uutien
//         .map(el => el.name)
//         .filter((name, index, self) => self.indexOf(name) === index)
//         .slice(0, number);
//     return listbb;
// }
// const bai2 = ListBB("khoi", 4);
// console.log("bài 2:", bai2);



// tìm bạn gái cho trung uuaw tiên có nhiều bạn
function searchGril() {
    const gender = DATA.filter(el => el.gender == "nu" && el.friends.length > 0);
    //console.log("bạn gái :", gender);
    const friends_ = gender.sort((a, b) => a.friends - b.friends); 
    const choice = friends_.shift();
    return choice.name;
}
const bai3 = searchGril();
console.log("bạn gái của trung:", bai3);


// nữ và ưu tiên có nhiều bạn rồi sort
function addFriend(name) {
    const gender = DATA.filter(el => el.name !== name && el.gender == "nu");
    return friends_ = gender.sort((a, b) => a.friends - b.friends).map(el =>el.name);
}

const bai4 = addFriend("hoa");
console.log("danh sách kết bạn toàn nữ:", bai4);

//sửa tên biến 