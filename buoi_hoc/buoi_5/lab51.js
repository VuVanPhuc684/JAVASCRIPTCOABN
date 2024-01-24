function display() {
    var ten= document.getElementById("pro").innerHTML;
    document.getElementById("name").innerHTML=ten;

    var SoLuong=qty.value;
    var gia=document.getElementById("pro").getAttribute("data-price");
    var tt=SoLuong*gia;
    document.getElementById("amount").innerHTML=tt;
}