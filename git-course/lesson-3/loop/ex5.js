const arr =[
    {month: 1, total: 100},
    {month: 2, total: 130},
    {month: 3, total: 190},
    {month: 4, total: 210},
    {month: 5, total: 500},
    {month: 6, total: 40},
    {month: 7, total: 30},
    {month: 8, total: 75},
    {month: 9, total: 80},
    {month: 10, total: 120},
    {month: 11, total: 130},
    {month: 12, total: 230},
]; // Khởi tạo mảng 12 tháng trong năm và doanh thu mỗi tháng.

console.log("Tổng doanh thu các tháng trong năm:");
let tong = 0;
for (let i of arr) {
    tong=tong+i.total;
}
console.log(tong); // In ra tổng các tháng trong năm.