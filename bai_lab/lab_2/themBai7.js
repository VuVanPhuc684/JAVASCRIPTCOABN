var a = parseFloat(prompt('nhap vao so a : '));
var b = parseFloat(prompt('nhap vao so b : '));
var c = parseFloat(prompt('nhap vao so c : '));

var denta = (b * b) - (4 * a * c);
if(a===0){
    if(b===0){
        if(c==0){
            alert("phuong trinh vo so nghiem ");
        }else{
            alert("phuong trinh vo nghiem ");
        }
    }else{
        var x = -c/b;
        alert("phuong trinh có 1 nghiem : x= "+x);
    }
}else{
    if (denta > 0) {
        var x1 = (-b + Math.sqrt(denta)) / (2 * a);
        var x2 = (-b - Math.sqrt(denta)) / (2 * a);
        alert("phuong trinh co 2 nghiem là :x1= " + x1 + "x2=" + x2);
    } else if (denta === 0) {
        var x = -b / (2 * a);
        alert("phuong trinh co nghiem kep :" + x);
    } else {
        alert("phuong trinh vo nghiem ");
    }
}

