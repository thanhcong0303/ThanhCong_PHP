// Một hộp có 120 viên bi gồm bốn màu : đỏ , xanh , vàng, trắng.
//   Số bi màu đỏ chiếm 1/5 tổng số bi ,
//   số bi màu xanh chiếm 30% tổng số bi ,
//   còn lại là bi màu vàng và trắng .
//   a) Tính số bi màu đỏ ; số bi màu xanh
// b) Tính số bi màu vàng ; số bi màu trắng biết tỉ số giữa số bi trắng và số bi màu vàng là 3/7

var bido =120/5;
var bixanh=120*30/100;
var bivangtrang = 120-bido - bixanh;
var bivang = bivangtrang /10*3;
var bitrang = bivangtrang /10*7;
document.write("<br>");
document.write("Bi đỏ " +bido);
document.write("<br>");
document.write("Bi xanh " +bixanh);
document.write("<br>");

document.write("Bi vang " +bivang);
document.write("<br>");

document.write("Bi trang " +bitrang);
