var chieu_cao=prompt("chiều cao là  :");
var trong_luong=prompt("trọng lượng cơ thể là :");
var BMI= trong_luong*10000/(chieu_cao*chieu_cao);
if(BMI<18.5){
    alert("cảnh báo  bạn đang thiếu cân !!! ");
}else if(BMI>=18.5 && BMI<=24.99){
    alert(" bạn đang có số  cân bình thường  ");
}else if(BMI>= 25&& BMI<=29.99){
    alert(" bạn đang thừa cân  ");
}else{
    alert(" cảnh báo bạn đang béo phì !!!  ");
}
