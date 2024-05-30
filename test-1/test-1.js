

// Phần 1 - Khởi động tàu vũ tụ K6
console.log("1. Khởi động tàu vũ trụ K6");
let departurePlanet = "Trái Đất";
let mission = "Khám phá vũ trụ K6";
let crew = ["Khang", "Yến", "Ánh", "Thư", "Phong"];

function launchShip(crew) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm:");
    for (let member of crew) {
        console.log(member);
    }
    console.log("sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K6!");
}
launchShip(crew);
console.log("        ----------------------------        "); // Phân biệt giữa các phần.

// Phần 2 - Du hành đến hành tinh bí ẩn
console.log("2. Du hành đến hành tinh bí ẩn");
let speed = 1000;
let time = 24;

console.log(`Vận tốc phi thuyền K6: ${speed} km/h, thời gian di chuyển: ${time} giờ`);
function calculateDistance(speed, time) {
    if (speed <= 0 || time <= 0) {
        return ("Thông số không hợp lệ, hãy nhập lại!");
    }
    else {
        let distance = speed * time;
        return distance;
    }
}
console.log("Quãng đường tới hành tinh bí ẩn:", calculateDistance(speed, time));
console.log("        ----------------------------        ");

// Phần 3 - Hành tinh kỳ lạ
console.log("3. Hành tinh kỳ lạ");
console.log("Nhập vào thời gian ở Trái Đất (s):", time);

function convertTimeToHex(time) {
    if (time <= 0)
        return ("Thời gian nhập vào không hợp lệ, hãy nhập lại!");
    else {
        let timeHex = time.toString(16);
        return timeHex;
    }
}
console.log("Thời gian ở hành tinh bí ẩn:", convertTimeToHex(120));
console.log("        ----------------------------        ");

// Phần 4 - Khám phá kho báu
console.log("4. Khám phá kho báu");
const password = "K6 Challenge";
function decryptCode(password) {
    let convertedText = "";
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            password[i] = password[i].toLowerCase()
            convertedText += password[i].toLowerCase();
        }
        else {
            password[i] = password[i].toUpperCase();
            convertedText += password[i].toUpperCase();
        }
    } return convertedText;
}
console.log("Nhập vào mật mã:", password);
console.log("Giải mã mật mã:", decryptCode(password));
console.log("        ----------------------------        ");

// Phần 5 - Trở về Trái Đất
console.log("5. Trở về Trái Đất");
function returnToEarth() {
    return ("Chuẩn bị trở về Trái Đất");
}
console.log(returnToEarth());
/* Cách khác
let message = returnToEarth();
console.log(message);
*/      

    