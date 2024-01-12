const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];

theList.shift(); // Xóa phần tử đầu tiên
theList.pop(); // Xóa phần tử cuối cùng
theList.unshift('FIRST'); // Thêm 'FIRST' vào đầu mảng
theList.splice(3, 0, 'hello world'); // Thêm 'hello world' vào vị trí thứ 4
theList.splice(2, 0, 'middle'); // Thêm 'middle' vào vị trí thứ 3
theList.push('LAST'); // Thêm 'LAST' vào cuối mảng

document.write(theList); // Xuất kết quả