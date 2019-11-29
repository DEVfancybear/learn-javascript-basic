// truy xuất cái nút
//trước khi truy xuất phải cho cái nút sẵn sàng
// công thức làm animation 2 chiều
// xử lí animation như sau:
// b1: tự định nghĩa cho cho phần tử vốn có của nó
// - là #kcd
// - có chuyển động từ đầu
// - tôi không muốn thế nên phải định nghĩa thêm class để giữ chốt, cấm nó chuyển độnglà:  animation: none
// b2: khi click lần 1 thì cho remove('khongchuyendong') -> sau đó add chuyển theo chiều xuôi vào (lần 1)
// b3: khi click lần 2 thì remove('chieuso1') để nó trở về trạng thái ban đầu
document.addEventListener("DOMContentLoaded", function() {
    // body...
    var nut = document.getElementById('nut2');
    var khoi = document.getElementById('kcd');
    var trangthai = "lan1";
    // console.log(nut);
    //gọi sự kiện khi click vào nút
    //nếu trạng thái trùng vs lần 1 thì in ra trạng thái lần 2,nếu trạng thái trùng vs lần 2 thì in ra lần 1
    //đây là trạng thái 2 chiều
    nut.onclick = function() {
        if (trangthai == "lan1") {
            console.log('click lan 1');
            trangthai = "lan2";
            //xử lý code trạng thái lần 1
            khoi.classList.remove("khongchuyendong");//định nghĩa khi click lần 1 phải di chuyển nên phải xoá trạng thái không chuyển động đi
            khoi.classList.add('chieuso1'); //di chuyển đến vị trí animations
        } else if (trangthai == "lan2") {
            console.log('click lan 2');
            trangthai = "lan1";
            //xử lí code trạng thái lần 2
            khoi.classList.remove('chieuso1'); //trở về trạng thái ban đầu
        }

    };
}, false)