// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

//! Örnek1
//yazdir() //invoke yada call islemi (Fonksiyonu cagirma)

//? fonksiyonu tanimlanmasi

function yazdir() {
    console.log("ee daha daha nasilsiniz");
}
yazdir();


//! örnek2 Parametreli fonksiyon
function adYazdir(a,b,c) {
    console.log(a,b,c);
}
adYazdir("ayse", "mustafa","ayca");   //ayse mustafa ayca
adYazdir("kemal", "fatih","erkan","halil"); // kemal fatih erkan    //yer ayirmadigimiz icin halil görünmez


//! örnek3 Parametreli, dönüs degerli (return)
function yasHesapla(isim,tarih) {       //! süslü varsa return sart
    console.log(`Benim adim ${isim} ve ben ${new Date().getFullYear()-tarih} yasindayim`);
return new Date().getFullYear()-tarih;  //! degeri disarda görmek istersek (döndürmek icin) return kullanilir.
}

// alert(yasHesapla("Erkan",1989));

const gokce =yasHesapla("gökce",1988);   //Benim adim gökce ve ben 36 yasindayim
const rengin =yasHesapla("rengin",2000);  //Benim adim rengin ve ben 24 yasindayim
const mehmet =yasHesapla("mehmet",1990);  //Benim adim mehmet ve ben 34 yasindayim

//? yas ortalamasini aliniz?
// alert((gokce+rengin+mehmet)/3); //31.333


//! örnek4 

//tek-cift sorgulamasi
console.log(isEvenOdd(5)); //call invoke (çağrı çağırmak)
console.log(isEvenOdd(16)); //call invoke (çağrı çağırmak)
console.log(isEvenOdd(5210)); //call invoke (çağrı çağırmak)

function isEvenOdd(sayi) {

// const sonuc= sayi%2 ==0 ? "Cifttir" : "Tektir";
// return sonuc;
return sayi%2==0 ? "Cifttir" : "Tektir";
}


//! örnek5  arguments keywordüyle parametre karsilama (icine yazilana argüment)

function sumAll() {
    console.log(arguments);  //Arguments(10) [24, 34, 56, 35, 12, 89, 23, 45, 78, 98, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments[0]);  //24
    console.log(arguments.length); //10

    let sum=0;
    for (let i = 0; i < arguments.length; i++) {  //Asagidaki dizinin uzunlugu boyunca demek.
    }
        sum +=arguments[i]; //arguments keyword mecburi kullandik
  console.log(sum); //494
  return sum;  //disaridan görmek icin return
}
alert(sumAll(24,34,56,35,12,89,23,45,78,98)); //494
 