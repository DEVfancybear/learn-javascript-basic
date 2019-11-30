document.addEventListener("DOMContentLoaded", function() {
    // khai báo biến cần dùng
    var nut = document.querySelector(".nut"),
    menutrai = document.querySelector(".menutrai"),
    den = document.querySelector(".den"),
    khoito = document.querySelector('.noidungto');
    console.log(nut,menutrai,den);
    nut.onclick = function() {
        den.classList.add('hienlen');
        //cho cả khối to dịch sang phải
        khoito.classList.add('dichphai');
    }

}, false)