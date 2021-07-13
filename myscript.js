let value;

// Kiểm soát được giá trị nhập vào trong khoảng từ 1 đến 10
do {
    value = parseFloat(prompt("Nhập vào số từ 1 -> 10"));
} while (value < 1 || value > 10);

alert("Số bạn vừa nhập là " + value);