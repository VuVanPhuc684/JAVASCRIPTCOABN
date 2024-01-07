var x = 10 + Math.round(5 * Math.random()); 
var a =prompt("số nhập vào : "); 
if(a==x){
    alert("bạn đã đoán đúng ");
}else if(a>x){
    alert("giá trị của bạn lớn hơn số bí mật ");
}else{
    alert("giá trị của bạn nhỏ hơn số bí mật  ");
}
