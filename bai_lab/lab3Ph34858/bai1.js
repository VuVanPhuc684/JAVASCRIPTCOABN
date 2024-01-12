var thang = Number(prompt(' nhap thang : '));
var nam = Number(prompt('nhap nam: '));

switch (thang) {
    case 1:
        alert('thang co 31 ngay ');
        break;
    case 3:
        alert('thang co 31 ngay ');
        break;
    case 5:
        alert('thang co 31 ngay ');
        break;
    case 7:
        alert('thang co 31 ngay ');
        break;
    case 8:
        alert('thang co 31 ngay ');
        break;
    case 10:
        alert('thang co 31 ngay ');
        break;
    case 12:
        alert('thang co 31 ngay ');
        break;
    case 4:
        alert('thang co 30 ngay ');
        break;
    case 6:
        alert('thang co 30 ngay ');
        break;
    case 9:
        alert('thang co 30 ngay ');
        break;
    case 11:
        alert('thang co 30 ngay ');
        break;
    case 2:
        if (nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0)) {
            alert(' thang co 29 ngay ');
            break;
        } else {
            alert('thang co 28 ngay ');
            break;
        }
    default:
        alert('thang khong hop le ');
        break;
}