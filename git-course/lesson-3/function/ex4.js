let object = [
    { name: "Alex", score: 85 },
    { name: "John", score: 95 },
    { name: "Khang", score: 100 },
]; // Khởi tạo object

console.log("Có các học viên sau đây:", object);
function averagePoint() {
    let point = 0;
    for (let item of object) {
        point += item.score;
    }
    return point / object.length;
}
console.log(`Điểm trung bình của ${ object.length } học viên là:`, averagePoint()); // Tính điểm bình quân của các học viên.