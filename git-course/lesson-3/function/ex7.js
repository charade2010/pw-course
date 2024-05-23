const gioHang = [
    { name: "apple", price: 100 },
    { name: "grape", price: 0 },
    { name: "banana", price: 30 },
    { name: "coconut", price: 45 }
];
console.log("Có một mảng như vầy:", gioHang);

function kiemTraGia() {
    for (let item of gioHang) {
        if (item.price === 0) {
            console.log(`${item.name} có giá bằng 0.`);
        } else {
            console.log("Sản phẩm có giá lớn hơn 0:", item.name);
        }
    }
}

kiemTraGia();