// * =======================================================
// *                   KARAR YAPILARI--CONDITIONALS
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız

const sayı1=+prompt("1. sayiyi giriniz");
const islem= prompt("+,-,*,/ işlemlerinden birini giriniz");
const sayı2=+prompt("2. sayiyi giriniz");

let sonuc;

if (islem=="+") {
  sonuc= sayı1 + sayı2;
}else if(islem=="-"){
  sonuc= sayı1 - sayı2;
}else if(islem=="*"){
  sonuc= sayı1 * sayı2;
}else if(islem=="/"){
    if (sayı2 !=0) {
    sonuc= sayı1 / sayı2;    
    }else{
        alert("payda 0 olamaz")
    }

    
}else{
    // console.log("yanlis islem girdiniz");
    alert("yanlis islem girdiniz");
}
console.log("sonuc : " + sonuc);


//****** */

if(sonuc!=0){ //sonuc 0 dışında herhangi bir değerken
    console.log("tebrikler bir değer elde ettiniz");
}

//? kısa 1. yol 
if(sonuc){
    console.log("tebrikler bir değer elde ettiniz"); 
}

//? kısa 2. yol (short circuit)
sonuc && console.log("komik olma kuzen Larry");

//* ornek
const age=12
const gender="erkek"
const health=true

if(age>=20  && gender=="erkek" && health==true){

    console.log("askerlik yapabilir");
}else {
    console.log("askerlik yapamaz");
}
//askerlik yapamaz yas tan dolayi

