var fullName = 'Le Chi Trung';
var age = 22; // Khai bao tuoi
//Goi ham thong bao
/*noi dung thong bao*/
//ctrl +/
alert(fullName);
alert(age);
console.log('Day la dong log'); // In ra console
confirm('Xac nhan ban du tuoi'); // Hien thi hop thoai xac nhan
prompt('Nhap ten cua ban'); // Hien thi hop thoai nhap du lieu
setTimeout(function() {
    alert('Thong bao sau 1s');
}, 1000); // Thuc thi ham sau 1s
setInterval(function() {
    console.log('Thong bao moi 2s');
}, 2000); // Thuc thi ham moi 2s
var a = 5;
var b = 10;
console.log('Tong cua a va b la: ' + (a + b)); // In ra tong cua a va b
/*Toán tử gán 
=, +=, -=, *=, /=, %=*/
var c = 15;
c += 5; // c = c + 5
console.log('Gia tri cua c sau khi cong 5 la: ' + c); // In ra gia tri cua c sau khi cong 5
//Toán tử chuỗi//
var firstName = 'Le Chi';
var lastName = 'Trung';
var fullName = firstName + ' ' + lastName;
console.log('Ten day du la: ' + fullName); // In ra ten day du
//toán tử so sánh
var x = 10;
var y = 20;
if (x < y) {
    console.log('x nho hon y');
} else {    console.log('x lon hon hoac bang y');
}
//bollen//
var isStudent = true;
if (isStudent) {
    console.log('Ban la sinh vien');
} else {    console.log('Ban khong phai la sinh vien');
}
/* các kiểu false if else
NaN
undefined
null
0
'' (chuỗi rỗng)
*/
/* Toán tử logic
&& (AND)
|| (OR)*/
if(a>0 && b>0) {
    console.log('a va b deu la so duong');
}