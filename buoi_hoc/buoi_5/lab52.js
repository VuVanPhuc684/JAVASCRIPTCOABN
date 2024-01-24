function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xoá";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);
    tinhTong();
}

function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhTong();
}

function tinhTong() {
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var price = cells[1].innerText.substr(1);
        tong += parseFloat(price);
    }
    document.getElementById("tong").innerText = tong.toFixed(2);
}