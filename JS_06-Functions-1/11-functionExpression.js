// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//! örnek1: önce fonksiyon olusturmak sart

const isEvenOdd=function(sayi) {

    return sayi%2==0 ? "Cifttir" : "Tektir";
}

const sonuc=isEvenOdd(5);
console.log(sonuc);  //Tektir

console.log(isEvenOdd(10)); //Cifttir

//! örnek2: Verilen 3 sayidan en büyügünü bulmak

const buyukBul =function(a,b,c){
    let enBuyuk;
      if(a>b && a>c) {enBuyuk=a}
      else if(b>a && b>c) {enBuyuk=b}
      else enBuyuk=c;
    
    // console.log(enBuyuk);
    
    return enBuyuk
    
    };
    //   alert(  buyukBul(3,4,5))  //5
    //  alert(  buyukBul(13,4,7))  //13

//! örnek3: arguments keyword ü ile

const enBul=function () {
let biggest=arguments[0];
let smallest=arguments[0];

for (let i = 1; i < arguments.length; i++) {
if (arguments[i]>biggest) {
    biggest = arguments[i];
};
if (arguments[i]<smallest) {
    smallest = arguments[i];
};
}
//console.log(biggest);  //5678
//console.log(smallest);  //2

return `${biggest} ${smallest}` ;
};

//alert( enBul(34,111,777,678,56,2,5678,34,6))  //5678


//! örnek4: Bir fonsiyon icinden baska bir fonksiyon cagirilabilir. 
const usAl = function (a, b) {
    return a ** b;
  };
  
  const cevreBul = function (a, b) {
    return (a + b) * 2;
  };
  
  const alanBul = function (a, b) {
    return a * b;
  };
  const hesapla = function(secim,s1,s2){
  
  if(secim=="usAlırmısın"){
     console.log( usAl(s1,s2))
  }else if(secim=="cevreBulurmusun"){
     console.log( cevreBul(s1,s2))
  }else if(secim=="alanBulurmusun"){
    console.log(  alanBul(s1,s2))
  };
  };
  hesapla("usAlırmısın",3,5);  //243
  hesapla("cevreBulurmusun",13,15); //56
  hesapla("alanBulurmusun", 2, 4); //8


  //! ornek5:------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/

const calculate=function (birth) {
    
const ortOmur=95;
const kalanOmur=95-(new Date().getFullYear()-birth);

if(kalanOmur>0 && kalanOmur<=20){
    return "Sen bu degerleri önemseme hayatin tadini cikar";
}else if (kalanOmur>10 && kalanOmur<=20){
    return "Gezmek görmek istedigin yerler varsa yola cikma zamani..";
}else 
return `${kalanOmur} yilin varsa sen daha calis ilerde gezersin`;
};

console.log(calculate(prompt("Lütfen dogum yilinizi giriniz")));


/* *******************************************/
// yas 
const birth=prompt("Lütfen dogum yilinizi giriniz");
const yas1 = new Date().getFullYear()-birth;

console.log("yasiniz", yas1);
