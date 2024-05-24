const arr = [1, 2, 3];
console.log("Đây là mảng:", arr); // In ra mảng.

let max_value = arr[0]; // Gán giá trị lớn nhất cho phần tử đầu tiên của mảng.
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max_value) {
        max_value = arr[i];
    }
} // Quét biến i đến hết chiều dài mảng, nếu giá trị nào lớn hơn giá trị lớn nhất thì gán max_value cho giá trị đó.

console.log("Giá trị lớn nhất là:", max_value); // In ra giá trị lớn nhất trong mảng.
let sum = 0;
for (let ii = 0; ii < arr.length; ii++) {
    sum = sum + arr[ii];
}
console.log("Tổng của mảng:", sum); // In ra tổng mảng.