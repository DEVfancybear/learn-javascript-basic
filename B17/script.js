document.addEventListener("DOMContentLoaded", function() {
    // khai báo biến cần dùng
    var nut = document.querySelector(".nut"),
    menutrai = document.querySelector(".menutrai"),
    den = document.querySelector(".den"),
    trang = document.querySelector('.mautrang'),
    khoito = document.querySelector('.noidungto');
    console.log(nut,menutrai,den);
    nut.onclick = function() {
        den.classList.add('hienlen');
        //cho cả khối to dịch sang phải
        khoito.classList.add('dichphai');
        trang.classList.add('trangquay');
        menutrai.classList.remove('vetrai');
    };
    den.onclick = function() {
        den.classList.remove('hienlen');
        khoito.classList.remove("dichphai");
        trang.classList.remove('trangquay');
        menutrai.classList.add('vetrai');
    }
    //hiệu ứng 2 chiều
}, false)