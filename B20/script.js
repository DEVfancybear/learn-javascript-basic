document.addEventListener("DOMContentLoaded", function() {
    // bắt sự kiện cuộn chuột 
    var trangthai = "duoi 400";
    //lấy về đối tượng menu
    var doituongmenu = document.querySelector('.menu');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 400) {
            // console.log(">400");
            if (trangthai == 'duoi 400') {
                // console.log('dung roi');
                trangthai = "tren 400";
                doituongmenu.classList.add('nholai');
            }

        } else if(window.pageYOffset <= 400) {
            console.log('nho hon 400');
            if (trangthai == 'tren 400') {
                trangthai = "duoi 400";
                doituongmenu.classList.remove('nholai');
                console.log('nho hon 400');
            }
        }
    })
}, false)