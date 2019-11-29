var x = document.getElementsByTagName("h4");
for (let i=0; i<x.length; i++) {
	// truy cập vào mảng,đổi hết các text đang hiển thị thành text mới là "Duong dep zai"
	if(i==1) {
		x[i].innerHTML= "Duong dep zai";
	}
}

console.log(x);