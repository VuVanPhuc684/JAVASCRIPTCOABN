// ===================SlineShow===================
var ARR=[];
var index=0;
// load ảnh
function Load(){
    for (var i = 0; i < 3; i++) {
        ARR[i] = new Image();
        ARR[i].src = "fileanh/"+i+".jpg"
    }
}
// chạy tự động 
function Run(){
    Load();
    document.getElementById('anh1').src=ARR[index].src;
    index++;
    if(index==ARR.length){
        index=0;
    }
    t=setTimeout('Run()',500);
}
// lùi 
function Previous() {
    if(index>0){
        index-=1;
        document.getElementById('anh1').src=ARR[index].src;
    }
}
// tiến 
function Next(){
    if(index<ARR.length){
        index+=1;
    }
    document.getElementById('anh1').src=ARR[index].src;
}
// ===================Form========================
function VaLiDate() {
    var status = false;
    // KIEM TRA HO TEN  
    var HoTen = document.MyForm.HoTen.value;
    if (HoTen == "") {
        document.getElementById("tbhoTen").innerHTML = "khong de trong ho ten ";
        status = false;
    } else {
        document.getElementById("tbhoTen").innerHTML = "";
        status = true;
    }
    // KIEM TRA EMAIL 
    var Email = document.MyForm.Email.value;
    var reemail = new RegExp("\\w+@\\w+(\\.\\w+){1,2}", "g");// bieu thuc chinh quy 
    if (!Email.match(reemail)) {
        document.getElementById("tbEmail").innerHTML = "email khong dung dinh dang";
        status = false;
    }
    else {
        document.getElementById("tbEmail").innerHTML = " ";
        status = true;
    }
    // KIEM TRA MAT KHAU 
    var PassWord = document.MyForm.PassWord.value;
    if (PassWord.length < 8) {
        document.getElementById("tbPassWord").innerHTML = "pass toi thieu 8 ky tu ";
        status = false;
    
    } else {
        document.getElementById("tbPassWord").innerHTML = "";
        status = true;
    }
    // KIEM TRA CONFIRM PASS
    var ConfirmPass = document.MyForm.ConfirmPass.value;
    if (ConfirmPass == ""|| ConfirmPass!=PassWord) {
        document.getElementById("tbConfirmPass").innerHTML = "Error  password ";
        status = false;
    } else {
        document.getElementById("tbConfirmPass").innerHTML = "";
        status = true;
    }
    // KIEM TRA SO PHONE 
    var phone = document.MyForm.phone.value;
    var resdt=new RegExp("0\\d{9,10}","g");
    if (!phone.match(resdt)) {
        document.getElementById("tbphone").innerHTML = "Error phone";
        status = false;
    } else {
        document.getElementById("tbphone").innerHTML = "";
        status = true;
    }
    // KIEM TRA NOI DUNG 
    var NouDung = document.MyForm.NouDung.value;
    var rend = new RegExp("(?=.*\\d)(?=.*[A-Z])[\\w]{6,12}", "g");
    if (!NouDung.match(rend)) {
        document.getElementById("tbnoidung").innerHTML = "it nhất 1 ký tự số,1 ký tự viết hoa , độ dài từ 6-12 ký tự";
        status = false;
    } else {
        document.getElementById("tbnoidung").innerHTML = "";
        status = true;
    }
    // KIEM TRA GIOI TINH 
    var gioitinh = document.MyForm.gioitinh.value;
    if (gioitinh == "") {
        document.getElementById("tbgioitinh").innerHTML = "khong de trong ho ten ";
        status = false;
    } else {
        document.getElementById("tbgioitinh").innerHTML = "";
        status = true;
    }
    // kiem tra tuoi 
    var tuoi = document.MyForm.tuoi.value;
    if (tuoi == "") {
        document.getElementById("tbtuoi").innerHTML = "khong de trong ho ten ";
        status = false;
    } else {
        document.getElementById("tbtuoi").innerHTML = "";
        status = true;
    }
    // kiểm tra địa điểm 
    var diadiem = document.MyForm.diadiem.value;
    if (diadiem == "") {
        document.getElementById("tbdiadiam").innerHTML = "khong de trong ho ten ";
        status = false;
    } else {
        document.getElementById("tbdiadiam").innerHTML = "";
        status = true;
    }
    return status;
}
// ===================Dom ========================
function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xoá";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);
    tinhTong();
    alert("Bạn có muốn thêm vào giỏ hàng ?");
}

function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhTong();
    alert("bạn có muốn xóa khỏi giỏ hàng?");
}
function tinhTong() {
    var cart = document.getElementById("cart");
    var prices = cart.getElementsByClassName("mot");
    var tong = 0;
    for (let i = 0; i < prices.length; i++) {
        var priceText = prices[i].innerText.replace('.', '').replace('đ', '');
        var price = parseInt(priceText);
        tong += price;
    }
    document.getElementById("tong").innerText = tong.toLocaleString() + "đ";
  }
