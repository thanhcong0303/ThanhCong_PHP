// Bài tập String trong javascript:
//   Khai báo 1 biến chứa họ và tên đầy đủ, ví dụ: "Tran Van Tuan"
// Đếm xem họ có bao nhiêu ký tự, tên đệm có bao nhiêu ký tự, tên có bao nhiêu ký tự
// Thay thế tên bằng chữ "21PHP01"
// Đếm xem có bao nhiêu chữ "n" trong họ và tên
// In ra và bôi màu vàng các chữ cái a, n, t trong họ và tên
var myString = "Nguyen Sy Thanh Cong";
document.write(myString);
var firstSpace= myString.indexOf(' ');
var myFirstName = myString.substring(0,firstSpace);
document.write("<br> First Name : ");
document.write(myFirstName);

var lastSpace= myString.lastIndexOf(' ');
var myLastName = myString.substring(lastSpace,myString.length);
document.write("<br> Last Name : ");
document.write(myLastName);

var middleName = myString.substring(firstSpace,lastSpace);
document.write("<br> Mid Name : ");
document.write(middleName);

var newString = "";
newString = myString.replace("Cong" , "21PHP01");
document.write("<br>");
document.write(newString);

var countChar = 0;
var findChar="n";
var positionChar=0;
myString=myString.toLowerCase();
findChar=findChar.toLowerCase();
while(myString.indexOf(findChar)>-1)
{
  positionChar =myString.indexOf(findChar);
  myString =myString.substring(positionChar + 1,myString.length)
  countChar++;
}
document.write("<br>");
document.write(countChar);

var lengString = 0
lengString = myString.length;
console.log(lengString);

