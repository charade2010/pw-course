const arr1 = [1, 2, 3]; // Khởi tạo mảng đã cho.
const arr2 = []; // Khởi tạo mảng rỗng.

console.log("Mảng thứ nhất:", arr1); // In ra mảng 1.
for (let i of arr1) {
    arr2.push(i * 2); // Nhân đôi giá trị và đẩy vào mảng thứ hai.
}

console.log("Mảng thứ hai với mỗi phần tử nhân đôi:", arr2); 