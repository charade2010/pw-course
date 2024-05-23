function checkDegree(degree) {
    if (degree >= 30) {
        return "Nóng";
    } else if (degree < 30 && degree >= 20) {
        return "Mát";
    } else {
        return "Lạnh";
    }
}
let degree = 30;
console.log("Nhiệt độ là:", degree, checkDegree(degree));