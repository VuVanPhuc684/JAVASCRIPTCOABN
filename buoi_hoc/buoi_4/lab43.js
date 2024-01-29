var w;
 function mo() {
    w= window.open("https://www.facebook.com/");
}
function dong() {
    if(w.closed==false){
        w.close();
    }
}
function kTra() {
    if(w.closed==false){
        alert("cửa sổ chưa đóng ");
    }else{
        alert(" cửa sổ đã đóng ");
    }
}