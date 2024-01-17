// tạo class
function sinhVien(maSV, ht, diem) {
    this.maSV = maSV;
    this.ht = ht;
    this.diem = diem;
    // xây dựng phương thức xếp loại 
    this.xepLoai = function () {
        var kq = "";
        if (this.diem >= 5) {
            kq = "đậu ";
        } else {
            kq = "rớt ";
        }
        return kq;
    };
    // phương thức hiển thị 
    this.hienThi = function () {
        document.write(`sinh viên${this.ht} đat ${this.diem} có kết quả xếp loại ${this.xepLoai()}<br>`);
    };
}

// tạo đối tượng 
sinhVien['sv1'] = new sinhVien('s1', 'Vũ Văn phúc', 9);
sinhVien['sv2'] = new sinhVien('s3', 'Vũ Văn phú', 9);
sinhVien['sv3'] = new sinhVien('s3', 'Vũ Văn phụng', 9);
// in ra các đối tượng 
for (var x in sinhVien) {
    sinhVien[x].hienThi();
}
