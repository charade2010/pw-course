function tinhTong() {
    let tong = 0;
    for (let i = 1; i <= 100; i++) {
        tong += i;
    } return tong;
}
let ketQua = tinhTong();
console.log("Tổng từ 1 đến 100 là:", ketQua);