document.addEventListener("DOMContentLoaded", function() {
    var nut = document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName("dehienthi");
    console.log(nd);
    // console.log(nut);
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function() {
            // xử lý khi 1 nút được click hiển thị nổi bật là màu trắng thì
            //tất cả các nút còn lại k được hiển thị màu trắng cùng lúc nút đã click
            //vì vậy phải bỏ tất cả các class ở các nút khác đi
            for (let j = 0; j < nut.length; j++) {
                nut[j].classList.remove('mautrang');
            }
            // console.log('đã nhận được sự kiện');
            // this.style.color = "white";
            // cho đối tượng được click thêm màu trắng
            this.classList.toggle('mautrang');
            //lấy về data-hienthi 
            var hienlen = this.getAttribute("data-hienlien");
            // console.log(hienlen);
            var phan_tu_hien_ra = document.getElementById(hienlen);
            // cho tất cả các div .dehienthi khác ẩn đi
            for(let k=0; k< nd.length; k++) {
            	nd[k].classList.remove('ra');
            }
            // cho div của đối tượng được click hiển thị ra
            phan_tu_hien_ra.classList.toggle('ra');
            // console.log(phan_tu_hien_ra);
        }
    }

}, false)