//cách gửi tham số qua thẻ html:
// - sử dụng thuộc tính data-thamso (ở phía HTML)
// - lấy về thông qua hàm getAttribute() (ở phía js)
/*
- ví dụ:
function tinhTong (a,b) {
    console.log(a+b);
}
tinhTong(5,7);
-> đây là cách viết tổng quát viết 1 lần sử dụng nhiều lần
*/
document.addEventListener("DOMContentLoaded", function() {
    var nut = document.getElementsByClassName('nuttongqat');
    // console.log(nut); 
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function() {
            // console.log('đã nhận được sự kiện');
            console.log(this.getAttribute('data-giatri'));
        }
    }

}, false)
// -> chỉ cần lấy tất cả các nút có class là nuttongqat thì đoạn code trên sẽ chạy vs mọi nút mà
// không cần code nhiều
// -> đây là code dạng tổng quát
// có thể gửi vô số tham số