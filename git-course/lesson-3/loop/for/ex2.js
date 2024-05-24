function inBangCuuChuong() {
    for (let i = 2; i <= 9; i++) {
        console.log("Bảng cửu chương " + i + ":");
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
        console.log(""); // Tạo một dòng trống giữa các bảng cửu chương
    }
}

// Gọi hàm để in bảng cửu chương
inBangCuuChuong();