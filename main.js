/**Bài 1 */
document.getElementById('btnLuong').onclick = function () {
    /**Đầu vào */
    const LUONG_NGAY = 100000;
    var soNgaylam = document.getElementById('soNgayLam').value*1;

    /**Xử lý */
    var luongNv = LUONG_NGAY * soNgaylam;
    var currentFormat = new Intl.NumberFormat("VN-vn");

    /**Đầu ra */
    var ketQua = '<p>Lương nhân viên : ' + currentFormat.format(luongNv) + 'VND</p>'

    document.getElementById('showLuong').innerHTML = ketQua;
}


// Bài 2 Giá trị trung bình
document.getElementById('btnNumber').onclick = function () {
    /**Đầu vào */
    var number1 = document.getElementById('number1').value*1;
    var number2 = document.getElementById('number2').value*1;
    var number3 = document.getElementById('number3').value*1;
    var number4 = document.getElementById('number4').value*1;
    var number5 = document.getElementById('number5').value*1;

    /**Xử lý */
    var trungBinhTong = (number1 + number2 + number3 + number4 + number5) / 5;

    /**Đầu ra */

    var ketQua = '<p>Tổng trung bình là : ' + trungBinhTong + '</p>'

    document.getElementById('showGiaTriTB').innerHTML = ketQua;
}


// Bài 3 Quy đổi tiền tệ
document.getElementById('btnQuyDoi').onclick = function () {
    //Đầu vào
    const quyDoi = 23000;
    var USD = document.getElementById('USD').value*1;

    // Xử lý
    var thanhTien = USD * quyDoi;
    var currentFormat = new Intl.NumberFormat('VN-vn')

    // Đầu ra
    var ketQua = '<p>Nhận được : ' + currentFormat.format(thanhTien) + ' VND</p>';

    document.getElementById('showTien').innerHTML = ketQua;
}

// Bài 4 Tính diện tích , chu vi hình chữ nhật
document.getElementById('btnTinhHVN').onclick = function() {
    //Đầu vào
    var chieuDai = document.getElementById('chieuDai').value*1;
    var chieuRong = document.getElementById('chieuRong').value*1;

    // Xử lý
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    // Đầu ra
    var ketQua = '<p>Diên tích : ' + dienTich + '</p>';
    ketQua += '<p>Chu vi : ' + chuVi + '</p>';

    document.getElementById('showDTCV').innerHTML = ketQua;
}

/**Bài 5 Tổng 2 số */
document.getElementById('btnNumberTong').onclick = function() {
    /**Đầu vào */
    var number = document.getElementById('NumberXX').value*1;

    /**Xử lý */
    var hangDonvi = Math.floor(number % 10);
    var hangChuc = Math.floor(number / 10);
    var tongHaiSo = hangDonvi + hangChuc;

    /**Đầu ra */
    var ketQua = '<p>Tổng hai số là : '+ tongHaiSo + '</p>';
    document.getElementById('showTổngHaiSo').innerHTML = ketQua;
}