document.addEventListener("DOMContentLoaded", function() {
    var diemDatRadio = document.getElementById("dat");
    var diemTruotRadio = document.getElementById("truot");

    diemDatRadio.addEventListener("change", function() {
        locDiem("dat");
    });

    diemTruotRadio.addEventListener("change", function() {
        locDiem("truot");
    });

    function locDiem(loaiDiem) {
        var rows = document.querySelectorAll("#myTable tr");
        for (var i = 1; i < rows.length; i++) {
            var diemTB = parseFloat(rows[i].cells[4].innerText);
            if (loaiDiem === "dat" && diemTB >= 5) {
                rows[i].classList.add("pass");
            } else if (loaiDiem === "truot" && diemTB < 5) {
                rows[i].classList.add("fail");
            } else {
                rows[i].classList.remove("pass");
                rows[i].classList.remove("fail");
            }
        }
    }
});