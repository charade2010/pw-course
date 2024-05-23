// Khai báo mảng global các object có 2 thuộc tính: name, email
let users = [
    { name: "Khang", email: "minh_khang_1988@yahoo.com" },
    { name: "Playwright", email: "playwright@mailinator.com" },
    { name: "Selenium", email: "selenium@mailinator.com" }
];

// Khai báo hàm có 2 tham số: name, newEmail
function updateEmail(name, newEmail) {
    // Sử dụng vòng for, duyệt trong mảng
    for (let user of users) {
        // Nếu gặp phần tử nào có tên trùng với tham số name
        if (user.name === name) {
            // cập nhật giá trị email về newEmail
            user.email = newEmail;
            console.log(`Email của người dùng ${ name } đã được cập nhật thành ${ newEmail }`);
            return; // Thoát khỏi vòng lặp sau khi cập nhật thành công
        }
    };
    // Nếu không tìm thấy người dùng có tên trùng khớp
    console.log(`Không tìm thấy người dùng có tên là ${ name }`);
};


console.log("Trước khi cập nhật:\t", users);
updateEmail("Khang", "khang.nguyen@formos.com");
console.log("Sau khi cập nhật:\t", users);