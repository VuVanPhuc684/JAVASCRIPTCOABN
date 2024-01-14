var currentValue = "";
var operator = "";
var result = 0;

function toan_hang(x) {
    currentValue += x;
    document.getElementById("ketqua").value = currentValue;
}

function toan_tu(x) {
    operator = x;
    result = parseInt(currentValue);
    currentValue = "";
}

function lam_lai() {
    currentValue = "";
    operator = "";
    result = 0;
    document.getElementById("ketqua").value = "";
}

function thuc_hien() {
    var secondNumber = parseInt(currentValue);
    switch (operator) {
        case "+":
            result += secondNumber;
            break;
        case "-":
            result -= secondNumber;
            break;
        case "*":
            result *= secondNumber;
            break;
        case "/":
            if (secondNumber !== 0) {
                result /= secondNumber;
            } else {
                alert("Lỗi chia cho 0");
            }
            break;
        default:
            break;
    }
    document.getElementById("ketqua").value = result;
    currentValue = "";
    operator = "";
    result = 0;
}