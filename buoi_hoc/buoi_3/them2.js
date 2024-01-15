function nhan(event) {
    event.preventDefault(); 
    var so1 = parseFloat(document.getElementById("so1").value);
    var so2 = parseFloat(document.getElementById("so2").value);
    var ketQua = so1 * so2;
    document.getElementById("ketqua").value = ketQua;
}

function tong(event) {
    event.preventDefault();
    var so1 = parseFloat(document.getElementById("so1").value);
    var so2 = parseFloat(document.getElementById("so2").value);
    var ketQua = so1 + so2;
    document.getElementById("ketqua").value = ketQua;
}