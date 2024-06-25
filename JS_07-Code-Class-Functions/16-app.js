//! decleretion  -asagidan yukaridan cagrilabilir.

islem(10,13);  //10 13

function islem (par1,par2,par3){
    console.log(par1); //3
    console.log(par2);//4
    //console.log(par3);//5

return par1+par2+par3;
};
let add= islem(3,4,5);
console.log(add); //12


//! expression --
const topla1=function (a,b) {
 return a+b;   
};
console.log(topla1(3,5)); //8


//! arrow =>
const topla2=(a,b)=>a+b;
console.log(topla2(3,5)); //8
   
let isim="ashley miller";
console.log(isim[0]); //a 
console.log(isim.length); //13 

//! 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
const toFah=function(C){
    return (C*(9/5))+32;
}
console.log(toFah(50)); //122

//2.yol
const cevir = (c) => (c * 9 / 5) + 32 ;

 console.log(cevir(23)); //73.4


//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
const cevirTers = function (x) {
    let ceviri = " ";
    for (i = x.length - 1; i >= 0; i--) {
      ceviri += x[i];
    }
    return ceviri;
  };
  
  let sonuc = cevirTers("elma");
  console.log(sonuc); //amle


  //*****2.yol**** */
  const string="hello world";

  function reverseString(str){
  
      let newStr="";
  
  for(let i =str.length-1; i>=0; i--){
      newStr+=str[i]}
  return newStr;
  };
  console.log(reverseString(string)); //dlrow olleh


  //**** disaridan alinan yaziyin tersini yazdirin */
//    function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// let devamEt = true;
// while (devamEt) {
//     let orijinalString = prompt("Lutfen birseyler yazin");
//     if (orijinalString !== null && orijinalString !== '') {
//         let tersString = reverseString(orijinalString);
//         console.log("Orijinal String: " + orijinalString);
//         console.log("Ters String: " + tersString);
//     } else {
//         console.log("Bu olmadi, duzgun birseyler yazin");
//     }
//     let tekrar = prompt("Tekrar denemek ister misin? (evet/hayır)");
//     if (tekrar == null || tekrar.toLowerCase() !== 'evet') {
//         devamEt = false;
//     }
// }
// console.log("Hosca kal.");


 //! 3- (PAlindrom ifadeler) Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?
let statement = "ey edip adanada pide ye"

function reverseString (str){
    
    let newStr = "";

    for (let i = str.length-1; i >=0; i--){
        newStr += str[i]       
}
    return newStr;
};
console.log(reverseString(statement)); //  ey edip adanada pide ye

if(statement == reverseString(statement)){
    console.log("palindromdur");       // palindromdur
}else{
    console.log("palindrom değildir");
};


//******2.yol */
const string1="ey edip adanada pide ye"

function isPalindrome(str){
  let ters = "";

  for (let i = str.length - 1; i >= 0; i--) {
    ters += str[i];
  }

//   return ters==str ? "palindromdur" : "palindrom değildir"
return ters==str
  
}
console.log(isPalindrome(string1)); //true
    

//! 4- Bir sayıyı tersine çevirecek bir fonksiyon yazın?
// let sayi = prompt ("bir sayi giriniz")
//   function kontrolEt(deger) {
//     let tersDeger="";
//     for(let i=deger.length-1; i>=0; i--)
//     tersDeger+=deger[i];
//         console.log(tersDeger);
//   }
//     kontrolEt(sayi); 


 //*******2.yol*********************** */
const ters=(num)=>{

    let numStr=num.toString();

let reserne="";

for (let i = numStr.length - 1; i >= 0; i--) {
    reserne += numStr[i];
  }
return parseInt(reserne);
};
console.log(ters(456)); //654


//******3.yol *****************************/
const ters2=(num)=>{

    let reverse=0;

    while(num!=0){

        reverse=reverse*10;
        reverse+=num%10;

num=Math.trunc(num/10);  //trunc ile virgülden sonrasini sildik 
    };
return reverse;
}
console.log(ters2(4567)); //7654
 
//! 4- Belirli bir sayının pozitif tam bölenlerinin toplamını bulan fonksiyonu yazınız?
function bolen(sayi3){

    let sum = 0;
    
    for(let i = 1; i <= sayi3; i++){
        if (sayi3 % i === 0){
            sum = sum + i;
        };
    };
return sum;
};
console.log(bolen(6)); //12

//****2.yol */
function sumOfDivisors(number) {
let sum=0;
    for (let i = 0; i <= number; i++) {
        if (number%i==0) {
            sum+=i;
        }   
    }
    return sum;
}; 
console.log(sumOfDivisors(12)); //28


//! 5- İlk 2 parametreyi çarpıp 3. parametre üssüne alan fonksiyonu yazınız?

function islem(a,b,c) {
    return (a*b)**c;
}
console.log(islem(3,2,2)); //36
//console.log("2 ve 3'ün çarpımının 2. kuvveti:", carpimSonucu);


//! 6- 100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program
// const reverseNumber = (num) => {
    // let numStr = num.toString();
  
    // let reverse = "";
  
    // for (let i = numStr.length - 1; i >= 0; i--) {
    //   reverse += numStr[i];
    // }
  
   // return    parseInt(reverse)==num ? `${num} sayısı polindromdur`:`${num} sayısı polindrom değildir`;
   //return parseInt(reverse)==num && `${num} sayısı polindromdur`; //farkli yazimi

//   };
  
//   for(let i = 100; i<1000; i++){
  
//      console.log( reverseNumber(i))
//   }


  //! 7-Yarıçapı verilen bir dairenin alan ve çevresini bulan program?
//   const AlanCevre=function(r){
//     let Pi=3.14;
//     console.log(`Alan= ${Pi*r*r}`); //28.259
//     console.log(`Cevre= ${2*Pi*r}`); //18.84
// }
// AlanCevre(3);

 //**2.yol ***** */
// let yariCap = +prompt ("yaricapi giriniz");  //5


// function hesapla(deger) {

//     let alan=Math.PI*deger**2;
//     let cevre=2*Math.PI*deger;
//     return console.log("alan "+alan, "cevre="+cevre);
// }

// hesapla(yariCap); // alan 78.53981633974483 cevre=31.41592653589793


//! 8-  tellFortune adlı bir fonksiyon yazın:
  //!  4 farklı parametre : jobTitle, geoLocation, partner, numKids.
  //!  falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

  let tellFortune=function(jobTitle, geoLocation, partner, numKids){
    console.log(`Gelecekteki mesleğiniz ${jobTitle}'dir. ${geoLocation}'da yaşayacaksınız. ${partner} ile evlenecek ve ${numKids} çocuk sahibi olacaksınız`)
};

tellFortune("webdeveloper", "Almanya", "Gül", 2); //Gelecekteki mesleğiniz webdeveloper'dir. Almanya'da yaşayacaksınız. Gül ile evlenecek ve 2 çocuk sahibi olacaksınız


//! 9- Write a function to calculate compound interest based on the principle amount
  // Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.
//? TR= //! 9- Anapara tutarına göre bileşik faiz hesaplamak için bir fonksiyon yazın
   //? `compoundInt()` işlevi, ana para tutarı, yıllık faiz oranı, yıllık bazda süre ve faizin birim zaman başına bileşikleştirilme sayısı olarak n sağlanan bileşik faiz formülüne dayalı olarak nihai bir tutar döndürür.

   const compoundInt = function (principalAmount, intRate,time,n) {
    
    let result = principalAmount * Math.pow((1 + intRate / n), n * time);
    return result;
  };
  console.log(compoundInt(1000,0.2,1,4).toFixed(2)); //1215.51


  //*********2.yol TR */
  function compountInt(anaPara,faiz,sure,n){

    let a = anaPara * Math.pow((1 + faiz/n) , (sure * n));
    return a;
}
console.log(compountInt(10000,0.1,1,4).toFixed(2)); //11038.13


//!  NOT: farkli aciklamali yolu
// function bileşikFaizHesapla(anaparaUSD, yıllıkFaizOranı, süre, faizHesaplamaSıklığı) {
//     let tutar = anaparaUSD;
//     let adımTutarı = anaparaUSD * (1 + yıllıkFaizOranı / (100 * faizHesaplamaSıklığı));
//     let faizAdımı = 1;
//     let toplamKar = 0;
//     console.log("Anapara: $" + anaparaUSD.toFixed(2));
//     while (faizAdımı <= faizHesaplamaSıklığı * süre) {
//         tutar = adımTutarı;
//         adımTutarı *= (1 + yıllıkFaizOranı / (100 * faizHesaplamaSıklığı));
//         console.log("Dönem " + faizAdımı + ": $" + tutar.toFixed(2));
//         toplamKar += adımTutarı - anaparaUSD;
//         faizAdımı++;
//     }
//     return { sonTutar: "$" + tutar.toFixed(2), toplamKar: "$" + toplamKar.toFixed(2) };
// }
// function tekrarYapmakIstiyorMusun() {
//     const cevap = prompt("Başka bir işlem yapmak istiyor musunuz? (e/h)").toLowerCase();
//     return cevap === 'e';
// }
// do {
//     const anaparaUSD = parseFloat(prompt("Anaparayı Amerikan doları olarak girin:")); // Anapara miktarı (Amerikan doları)
//     const yıllıkFaizOranı = parseFloat(prompt("Yıllık faiz oranını girin (%):")); // Yıllık faiz oranı
//     const süre = parseFloat(prompt("Kaç yıl boyunca tutacaksınız:")); // Zaman (yıl cinsinden)
//     const faizHesaplamaSıklığı = parseFloat(prompt("Faiz hesaplama sıklığını girin (yılda kaç kez):")); // Faiz hesaplama sıklığı
//     if (!isNaN(anaparaUSD) && !isNaN(yıllıkFaizOranı) && !isNaN(süre) && !isNaN(faizHesaplamaSıklığı)) {
//         const sonuclar = bileşikFaizHesapla(anaparaUSD, yıllıkFaizOranı, süre, faizHesaplamaSıklığı);
//         console.log("Bileşik faizden sonra son tutar:", sonuclar.sonTutar);
//         console.log("Toplam kar miktarı:", sonuclar.toplamKar);
//     } else {
//         console.log("Geçerli bir değer girilmedi.");
//     }
// } while (tekrarYapmakIstiyorMusun());
// console.log("İşlem tamamlandı. Programdan çıkılıyor.");

//? ciktisi : 
/*Anapara: $90000.00
16-app.js:298 Dönem 1: $92250.00
16-app.js:298 Dönem 2: $94556.25
16-app.js:298 Dönem 3: $96920.16
16-app.js:298 Dönem 4: $99343.16
16-app.js:315 Bileşik faizden sonra son tutar: $99343.16
16-app.js:316 Toplam kar miktarı: $32646.31
16-app.js:321 İşlem tamamlandı. Programdan çıkılıyor.*/



//! 10- Mükemmel sayıyı bulan fonksiyonu yazınız.
  //? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
  //? 6   = 1, 2, 3, 6 = 12  = 6*2
  //? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;

  function bölenToplam(num) {
    let toplam = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        toplam += i;
      }
    }
    return toplam == 2 * num
      ? `${num} mükemmel bir sayidir`
      : `${num} mükemmel bir sayi degildir`;
  }
  console.log(bölenToplam(28)); // 28 mükemmel bir sayidir


  //*******2yol  */
  function istEsPerfekt(a){
    let sum;
    let sumOfCommonDivisor = function (a) {
        let sum=0;
        let counter = 0;
        for (i = 1; i <= a; i++) {
          if (a % i == 0) {
            sum += i;
          }
        };

        return sum;
      };
      
      if(sumOfCommonDivisor(a)==(2*a)){
        console.log(`${a} mükemmel sayidir.`);
      }else{
        console.log(`${a} mükemmel sayi degildir`);
      };
  };
  istEsPerfekt(6);  //6 mükemmel sayidir.
  istEsPerfekt(28);  //28 mükemmel sayidir.
  istEsPerfekt(15);  //15 mükemmel sayidir.