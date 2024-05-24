function checkDegree(degree) {
    if (degree >= 30) {
        return "Nóng";
    } else if (degree < 30 && degree >= 20) {
        return "Mát";
    } else {
        return "Lạnh";
    }
} // Hàm kiểm tra nhiệt độ thuộc loại nào.
let degree = 30;
console.log("Nhiệt độ là:", degree, checkDegree(degree)); // In ra nhiệt độ và phân loại nhiệt độ.