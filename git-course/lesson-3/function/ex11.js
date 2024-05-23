function average() {
    if (point >= 8)
        return ('Học sinh giỏi');
    if (point >= 6.5 && point < 8)
        return ("Học sinh khá");
    if (point >= 5 && point < 6.5)
        return ("Học sinh trung bình");
    else return ("Học sinh yếu");
}
let point = 6.3;
console.log("Nhập vào số điểm:",point);
console.log(average(point));