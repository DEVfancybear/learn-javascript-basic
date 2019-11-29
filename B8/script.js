// classList.remove() - bỏ tất cả các class
// classList.remove(tenclass) - xoá 1 class đã chỉ định
// classList.toggle(tenclass) - có class rồi thì xoá đi còn nếu chưa có class thì sẽ thêm vào
// classList.add(tenclass) - thêm class
var x1= document.querySelectorAll(".n1");
console.log(x1[0].classList.remove("btn-outline-info"));//xoá class btn-outline-info
console.log(x1[0].classList.add("blog"));//add class btn-outline-info
var x2 =document.querySelectorAll(".n3");
console.log(x2);