//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

// condition ?  (şart olduğunda yapılacaklar)  : (şart doğru olmadığında yapılacaklar)

//* ornek1
const age = 12;
const gender = "erkek";
const health = true;

// if (age >= 20 && gender == "erkek" && health == true) {
//   console.log("askerlik yapabilir");
// } else {
//   console.log("askerlik yapamaz");
// }

const mesaj=  (age>=20 && gender=="erkek" && health==true) ? "askerlik yapabilir" : "askerlik yapamaz"

console.log(mesaj);

age >= 20 && gender == "erkek" && health == true
  ? console.log("ok")
  : console.log("no");

//*örnek2

// kullanıcıdan not isteyelim 50 ve üstüyse başarılı, altıysa başarısız olsun

 const grade=    +prompt("lütfen notunuzu giriniz")

 grade>=50 ? console.log("SUCCEED") : console.log("FAILED");

 // //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.

 grade >= 50 ? console.log("SUCCEED") : ""

 grade>= 50 && console.log("SUCCEED");

 // //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise
// //? Ternary kullanmak daha mantiklidir

const speed = 150
  speed > 120 
  ? console.log("speedy")
  : speed >= 90
  ? console.log("normal")
  : console.log("slowly");

  // //? ayni örneğin if-else ile yapilmasi
// if (speed > 120) {
//   console.log("Speedy")
// } else if (speed >= 90) {
//   console.log("Normal")
// } else {
//   console.log("Low Speed")
// }

