//truy xuất đến tất cả các thẻ h1
var x=document.getElementsByTagName("h1");
console.log(x);
//tuy xuất đến tất cả các thẻ p,lấy vị trí đầu tiên trong mảng
var y = document.getElementsByTagName("p");
y[1].innerHTML="Test"; // thay đoạn text đang hiển thị bằng 1 đoạn text khác
console.log(y[0].innerHTML);//inner.HTML là in ra dòng chữ