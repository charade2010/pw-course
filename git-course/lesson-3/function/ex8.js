function checkStoreOpen(hour) {
    if (hour >= 9 && hour <= 21) {
        console.log("Cửa hàng đang mở cửa.");
    } else {
        console.log("Cửa hàng đã đóng cửa.");
    }
} // Hàm kiểm tra giờ mở cửa của cửa hàng.

let hour = 15;
console.log("Nhập vào thời gian:\t", hour); 
checkStoreOpen(15); 