// javascrip
// - Biến
// - Hàm
// - Vòng lặp
// - Câu điều kiện

function changeInfoMessi() {
  // có 3 việc
  // đổi hình ảnh
  document.getElementById('big-img').src = 'img/da-nang.jpg';
  // Đổi tên
  document.getElementById('change-name').innerHTML = 'Leonel Messi';
  // Đổi tuổi
  document.getElementById('change-age').innerHTML = '34 years old';
}
function changeInfoRonaldo() {
  // có 3 việc
  // đổi hình ảnh
  document.getElementById('big-img').src = 'img/hinh3d.png';
  // Đổi tên
  document.getElementById('change-name').innerHTML = 'Cristian Ronaldo';
  // Đổi tuổi
  document.getElementById('change-age').innerHTML = '36 years old';
}
function changeInfo(name, image, age) {
  // có 3 việc
  // đổi hình ảnh
  document.getElementById('big-img').src = image;
  // Đổi tên
  document.getElementById('change-name').innerHTML = name;
  // Đổi tuổi
  document.getElementById('change-age').innerHTML = age;
}
