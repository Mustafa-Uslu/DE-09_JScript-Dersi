 //!  TW-07  ÖDEV CONDITION
//! Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.
// * 0-25 arası not karşılığı FF 
//* 26-45 arası DD, 
//* 46-65 arası CC, 
//* 66- 75 arası BB, 
//* 76-90 arası BA, 
//* 91-100 arası AA olarak çevrilmelidir.
// * 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir.

// let not = +prompt("Lütfen Notunuzu sayı olarak giriniz"); 

//  if (not>=0 && not<=26) {
//   console.log(`${not}` +" Notunuz", "FF");
// }else if(not>=26 && not<=46){
//   console.log(`${not}` +" Notunuz", "DD");
// }else if(not>=46 && not<=65){
//   console.log(`${not}` +" Notunuz", "CC");
// }else if(not>=65 && not<=75){
//   console.log(`${not}` +" Notunuz", "BB");
    
// }else if(not>=75 && not<=90){
//   console.log(`${not}` +" Notunuz", "BA");
    
// }else if(not>=90 && not<=100){
//   console.log(`${not}` +" Notunuz", "AA");
    
// }else{
//     // console.log("yanlis islem girdiniz");
//     alert("Yanlis islem girdiniz; Lütfen [0-100] araliginda olmalidir");
// }
 


//! • Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.

// let monthName =prompt("Lütfen bir ay ismi giriniz");
// let monthNumber;

// switch (monthName) {
//   case 'ocak':
//     monthNumber =1;
//     break;
//   case 'subat':
//     monthNumber =2;
//     break;
//   case 'mart':
//     monthNumber =3;
//     break;
//   case 'nisan':
//     monthNumber =4;
//     break;
//   case 'mayis':
//     monthNumber =5;
//     break;
//   case 'haziran':
//     monthNumber =6;
//     break;
//   case 'temmuz':
//     monthNumber =7;
//     break;
//   case 'agustos':
//     monthNumber =8;
//     break;
//   case 'eylul':
//     monthNumber =9;
//     break;
//   case 'ekim':
//     monthNumber =10;
//     break;
//   case 'kasim':
//     monthNumber =11;
//     break;
//   case 'aralik':
//     monthNumber =12;
//     break;

//   default:
//     monthNumber = 'Hatali bir ay ismi girdiniz, Lütfen kontrol edip tekrar giriniz';
  
// }
// console.log(`${monthName}` +"="+ monthNumber);

//! • Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.
// let a=7;
// let b=5;
// let c=3;

// let enKucuk;
// let enBuyuk;
// let carpimi;
// let Toplami;

// if (a<b && a<c) {
//   enKucuk=a;
  
// }else if (b<a && b<c) {
//   enKucuk=b;  
// }else{
//   enKucuk=c;
// }

// if (a>b && a>c) {
//   enBuyuk=a;
// } else if (b>a && b>c) {
//   enBuyuk=b;
// } 
// else{
//   enBuyuk=c;
// }
// Toplami=Number(a)+Number(b)+Number(c);
// carpimi=a*b*c;

// console.log("Girilen En Kücük Sayi:",enKucuk); //3
// console.log("Girilen En Büyük Sayi:",enBuyuk);  //7
// console.log("Girilen Sayilarin Toplami:",Toplami); //15
// console.log("Girilen Sayilarin CArpimi:",carpimi);  //105


//! • Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternarydeyimi ile yapınız).

// let sayı=+prompt("Bir Sayi Giriniz");

// let sayi5 = 10

// let sonuc = (sayi5 % 2 == 0) ? "Girilen Sayi Cift" : "Girilen Sayi TEk";
// console.log(sonuc); //Girilen Sayi Cift


//! • Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı tasarlayınız.Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.

// let C;
// let F;

// let deger =prompt("Dereceyi Fahrenayta dönüstür.(Evet/Hayir)");

// if (deger==="Evet") {
//     C=+prompt("Dereceyi Giriniz");
//     F= C*1.8+32;
//     console.log(`${C}°C ${F}°F dir.`);
// } else {
//     F= +prompt("Fahrenayti Giriniz");
//     C= (F-32)/1.8;
//     console.log(`${F}°F ${C}°C dir.`);
// }


//* ************************************************************ */

 
//! TW.09 Sorulari

function countDigit (number){
    // if(number === 0){
    //     return 1
    // }
    console.log("ne geliyor", number);
    if(number < 10){
        return 1
    }else{
        return 1 + countDigit(Math.floor(number / 10)); //floor :Sayinin , sonrasini alta taraf yuvarlar.
    }
};
console.log(countDigit(251));  //3

// 2513

// 1+countDigit(251)
// 1+1+countDigit(25)
// 1+1+1+countDigit(2)
// 1+1+1+1
//4

/* *********************** */


let myStr = "Hello, FS Cohort 09!";
console.log(myStr.length); //20 

console.log(`ClarusWay`.indexOf(`Way`)); //6

console.log(`hello`.replace(`l`,`r`)); // herlo

/******** */

//Quiz 8.soru
let str = "Once a day";
let index = str.indexOf("a");
let index2 = str.lastIndexOf("a");
console.log(str.indexOf("a", index +1)===index2);
console.log(str.indexOf("a", index + 1));// ilk "a" stringdeki ilk a'yı buluyor, sonraki index+1 = stringdeki bir sonraki a'nın konumunu gösteriyor.

//console.log(index2);
//console.log(str.indexOf("a"));
//console.log(index);

//? NOT : 
/* console.log(str.indexOf('a', index + 1) === index2);:
str.indexOf('a', index + 1) ifadesi, index'ten bir sonraki pozisyondan başlayarak 'a' karakterinin stringdeki sonraki pozisyonunu bulur.*/

/* console.log(str.indexOf('a', index + 1) === index2);:
str.indexOf('a', index + 1) ifadesi, index'ten bir sonraki pozisyondan başlayarak 'a' karakterinin stringdeki sonraki pozisyonunu bulur.*/


//****************************************************************** */
//! TW-10 sorulari

//? 15. Tekrarlayan elemanlar içeren dizinin elemanlarını birleştirecek bir js kodu yazınız

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(a){

    let uniqueArray=[]
    for(let i in a){
        if(!uniqueArray.includes(a[i])){
            uniqueArray.push(a[i])
        }
    }
    return uniqueArray;
};
console.log(removeDuplicates(arrayWithDuplicates));



//? 19. Bir dizenin tüm elemanlarını sırayla döndüren bir fonksiyon yazınız

let str3 = 'Hello World';

function iterateString(a){
    let array=a.split("")
    let result=array.forEach((b)=>console.log(b))

    return result
}
iterateString(str3);

//*2.yol
function iterateStr(x){

    for(let i=0 ; i<x.length ;i++){
        console.log(x[i])
    }
}
iterateStr(str3);


//? Ortalamanin üstündeki Sayilar listeleyelim.

//* Size bir dizi sayı verildi. Bu sayıların ortalamasını hesaplayın ve ardından sayıları bulun
//* Bu ortalamanın üzerinde olan sayılar. Bu sayıları döndürmek için bir fonksiyon yazın.

function aboveAverageNumbers(a){

    const average=a.reduce((sum,num)=> sum+num )/a.length;
    console.log(average); // 4.428571428571429

    const result=a.filter((num)=> num>=Math.floor(average)); // yuvarlarsak ve 4 esit ve üzeri dersek
    return result;
};
 console.log(aboveAverageNumbers([1, 2, 4, 6, 3, 7, 8]));  // [4,6, 7, 8]

