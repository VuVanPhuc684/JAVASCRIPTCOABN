function dongHo() {
    var now = new Date();
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();
    var d = now.getDate();
    var m = now.getMonth()+2;
    var y = now.getFullYear();
    setTimeout("dongHo()", 1000);
    var kq = h + ":" + mi + ":" + s + "<br>" + d + ":" + "/" + m + "/" + y;
    document.getElementById("time").innerHTML=kq;
}
dongHo();