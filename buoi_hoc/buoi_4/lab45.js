function createNhanVien(manv, hoten, luong, thuong) {
  this.manv = manv;
  this.hoten = hoten;
  this.luong = luong;
  this.thuong = thuong;

  this.tinhThue = function() {
    const thunhap = this.luong + this.thuong;

    if (thunhap <= 9000000) {
      return 0;
    } else if (thunhap <= 15000000) {
      return thunhap * 0.1;
    } else {
      return thunhap * 0.15;
    }
  };

  this.xuatThongTin = function() {
    const thue = this.tinhThue();
    const thunhap = this.luong + this.thuong;

    document.write("Mã nhân viên:", this.manv + "<br>");
    document.write("Họ tên:", this.hoten + "<br>");
    document.write("Lương:", this.luong + "<br>");
    document.write("Thưởng:", this.thuong + "<br>");
    document.write("Thuế:", thue + "<br>");
    document.write("Thu nhập:", thunhap + "<br>");
    document.write("---------------------------<br>");
  };
}

const nhanvien1 = new createNhanVien("NV001", "Nguyễn Văn A", 8000000, 2000000);
const nhanvien2 = new createNhanVien("NV002", "Trần Thị B", 10000000, 1500000);
const nhanvien3 = new createNhanVien("NV003", "Lê Văn C", 12000000, 3000000);

nhanvien1.xuatThongTin();
nhanvien2.xuatThongTin();
nhanvien3.xuatThongTin();