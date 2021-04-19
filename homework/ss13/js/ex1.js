var myArray =[
  ['Thành Công', 18,'thanhcong@gmail.com','Đà nẵng'],
  ['Thành', 19,'thanh@gmail.com','Đà '],
  ['Công', 20,'cong@gmail.com','Đà'],
  ['Công1', 21,'cong1@gmail.com','Đà nẵng'],
];

for(var i=0;i<myArray.length;i++) {
  for(var j=0;j<myArray[i].length;j++){
    document.write(myArray[i][j] + " &nbsp;&nbsp;&nbsp;&nbsp;  ");
  }
  document.write('<br/>');
}
document.write('<br/>');
//
//
    myArray.push(['Công2 ', 21 , ' cong2@gmail.com ', ' Đà nẵng']);
    myArray.push(['Công3 ', 21 , ' cong3@gmail.com ', ' nẵng']);

document.write('<br/>');

for(var i = 0 ; i < myArray.length ; i++) {
  for(var j = 0 ; j < myArray[i].length ; j++) {
    if(myArray[i][j] == 'Công1') {
      myArray[i][j]='Huy';
    }
    document.write(myArray[i][j] + " &nbsp;&nbsp;&nbsp;&nbsp;  ");
  }
  document.write('<br/>');
}

document.write('<br/>');
for(var i = 0 ; i < myArray.length ; i++) {
  for(var j = 0 ; j < myArray[i].length ; j++) {
    if(myArray[i][j] == 'Đà nẵng')
    {
      myArray[i][j] = 'Hải phòng';
    }
    document.write(myArray[i][j] + " &nbsp;&nbsp;&nbsp;&nbsp;  ");
  }
  document.write('<br/>');
}
