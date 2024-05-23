let degree = 20;
let kindOfDegree = "C";
console.log('Nhập vào nhiệt độ: ', degree, kindOfDegree);
function changeDegree(degree, kindOfDegree) {
    if (kindOfDegree === "C" || kindOfDegree === "c") {
        let i = (degree) * 9 / 5 + 32;
        console.log('Nhiệt độ F là: ');
        return i;
    };
    if (kindOfDegree === "F" || kindOfDegree === "f") {
        let i = (degree - 32) * 5 / 9;
        console.log('Nhiệt độ C là: ');
        return i;
    };
};
let result = changeDegree(degree, kindOfDegree);
console.log(result);