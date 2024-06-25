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

// toFixed(x) //* virgülden sonra x adet basamak bırak

const ab=1.3
console.log(Math.trunc(ab));  //1
console.log(Math.floor(ab));  //1
console.log(Math.ceil(ab));  //2
console.log(Math.round(ab)); //1
console.log("************");
const ba=-1.3
console.log(Math.trunc(ba)); //-1
console.log(Math.floor(ba)); //-2
console.log(Math.ceil(ba));  //-1
console.log(Math.round(ba)); //-1

document.write(Math.trunc(ba));  //Browser da görmemizi saglar

//* RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
console.log(Math.random());  //0.36766865612352206
console.log(Math.ceil(Math.random()*20)); //11

const randomSayi=Math.random(); 
console.log(randomSayi); //0.48137526841767064
console.log(randomSayi.toFixed(2)); //0.48   
//! NOT : Nummer consol da mavi olarak görünür. Random olarak yapinca stringe dönüsür. islem yaparken ona göre hareket etmek lazim.

console.log(Math.random().toFixed(4)); //0.0640

//* ARTTIRMA AZALTMA

let a=5
console.log("ilk" , a++); //ilk 5 islem satirinda komutu isleme bir sonraki satirda koyar
console.log("ikinci" , a); //ikinci 6 islem satirinda komutu isleme bir sonraki satirda gördük

let b=a++
console.log(b); // 6
console.log(a); // 7

let c=10
console.log("ilk", ++c); // 11  arttirma komutu önde olunca code okuma sirasina göre hareket ediyor.

let d=++c
console.log(d); // 12
console.log(c); // 12

let e=33
console.log(--e);  //32
console.log(e--);  //32  sonrakı ıslem satırında (alt satırda) 31 olur
console.log(e);  //31  

//! e yı 5 arttır.
// e=e+5
console.log(e+=5); //36

//! e yı 5 le carp
// e=e*5
console.log(e*=5); //180

//! Kisa yollar
// console.log(number = number +i2) 
// console.log(number -= i2) 
// console.log(number *= i2) 
// console.log(number /= i2)
// console.log(number %= i2) 

//? CARPMA VE ÜS ALMA
const PI=3.14;  //degismeyen degerlerde key büyükl harfle yazilir
const r=5;

const alan=PI*r**2;   // =PI*r*r
console.log(alan); //78.5 

//! Math pow (power) bir sayının kuvvetini almak için kullanılır
console.log(PI*Math.pow(r,2));  //78.5   bu tercih edilmiyor. islem süresi arttirdigindan.

//* Math.sqrt : verilen degerlerin karekökünü verir .( 1/2 gibi
console.log(Math.sqrt(144)); //12
console.log(144**(1/2)); //12


//******* MOD ALMA ******* */

const number=456;
console.log("birler", number%10);  //6
console.log("onlar", Math.trunc(number/10)%10);  //5
console.log("yüzler", Math.trunc(number/100));  //4    bu sayi 3 haneli ise bilenen sayi ise ;
console.log("yüzler", Math.trunc(number/100)%10);  //4

//! Kisa yollar
// console.log(number = number +i2) 
// console.log(number -= i2) 
// console.log(number *= i2) 
// console.log(number /= i2)
// console.log(number %= i2) 

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi4=4;

console.log(sayi4==4);//eşitmi  =true
console.log(sayi4===4);//eşitmi type kadar = true
console.log(sayi4=="4"); //true
console.log(sayi4==="4");//false type farkli

console.log(sayi4 !=5);//true 5 e eşit değil demi 

console.log(sayi4 !="4");//false

console.log(sayi4 > 4); //büyükmü false
console.log(sayi4 >= 4); //büyük esetmi true 

 // * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================

//* Boolean = True - False döndürür
//? Number = Matamatiksel degerler
//* String = Yazi-Text olan degerler 

//? TRUE
console.log(Boolean(5)); //true
console.log(Boolean(5.8)); //true
console.log(Boolean(-5.8)); //true
console.log(Boolean([-5,1,2,8])); //true  (dizi =aray icindeki degerler sayi)

//? FALSE (5 ad FALSY deger var)
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false  // bos 
console.log(Boolean("")); //false
console.log(Boolean(undefined)); //false // bulamadim-tanimlanamadi
console.log(Boolean(NaN)); // value farkli (osman+5) anlamsiz degerler

//? VE &&  , veya ||
const v1= false || 0 || 12.6 || false || null
console.log(v1); // 12.6
console.log(Boolean(v1)); // true

const v2=false || 0 || null || undefined || NaN;
console.log(v2); //NaN
console.log(Boolean(v2)); //false

const v3=5 && true && 0 && "";
console.log(v3); //0  ilk gördügünü yansitir
console.log(Boolean(v3)); false

const v4=5 && 12.6 && -7;
console.log(v4);  //-7
console.log(Boolean(v4)); //true
console.log(!v4); //false  Bir degerin degili != tersi olur.  


// * =======================================================
// *                 TİP DÖNÜŞÜMLERİ
// * =======================================================

const para= Number("1000") + Number("900")
console.log(para);  //1900

let aa = 10
let bb = '5'

console.log('Toplama', aa + bb) //105
console.log('Çıkarma', aa - bb) // 5
console.log('Çarpma', aa * bb) // 50
console.log('Bölme', aa / bb) //2

console.log(aa+ Number(bb));//15

console.log(typeof bb); //string

console.log(bb**2); //25 math isleminde toplama haric sorun cikarmiyor.


/*******2.yol */
let ee="123.45";

console.log(parseInt(ee));  //132      //tam kismi alir ve number a dönüstürdü
console.log(parseFloat(ee)); //123.45  //virgüllü kismi alir ve number a dönüstürdü

console.log(ee);    // 123.45


//! .toString() Metodu numberları stringe çevirir
let f=132.45
console.log(f.toString()); //123.45  //sadece bu satirda string e cevirir ve bu satir icin gecerli kalici olarak islem yapmadik.
console.log(typeof f); //number

//* + ile de Number a cevirir
console.log(+f);  // sadece bu satirda gecerlidir.

// * Kalici olarak cevirmek icin
let i=+ee;
console.log(typeof i); //number
console.log(typeof ee); //String

//* .toFixed() noktadan sonra kaç basamak alacağımızı belirtir ,Sayıyı stringe çevirir
let z=0.345678944

console.log(typeof(z.toFixed(2))); //0.35 virgülden sonrasini yuvarlar ve stringe dönüstürür
console.log(typeof(+z.toFixed(2))); //0.35 virgülden sonrasini yuvarlar ve + ile numbera dönüstürür


//!  prompt komutu da toFixed gibi kullanılan sayıyı string yapar.

// const age= prompt("lütfen yaşınızı giriniz") //veri girisinde string olarak alir.
// console.log(typeof age);//string

// const age2 = +prompt("lütfen yaşınızı giriniz"); //+ ile number yapar
// console.log(typeof age2);//number


//* Null Undefined NaN
console.log(typeof null); // object // ne demek istedigimi anlamayinca genel anlamini atadi

let n=null

console.log(Boolean(n)); // false null oldugundan
console.log(null-5); // -5

console.log(null==undefined);  //true
console.log(null===undefined);  //false 

console.log(Number("asdf")); //NaN
console.log(Number("1234")); //1324
console.log(null===null); //true


//! Genel Kültür

console.log(Number ("0x11")); // x=hexa 16 lik taban, 0x 16lik taban oldugunu belirtiyor,  sonuc 1.16*0 + 1.16*1 = 17
console.log(Number ("0b101")); // b=binary 2 lik taban, 0b taban oldugunu belirtiyor,  sonuc 1.2*0 + 0.2*1 + 1.2*2 = 5
console.log(Number ("0o11")); // o=octal 8 lik taban, 0o taban oldugunu belirtiyor,  sonuc 1.8*0 + 1.8*1 = 9


//! Quiz den sorular
console.log("5"+3); //53
console.log(true || false); //true
console.log(4 < 5 && 5 > 3); //true
console.log("7" === 7); //false
// consol.log(15%6); //3
console.log("55" < 56 && 67 === "67" || 253 % 11 && !false); //0
console.log((15*2)/3+8===18||(10%3)**2>=4&& !(5>7)); //true
 
/*
1. 5 > 3 karşılaştırma operatörü kullanılmış. 5 sayısı 3 ten büyük oldugu için cevap true

2. console.log("5" + 3)  string bir ifadeyle + operatörü kullanıldğında her zaman string baskın gelir ve sonuç string olur. + operatörü toplama değil concetanate yapar. O nedenle cevap "53"

9. && operatörü her zaman false arar yani sol taraf false veya falsy bir değer ise çıktı false veya falsy değer olur sağ tarafa hiç bakmaz. || operatörü ise true arar true bulana kadar devam eder bakmaya. === kullanıldığında karşılaştırılan ifadelerin deger ve type yönünden eşit olmaları gerekir. Buradaki örnekte ""55""<56 true evet ama 67 === "67" ifadesi false çıktısı verir. Elimizde false || 253%11 && !false kaldı. 253%11 den de 0 gelir. 0 ifadesi de her zaman falsy bir değerdir. O nedenle çıktı olarak 0 i verir. Elimizde artık false || 0 kaldı. || operatörü her zaman true aradığı için son gördüğü false veya falsy değeri döner o nedenle cevap 0. Bir de işlem önceliğinde sıra her zaman ! > && > || şeklindedir.
*/

