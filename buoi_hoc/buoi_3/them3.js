function tinhSoLuongHang() {
    var tongTienCo = parseFloat(prompt("Nhập tổng tiền có:"));
    var donGiaHang = parseFloat(prompt("Nhập đơn giá hàng hoá:"));

    var soLuongMuaHang = 0;
    var tienConLai = tongTienCo;

    while (tienConLai >= donGiaHang) {
        soLuongMuaHang++;
        tienConLai -= donGiaHang;
    }

    var tongTienPhaiTra = tongTienCo - tienConLai;

    document.write("Số lượng hàng mua được: " + soLuongMuaHang + "<br>Tổng tiền phải trả: " + tongTienPhaiTra);
}

tinhSoLuongHang();