// cách 1 
for (var i = 1; i <= 9; i++) {
    document.write('bang cuu chuong : '+i+'<br>');
    for (var j = 1; j <= 9; j++) {
      document.write(i + " x " + j + " = " + i * j+"<br>");
    }
    document.write("");
}

// cách 2 :
var i = 1;
while (i <= 9) {
    document.write('bang cuu chuong : ' + i + '<br>');
    var j = 1;
    while (j <= 9) {
        document.write(i + ' x ' + j + ' = ' + i * j + '<br>');
        j++;
    }
    document.write('');
    i++;
}


