// truy xuất cái nút
//trước khi truy xuất phải cho cái nút sẵn sàng
document.addEventListener("DOMContentLoaded", function() {
    // body...
    var nut = document.getElementById('nut1');
    var khoi = document.getElementsByClassName("card");
    console.log(khoi[0]);
    // console.log(nut);
    //gọi sự kiện khi click vào nút
    nut.onclick = function() {
    	console.log('click dc chua');
    	// để di chuyển khi click thì phải thay đổi css,mà css chính là class
    	//ta phải lấy vị trí card cần click để thay đổi vị trí
    	khoi[0].classList.toggle('disangphai'); //thêm class disangphai vào khối card để css đi sang bên phải chính là class disangphai
    	//để trở về vị trí cũ thì xoá class disangphai
    };
}, false)