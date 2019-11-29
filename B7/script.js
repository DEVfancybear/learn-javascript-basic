var x = document.querySelectorAll(".card-text"); //trả về 1 mảng
// console.log(x);
for(let i=0; i<x.length; i++) {
	if(i==2) {
		console.log(x[i].innerHTML="test");
	}
}
var y = document.querySelectorAll("#noidung");//trả về 1 phần tử dưới dạng mảng
console.log(y[0]);
var z = document.querySelectorAll("[data-thongbao]");//truy xuất vào data
console.log(z[0]);