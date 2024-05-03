// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma); //100

let toplam=kola+cips+dondurma; 

console.log(toplam); //100

//! bir arttir
toplam++
toplam=toplam+1

console.log(toplam); // 102

//! 10 arttir
toplam=toplam+10 

toplam+=10   //toplam=toplam+10

console.log(toplam); //122

//? + operatorü string concatination işlemi de yapar

const sayi1="3"; //string icinde3
const sayi2=8;

console.log(sayi1+sayi2); //38
console.log(sayi1-sayi2); //-5


//``  Backticks (Template literals)
const ad="erkan"
const soyad="sevim"

console.log(ad + soyad); //erkansevim
console.log("Adim Soyadim : "+ad +" "+ soyad); //Adim Soyadim : erkan sevim
 
console.log(`adim soyadim: ${ad} ${soyad}`); //adim soyadim: erkan sevim 

const dogumTarihi=1979;
console.log(`${ad} ${soyad} ${2024-dogumTarihi} yasindadir`); //erkan sevim 45 yasindadir


//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir. virgüllü sayi tutar. ama Ayarlanabilir







