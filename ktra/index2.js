const users = [
    {
        name: "tuan",
        gender: "nam"
    },
    {
        name: "sy",
        gender: "nam",
    },
    {
        name: "trung",
        gender: "nam"
    },
    {
        name: "tu",
        gender: "nam",
    },
    {
        name: "hoa",
        gender: "nu"
    },

    {
        name: "dao",
        gender: "nu",
    },
    {
        name: "thao",
        gender: "nu",
    },
    {
        name: "hue",
        gender: "nu"
    },
    {
        name: "ly",
        gender: "nu",
    },
    {
        name: "tri",
        gender: "nam",
    },
    {
        name: "binh",
        gender: "nam",
    },
    {
        name: "an",
        gender: "nam"
    },
    {
        name: "thu",
        gender: "nu",
    },
    {
        name: "xuan",
        gender: "nu",
    },
    {
        name: "ha",
        gender: "nu",
    },
    {
        name: "khoi",
        gender: "nam",
    },
]
const relationships = [
    {
        user_1: "tuan",
        user_2: "trung"
    },

    {
        user_1: "tuan",
        user_2: "sy",
    },
    {
        user_1: "tuan",
        user_2: "hoa"
    },
    {
        user_1: "tuan",
        user_2: "hue",
    },
    {
        user_1: "tuan",
        user_2: "ly"
    },
    //end tuấn 

    {
        user_1: "trung",
        user_2: "sy",
    },
    {
        user_1: "trung",
        user_2: "khoi",
    },
    {
        user_1: "trung",
        user_2: "tu"
    },
    //end trung

    {
        user_1: "hoa",
        user_2: "hue",
    },
    {
        user_1: "hoa",
        user_2: "ly"
    },
    {
        user_1: "hoa",
        user_2: "dao"
    },
    {
        user_1: "hoa",
        user_2: "thao"
    },
    {
        user_1: "hoa",
        user_2: "tu"
    },
    //end hoa
]


//lấy danh sách bạn của một người dùng
const getUserFriends = (userName) => {
    const userRelationship = relationships.filter(rel => rel.user_1 == userName || rel.user_2 == userName);
    //   console.log( userRelationship)
    const userFriends = userRelationship.map(rel => {
        if (rel.user_1 !== userName) {
            return rel.user_1;
        } else {
            return rel.user_2;
        }
    });

    return userFriends;

}
//console.table(getUserFriends("trung"))

//

//tìm bạn chung
function getMutualFriends(user1, user2) {
    const user1Friends = getUserFriends(user1);
    const user2Friends = getUserFriends(user2);
    const mutualFriends = user1Friends.filter(friend => user2Friends.includes(friend));
    if (mutualFriends.length == 0) {
        return "không có bạn chung";
    }
    return mutualFriends;
}

const mutualFriends = getMutualFriends("tuan", "trung");
//console.log("Danh sách bạn chung:", mutualFriends);


//tìm 4 bạn cho khôi
function findFriends(userName, number) {
    const userFriends = getUserFriends(userName);
    const potentialFriends = users.filter(user => user.name !== userName && !userFriends.includes(user.name));
    //  console.log(potentialFriends);
    // Sắp xếp
    potentialFriends.sort((a, b) => {
        const aMutualFriends = getMutualFriends(userName, a.name).length;
        const bMutualFriends = getMutualFriends(userName, b.name).length;
        return bMutualFriends - aMutualFriends;
    });
    // console.log("1",potentialFriends);
    const selectedFriends = potentialFriends.slice(0, number).map(user => user.name);

    return selectedFriends;
}

const khoiFriends = findFriends("khoi", 4);
//console.log("4 người bạn cho Khôi:", khoiFriends);


//tim bạn là nữ để kb 
function searchFemaleFriends() {
    const filterGender = users.filter(user => user.gender === "nu");

    const femaleFriends = filterGender.map(friend => {
        const mutuals = getUserFriends(friend.name).length;
        return { name: friend.name, mutuals: mutuals };
    });
    const list = femaleFriends.sort((a, b) => b.mutuals - a.mutuals);

    return list.shift().name;
}
//console.log("bai 3::", searchFemaleFriends());

// tìm nữ để kb rồi sắp xếp theo tăng dần
function addFriends(userName) {
    const filterGender = users.filter(user => user.gender === "nu" && user.name !== userName);
    const femaleFriends = filterGender.map(friend => {
        const mutuals = getUserFriends(friend.name).length;
        return { name: friend.name, mutuals: mutuals };
    });
    const list = femaleFriends.sort((a, b) => b.mutuals - a.mutuals);
    return list.map(user => user.name );
}
console.log(addFriends("hoa"));