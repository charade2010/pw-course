const arr = [1, 2, 3, 4, 5];
console.log('Đây là mảng:', arr);
function sumArray() {
    let tong = 0;
    for (let i of arr) {
        tong += i;
    }
    return tong;
};
console.log('Tổng các phần tử trong mảng: ', sumArray());