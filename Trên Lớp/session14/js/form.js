// Tạo form nhập tính tiền điện gồm:
//   Họ tên khách hàng (text)
//   , số đầu kỳ (text)
//   , số cuối kỳ (text)
//   , giới tính (radio)
//   , ngày sinh (date)
//   , ngày đầu kỳ (date)
//   , ngày cuối kỳ (date)
// 1. Tất cả các trường k được để trống
// 2. Số đầu kỳ phải nhỏ hơn hoặc bằng số cuối kỳ, số đầu kỳ phải lớn hơn 0, ngày đầu kỳ nhỏ hơn hoặc bằng ngày cuối kỳ
// 3. Tính tiền điện: 50 số đầu giá 1000 VND/số, 100 số tiếp theo 2000 VND/số, từ 200 số trở lên sẽ tính giá 3500 VND/số
// 4. In ra cái hóa đơn đẹp đẹp cho khách hàng (Nếu khách hàng là nữ thì in hóa đơn màu hồng, là nam thì in ra màu xanh green)


function validateForm(){
  let so50dau = 1000;
  let so100tiep = 2000;
  let so200trolen = 5000;
  let name1, first_number, last_number, gender, date_of_birth, first_day, last_day;
  let printBill = ' ';

  name1 =  document.getElementById("name1").value;
  first_number = document.getElementById("first_number").value;
  last_number = document.getElementById("last_number").value;
  gender = document.getElementById("gender").value;
  date_of_birth = document.getElementById("date_of_birth").value;
  first_day = document.getElementById("first_day").value;
  last_day = document.getElementById("last_day").value;

  if(name1 === '') {
    document.getElementById("errorName").innerHTML = "Error !!";
  } else {
    document.getElementById("errorName").innerHTML = " ";
  }

  if(first_number === '' || first_number < 0 || first_number > last_number) {
    document.getElementById("errorNumFirst").innerHTML = "Error !!";
  } else {
    document.getElementById("errorNumFirst").innerHTML = " ";
  }

  if(last_number === '' || last_number < 0 || last_number < first_number) {
    document.getElementById("errorNumLast").innerHTML = "Error !!";
  } else {
    document.getElementById("errorNumLast").innerHTML = " ";
  }

  if(gender === '') {
    document.getElementById("errorGender").innerHTML = "Error !!";
  } else {
    document.getElementById("errorGender").innerHTML = " ";
  }

  if(date_of_birth === '') {
    document.getElementById("errorDate").innerHTML = "Error !!";
  } else {
    document.getElementById("errorDate").innerHTML = " ";
  }

  if(first_day === '') {
    document.getElementById("errorDateFirst").innerHTML = "Error !!";
  } else {
    document.getElementById("errorDateFirst").innerHTML = " ";
  }

  if(last_day === '') {
    document.getElementById("errorDateLast").innerHTML = "Error !!";
  } else {
    document.getElementById("errorDateLast").innerHTML = " ";
  }

  let totalNumber =0;
   totalNumber = last_number - first_number;
  if (totalNumber <= 50) {
    totalMoney = totalNumber * so50dau;
    return totalMoney;
  }
  else if ( totalNumber <= 200) {
    totalMoney = 100 * so100tiep + (totalNumber - 100) * 2000;
    return totalMoney;
  }
    else if (totalNumber > 200) {
    totalMoney = so50dau * 1500 + so100tiep * 2000 + (totalNumber - 200) * so200trolen;
    return totalMoney;
  }
  printBill += "<p style='text-align: center;'>Hóa Đơn" + "</p>";
  printBill += "<p>Họ và tên: " + name1 + "</p>";
  printBill += "<p>Ngày sinh: " + date_of_birth + "</p>";
  printBill += "<p>Số đầu kỳ: " + first_number + "</p>";
  printBill += "<p>Số cuối kỳ: " + last_number + "</p>";
  printBill += "<p>Ngày đầu kỳ: " + first_day + "</p>";
  printBill += "<p>Ngày cuối Kỳ: " + last_day + "</p>";
  printBill += "<p>Tổng tiền: " + totalMoney + "</p>";
  printBill += "<p style='float: right;'>Chữ Ký: <br>" + name1 + "</p>";
  if (gender[0].checked === true) {
    document.getElementById('printBill').innerHTML = printBill;
    document.getElementById('printBill').style.background = '#24F927';
    document.getElementById('printBill').style.color = 'black';
    document.getElementById('printBill').style.height = '300px';
    document.getElementById('printBill').style.width = '200px';
  }
  else{
    document.getElementById('printBill').innerHTML = printBill;
    document.getElementById('printBill').style.background = '#FF5DF0';
    document.getElementById('printBill').style.color = 'black';
    document.getElementById('printBill').style.height = '300px';
    document.getElementById('printBill').style.width = '200px';
  }

}

