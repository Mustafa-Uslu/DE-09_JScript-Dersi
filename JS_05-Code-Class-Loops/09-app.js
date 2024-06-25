//* ^ And operatörü

//*  & Truthy value with &&

console.log(2 && 5) //5
console.log(Boolean(2 && 5)); //true

//* & Falsy value with &&
console.log(0 && 7); //0 
console.log( '0' && 7) // 7
console.log(Boolean(0)) //False


//* & object / Array  with &&

console.log({} && "Hello"); //Hello
console.log([] && "Hello"); //Hello

console.log(Boolean([])) //true
console.log(Boolean({})) //true 

//* & Falsy string with &&

console.log('' && 'World') // ilk değer boş string dönerç Hiclik
console.log("" && 'World') //hiclik
console.log(`` && 'World') //hiclik

//* & Falsy null with &&

console.log(null && 'Hello World') // null  ilki alir
console.log(NaN && 'Hello World') // NaN
console.log(null && NaN) //null 


//*  ^ OR operatörü ||

//* & Truthy value with ||

console.log(2 || 5) //2

//* & Falsy value with ||

console.log(0 || 7) //7

console.log(0 || '') //boş string döner

//* & object / Array  with ||
console.log({} || "Hello"); // {}  ilk gördügünü alir
console.log([] || "Hello"); // []

//* & Falsy null with ||

console.log(null || 1) //1
console.log(null || NaN) //NaN   sonuncuyu aliyor


 //? Soru 1 : 18 yaşından büyüklerin sigara kullanabileceği 18 yaşından küçüklerin sigara kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız. 

//  const age = 10;
// if(age>18){
//     console.log("Yaşınız uygundur");
// }else{
//     console.log("Yaşınız uygun değildir");
// }

// let birtYear = 1998;
// let age = 2024 - birtYear;
// if (age > 18) {
//   console.log("Sigara kullanabilirsiniz");
// } else {
//   console.log("Sigara kullanamazsiniz");
// }

// let yas=+prompt("Lütfen yasinizi giriniz");

//  if(yas>=18){
//     console.log("Sigara kullanabilirsiniz");
//  }else if(yas<=18){
//     console.log("Sigara kullanamazsiniz");
//  }else{
//     console.log("Yanlis giris yaptiniz");
//  }

//* ternary ile
// const age=    +prompt("lütfen yasinizi giriniz")
// age>=18 ? console.log("Kullanabilir") : console.log("Kullanamaz");

//2.yol
// let yas = +prompt("Lütfen yasinizi giriniz");
// console.log(yas>= 18 ? "Sigara kullanabilirsiniz" : "Sigara kullanamazsiniz");

//3.yol
// let age = +prompt("Lütfen yasinizi giriniz");

// console.log(age >= 18 ? "Sigara kullanabilirsiniz" : "Sigara kullanamazsiniz");
// age >= 18
//   ? console.log("sigara kullanabilirsiniz")
//   : console.log("sigara kullanmazsiniz");

//   //DEv tercihi
//   let response = (age >= 18) ? "sigara alabilir" : "sigara alamaz";
// console.log(response);




//!  isNaN() metodu =sayiDegilDemi diye sorar ***********
// let x = +prompt('Bir sayı giriniz :')
//   console.log(isNaN(x)); // 5 girersek False olur


//* kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.

// let x = +prompt('Lütfen Bir sayı giriniz :')
// while (isNaN(x)) {
//     x = +prompt('Lütfen Bir sayı giriniz :')
// }
// console.log("Girilen Sayi : " + x);

//* Do-While ile cözümü

// let x1;
// do {
//     x1 = +prompt("Lütfen Bir sayı giriniz : ");
// } while (isNaN(x1)); 
// console.log("Girilen Sayi : " + x1);

//? *örnek3 Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın

//const user = "mustafa";
// let password = 1234;
// let hak = 3;
// while (hak > 0) {
//   let usernameP = prompt("Kullanıcı adınızı giriniz:");
//   let passwordP = prompt("Parolanızı giriniz:");
//   if (usernameP == "mustafa" && passwordP == 1234) {
//     console.log("Giriş başarılı!");
//     break;
//   } else {
   
//     hak--;
//      alert(
//        "Kullanıcı adı veya parola yanlış. Kalan hakkınız: " + hak 
//      );
//   }
// }
// if (hak == 0) {
//   console.log("Üç kez yanlış giriş yapıldı. Lütfen daha sonra tekrar deneyin.");
// }

//2.yol
// let user = "Mark";
// let password = "1234";

// let loginCount = 3;

// while (loginCount > 0) {
//   let userid = prompt("Kullanıcı adınızı girin:");
//   let userpw = prompt("Parolanızı girin:");

//   if (userid === user && userpw === password) {
//     alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉🎉`);
//     break;
//   } else {
//     loginCount--;
//     if (loginCount > 0) {
//       alert(`Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`);
//     } else {
//       alert("Giriş hakkınız kalmadı.Güle güle..");
//     }
//   }
// }


//! Asagidaki ciktiyi konsola yazdiriniz
//* piramid
//*      #
//*     ###
//*    #####
//*   #######
//*  #########

// let size = 5;

// for (let i = 1; i <= size; i++) {
//     let row = '';
//     for (let b = 1; b <= size - i; b++) {
//         row += ' '; //bosluk icin
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '#';  //# icin
//     }
//     console.log(row);
// }


// let size2 = 5;

// for (let i = 1; i <= size2; i++) {
//     let row = '';
//     for (let b = 1; b <= row + i; b++) {
//         row += ' '; //bosluk icin
//     }
//     for (let k = 1; k <=size2- 2 * i +2; k++) {
//         row += '#';  //# icin
//     }
//     console.log(row);
// }


//? **örnek4 ciktiyi konsola yazdiriniz
//     * 
//     * *  
//     * * * 
//     * * * *  
//     * * * * *

// let sizem = 5;

// for (let i = 1; i <= sizem; i++) {
//     let row = '';
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '❤️ ';  //simge icin
//     }
    
//     console.log(row);
// }


//?  örnek5 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?
 
// let toplam = 0;

// for (let i = 1; i <= 5; i++) {
//   let input = +prompt(`Lütfen ${i}. sayıyı giriniz:`);
//   toplam += input;
// }
//  let ortalama = toplam / 5;
// console.log("Girilen Sayinin  Ortalamasi :" +ortalama);


//? örnek6 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm

// let count = 0;
// for (let i = 1000; i <= 2000; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         count++;
//     }
// }
// console.log("1000 ile 2000 arasındaki hem 3 hem de 5e bölünebilen sayıların adedi:👍 " + count); //67 

// let say=0;
// for (let i = 1000; i <=2000; i++) {
//    if (i%3==0 && i%5==0) {
//      say++;
//    }
// }
// console.log(say); //67


//while

// let sayi = 1000
// let sayacc=0
// while (sayi <= 2000) {
//     if(sayi % 3 == 0 && sayi % 5 == 0) {
//         console.log(sayi);
//     sayacc++;

//     }
//     sayi++
// } 

// console.log(sayacc);

 //** Armstrong number while solution  **************
//!   bir sayının basamak adedince bütün basamakların üssü alınıp toplandığında kendisi ediyorsa bu sayı Armstrong sayıdır.
// 153= 1**3 + 5**3 + 3**3
// 9474 = 9**4 + 4**4 + 7**4 + 4**4

//!  verilen sayının tüm basamaklarının sayı değerlerinin basamak adedi kadar kuvvetinin toplamı kendisine eşitse bu bir armstrong sayıdır

//* 3basamaklida
// let a=+prompt("Lütfen bir sayi giriniz?");
// let sum=0;
// let t=a.toString().length;
// console.log(t);

// for( i=0 ; i< t ; i++){
//     placeValue=parseInt(a/ (10**i)) % 10;
//     sum = sum + (placeValue)**3;
// }
// if( sum == a){
//     console.log("This is an Armstrong Number.");
// }else{
//     console.log("This is not an Armstrong Number.");
// }

//* 4basamaklida
let num = +prompt("Enter a number:");
let originalNumber = num;
let sayac = 0;
let sum = 0;



while (originalNumber != 0) {
  originalNumber = Math.floor(originalNumber / 10);
  console.log(originalNumber);
  sayac++;
}

originalNumber = num;

while (originalNumber > 0) {
  let sayi = originalNumber % 10;
  sum += sayi ** sayac;
  originalNumber = Math.floor(originalNumber / 10);
}

sum == num
  ? console.log(num + " is an Armstrong number.")  //153
  : console.log(num + " is not an Armstrong number."); //9474

  