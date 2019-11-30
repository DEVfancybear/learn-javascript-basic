document.addEventListener("DOMContentLoaded", function() {
    var nut = document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName("dehienthi");
    console.log(nd);
    // console.log(nut);
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function() {
            // console.log(this.classList[1]);
            if (this.classList[1] == 'mautrang') { //click vào cái đã hiển thị rồi
                // console.log("truong hop chua code");
                this.classList.remove('mautrang'); //bỏ màu trắng ở chính nó
                var hienlen = this.getAttribute("data-hienlien");
                // console.log(hienlen);
                var phan_tu_hien_ra = document.getElementById(hienlen);
                phan_tu_hien_ra.classList.remove('ra');//xoá toàn bộ class .dehienthi
                // console.log(phan_tu_hien_ra);
            } else { //click vào những cái nút còn lại (nút chưa click)
                // xử lý khi 1 nút được click hiển thị nổi bật là màu trắng thì
                //tất cả các nút còn lại k được hiển thị màu trắng cùng lúc nút đã click
                //vì vậy phải bỏ tất cả các class .mautrang ở các nút khác đi
                for (let j = 0; j < nut.length; j++) {
                    nut[j].classList.remove('mautrang');
                }
                // console.log('đã nhận được sự kiện');
                // this.style.color = "white";
                this.classList.toggle('mautrang');
                //lấy về data-hienthi 
                var hienlen = this.getAttribute("data-hienlien");
                // console.log(hienlen);
                var phan_tu_hien_ra = document.getElementById(hienlen);
                for (let k = 0; k < nd.length; k++) {
                    nd[k].classList.remove('ra');
                }
                phan_tu_hien_ra.classList.toggle('ra');
                // console.log(phan_tu_hien_ra);
            }
        }
    }

}, false)