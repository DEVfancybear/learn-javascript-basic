document.addEventListener("DOMContentLoaded", function() {
    console.log('load xong roi');
    //bắt sự kiện khi người dùng scroll
    window.addEventListener('scroll', function(){ //biết được khi nào người dùng cuộn chuột
        console.log("dang cuon chuot");
        console.log(window.pageYOffset);//biết được vị trí mà người dùng đang cuộn chuột
        if(window.pageYOffset <500) {
            console.log("Đang ở vị trí dưới 500");
        }
    })
}, false)