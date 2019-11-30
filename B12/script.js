document.addEventListener('DOMContentLoaded', function() {
    // body... 
    //khai báo biến cần sử dụng trong hiệu ứng này
    var tamgiac = document.getElementsByClassName('tamgiac');//trả về 1 mảng, cần lấy tg[0]
    var tamgiac = tamgiac[0];
    // console.log(tamgiac);
    var danhsach = document.getElementsByClassName('danhsach');
    var danhsach=danhsach[0];
    //xử lý sự kiện dùng hàm onlick và classList.toggle cho tam giác đổi màu
    tamgiac.onclick = function() {
        this.style.color = 'white';//tamgiac khi click sẽ chuyển từ màu đen sang trắng
        danhsach.classList.toggle('ra'); //đảo ngược các thuộc tính css để khi click sẽ hiện ra list danh sách menu
    }

}, false)