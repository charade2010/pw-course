const arr = []; // Khởi tạo mảng rỗng

for (let i = 1; i <= 99; i += 2) {
    arr.push[i]; // Đẩy các phần tử lẻ vào mảng rỗng khi quét từ 1 -> 99.
}
console.log("Mảng chứa các phần tử lẻ từ 1 -> 99:", arr); // In ra mảng chứa các phần tử lẻ.
console.log("Các phần tử chẵn trong mảng từ 1 -> 99:");
let count = 0;
for (let k = 1; k <= 99; k++) {
    if (k % 2 == 0) {
        console.log(k);
        count++;
    }
} // Loop từ 1->99 để tìm các phần tử chẵn.
console.log(`Có ${count} phần tử chẵn trong mảng này.`);

