function veVaoCong(tuoi) {
    if (tuoi <= 5) {
        console.log("Miễn phí");
    }
    else if (tuoi > 5 && tuoi < 17) {
        console.log("Vé 50k");
    }
    else console.log("Vé 100k");
}
let tuoi = 10;
console.log("Nhập vào số tuổi:", tuoi);
veVaoCong(tuoi);