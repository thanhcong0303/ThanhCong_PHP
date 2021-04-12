// Đề: Cho ban 2000 vnđ đi mua kẹo .Biết : 1 viên kẹo giá 200 vnđ. cứ 2
// vỏ kẹo đổi được 1 viên. Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?

// Cách giải:
// Khai báo 1 biến là kẹo
// Khai báo 1 biến là vỏ kẹo
// Khai báo 1 biến là số tiền
// Khai báo 1 biến là giá kẹo
//  Thực hiện mua kẹo bằng tiền cho đến khi tiền không đủ mua 1 cái kẹo
//  Thực hiện đổi kẹo bằng vỏ kẹo cho đến khi còn ít hơn 2 vỏ kẹo
// Trả về số kẹo mua được!
var candy = 0;
var candyShell = 0;
var money = 2000;
var price = 200;
candy = money / price;
candyShell = candy;
while (candyShell >= 2) {
  candyShell = candyShell-2;
  candy++;
  candyShell++;
}
document.write("<br>");
document.write(candy);
