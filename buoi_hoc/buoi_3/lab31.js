var a =parseFloat(prompt(' toan hang a : ')) ;
var b = parseFloat(prompt('toan hạng  b :'));;
var o = prompt('toan tu 0 : ');
switch (o) {
    case '+':
         kq = a + b;
        alert('tong :' + kq);
        break;
    case '-':
         kq = a - b;
        alert('hieu :' + kq);
        break;
    case 'x':
         kq = a * b;
        alert('nhan :' + kq);
        break;
    case ':':
         kq = a / b;
        alert('chia :' + kq);
        break;
    default:
        alert(o+': khong phai la toan tu ');
        break;
}