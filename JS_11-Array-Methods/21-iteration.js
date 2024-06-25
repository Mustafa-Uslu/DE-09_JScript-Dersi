//* ======================================================
// *           FOREACH METHOD  -dizide-döndürür ve yazdirir- kalici degil
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir. ve Siz extra birsey istemedikce diziyi degistirmez. ve forEach((p,i,price)=>{.....}) parametreli sekilde olunca kalici degistirdik.

//*======================================================

//* örnek1

const prices1=[100,250,50,90];

prices1.forEach((osmanGezsin)=>console.log(osmanGezsin)); //100 /250 /50 /90

console.log(prices1); //[100, 250, 50, 90]  orginal diziyi bozmadi.

let toplam=0;

prices1.forEach((a)=>console.log(toplam+=a)); // 100 /350 /400 /490  tüm basamaklari gösterdi. sadece bu satirda  calisir, forEach sadece yazdirmaya yarar. 

//NOT:
const terminal=prices1.forEach((a)=>(toplam+=a));
console.log(terminal); //undefined  //  forEach sadece yazdirmaya yarar. baska satirda calismaz.


//***************************************ORNEK *********/

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. farklı isim kullanılabilir
// herbir elemanı 2 katıyla çarp ve bütün dizi elemanlarını topla
const prices2 = [100, 250, 50, 90];

let toplam1=0

prices2.forEach((p,i,prices)=>{
toplam1+=p
console.log(`${i+1}. toplam ${toplam1}`);  //1. toplam 100 / 2. toplam 350 / 3. toplam 400 / 4. toplam 490

prices[i]=p*2 
//*şu şekilde diziyi kalıcı olarak değiştirdik
})

console.log(prices2); //[200, 500, 100, 180]
 

//*örnek meyveler dizisindeki elemanların harf sayısı 3 ten büyük olan meyveleri büyük harfe çevir
const meyveler = ["elma", "erik", "muz", "karpuz"];

meyveler.forEach((meyve)=>{
    if(meyve.length>3) {console.log( meyve.toUpperCase())
   
    }else {console.log(meyve);  // ELMA /ERIK /muz /KARPUZ
    } 
});



//* ======================================================
//* !          MAP METHOD  -dizi de sartlari uygular.kalici degil dizide tutar
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez. Kalici degistirmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names=["ayca", "kemal", "mustafa", "ayse" , "fatih", "halil", "umut", "gökçe", "mehmet"];

const yeni=names.map((a)=>a.toLocaleUpperCase());
console.log(yeni); //['AYCA', 'KEMAL', 'MUSTAFA', 'AYSE', 'FATIH', 'HALIL', 'UMUT', 'GÖKÇE', 'MEHMET']

console.log(names); //['ayca', 'kemal', 'mustafa', 'ayse', 'fatih', 'halil', 'umut', 'gökçe', 'mehmet']

names.map((a)=>a.toLocaleUpperCase()).forEach((a)=>console.log(a));  // AYCA / KEMAL / MUSTAFA/ AYSE/ FATIH/ HALIL/ UMUT/ GÖKÇE/ MEHMET

console.log(names); //['ayca', 'kemal', 'mustafa', 'ayse', 'fatih', 'halil', 'umut', 'gökçe', 'mehmet']


//* Her elemanin sadece ilk harfi büyütelim.
const yeni2=names.map((a)=>a.slice(0,1).toLocaleUpperCase() + a.slice(1));
console.log(yeni2);  // ['Ayca', 'Kemal', 'Mustafa', 'Ayse', 'Fatih', 'Halil', 'Umut', 'Gökçe', 'Mehmet']

//************************************ORNEK */
//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.
const fiyatlar = [100, 300, 50, 90];

fiyatlar.map((p,i,array)=>{
    if(p<250){
        array[i]=p*1.5;
    }else{
        array[i]=p*1.2
    }
});
console.log(fiyatlar); // [150, 360, 75, 135]


//?-------------- ÖRNEK ---------------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz
// toFixed(sayı) komutu virgüllü sayılarda kullanılır, aldığı sayı parametrei kadar virgülden sonra eleman bırakır
//! toFixed()= kullandığınız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız)

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 27.5;
const euro = 29.5;

const dolarPrices=tlPrices.map((para)=>+(para/dolar).toFixed(2) )
console.log(dolarPrices);  //[3.64, 5.45, 7.27, 2.91, 1.82]

const euroPrices=tlPrices.map((para)=>Number((para/euro).toFixed(2)))

console.log(euroPrices); //[3.39, 5.08, 6.78, 2.71, 1.69]

 


//* ======================================================
//! *        FILTER METHOD   - dizi yi gez kosulu filtrele
//* ======================================================
//? Örnek: prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices=[200,500,100,180];

const ucuzlar=prices.filter((a)=>a<200);
console.log(ucuzlar);  // [100, 180]

//* dizi disina cikarmak icin forEach;
prices.filter((a)=> a<200).forEach((a)=>console.log(a));  //100 /180


//? Örnek: maasi düsük olanlari  nin maasini 2 katina cikar.
prices.filter((a)=>a<200).map((c)=>c*2).forEach((sonuc)=>console.log(sonuc));  // 200 /360
 
//! Sali Dersi quiz soru
let arr = ["Apple", "Samsung", "Lenovo"]; 
console.log(arr[2]); //Lenovo


 //?????? ornek1
 const text = "Clarusway Online Career IT TraininG School ThankS for time";

 // ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüt

 text.split(" ").map((a)=>a.toUpperCase()).forEach((a)=>console.log(a)); //CLARUSWAY ....


  //!yukarıda array e döndürdüğümüz string cümledeki, T ile başlayan kelimelerin ilk harfini küçült, diğer harflerini normal bırakarak yazdır

  text.split(" ").filter((a)=>a.startsWith("T")).map((a)=>a.slice(0,1).toLowerCase()+a.slice(1)).forEach((a)=>console.log(a));  //traininG / thankS


//? ornek2. n harfiyle biten isimleri tersten yazdırıp yeni bir diziye atın

 const names2 = [
   "ayca",
   "kemal",
   "mustafa",
   "ayse",
   "fatih",
   "halil",
   "erkan",
   "umut",
   "gökçe",
   "mehmet",
   "rengin"
   
 ];
 const newName= names2.filter((a)=>a.endsWith("n")).map((a)=>a.split("").reverse().join(""));
 // yeni dizeye atadik=diziyi.n ile bitenlerle filtre'ledik. map ile dizi'ye dönüstürduk (reverse kull icin). tersine dönüstürdük. Stringe dönüstürdük. (Bu isleme Pipeline denir)
 console.log(newName);  //['nakre', 'nigner']


 //* ======================================================
//!       PIPELINE  ( yukarida da pipeline a örnek yapmis olduk)
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 tl ve 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

 const fiyatlar2 = [100, 250, 50, 90];

 //* 1.yol map+ if ile  (kisa ve hizli)

 const yeniDizi= fiyatlar2.map((a)=>{
    if (a>100) {
       return (a*1.1).toFixed(2);
    }else{
       return (a*1.15).toFixed(2);
    }
 });
 console.log(yeniDizi); //[114.99999999999999, 275, 57.49999999999999, 103.49999999999999]  toFixed(2) ile: ['115.00', '275.00', '57.50', '103.50'] 


 //* 2. yol filtre
 const zengin= fiyatlar2.filter((a)=>a>100).map((a)=>a*1.1);
 const fakir= fiyatlar2.filter((a)=>a<=100).map((a)=>a*1.15);

 console.log(zengin.concat(fakir));  //[275, 114.99999999999999, 57.49999999999999, 103.49999999999999]

 //********  REDUCE()   **********************************************/
 //! intAdresinden örnekler:  https://dev.to/ra1nbow1/5-ways-to-use-the-reduce-method-in-js-1k8h

  //! Dizideki minimum ve maksimum değer
  const array = [-11, 2, 21, 3];
  const max = Math.max(...array); // 21
  const min = Math.min(...array); // -11


//  const array2 = [-11, 2, 21, 3];
const max2 = array.reduce((max, num) => (max > num ? max : num)); // 21
const min2 = array.reduce((min, num) => (min < num ? min : num)); // -11

//!Dizinin benzersiz öğelerinin seçimi
const someArray = [1, 2, 1, 2, -1, 10, 11];
const uniqueArray = someArray.reduce(
  (acc, item) => (acc.includes(item) ? acc : [...acc, item]),
  []
); // [1, 2, -1, 10, 11]

//!Dizinin aynı elemanlarının sayısını belirleme
const count = (array) => {
    return array.reduce(
      (acc, item) => (acc.set(item, (acc.get(item) || 0) + 1), acc),
      new Map()
    );
  };
  const array1 = [1, 2, 1, 2, -1, 0, 0, 10, 10, 6];
  console.log(count(array1)); // Map(6) {1 => 2, 2 => 2, -1 => 1, 0 => 2, 10 => 2, 6 => 1}


  //! GET URL'sindeki parametreleri ayrıştırmanız ve bunları bir nesneye eklemeniz gerekebilir.
const parseQuery = () => {
  const url = new URL("https://ranbow1.xyz?name=hello&title=world");
  const search = url.search;
  let query = {};
  search
    .slice(1)
    .split("&")
    .forEach((item) => {
      const [key, value] = item.split("=");
      query[key] = decodeURIComponent(value);
    });
  return query;
};
// {name: "hello", title: "world"}

//!Ancak azaltma yöntemini kullanarak her şey daha net ve daha öngörülebilir hale gelir:
// const parseQuery2 = () => {
//     const url = new URL("https://ra1nbow.xyz?name=hello&title=world");
//     const search = url.search;
//     return search
//       .replace(/(^?)|(&$)/g, "")
//       .split("&")
//       .reduce((query, item) => {
//         const [key, value] = item.split("=");
//         query[key] = decodeURIComponent(value);
//         return query;
//       }, {});
//   };   // {name: "hello", title: "world"}

//? İşte nasıl çalışıyor:
//! İşte nasıl çalışıyor:
//* URL'den arama parametrelerini alın - https://ra1nbow.xyz ? isim=merhaba&başlık=dünya
//const search = url.search;  // ?name=hello&title=world

//* Gereksiz karakterleri kaldırın
// search.replace(/(^?)|(&$)/g, "");
//?name=hello&title=world => name=hello&title=world

//Parametreleri bir nesneye toplamak için azaltmayı kullanırız

//*************************************************************************** */


//* Hc dersten===================================================
//*               REDUCE tek bir eleman döndürür
//*    reduce(accumulator, currentValue); //sonuc, eleman1
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)

const salaries = [3000, 5000, 4000, 6000, 7500];

//  console.log( salaries.reduce((toplam,eleman)=>toplam + eleman,0))
// alttaki kodu yukarıdaki gibi görür ve toplam değişkenine 0 ı assign eder, yazmamıza gerek yok

const sonuc=salaries.reduce((toplam,eleman)=>toplam + eleman);  
console.log(sonuc);//25500
//! forEach metodu dizilerde kullanılabilir, reduce tek bir eleman döndürdüğü için, burada forEach kullanamayız

console.log(salaries.reduce((acc,current)=>acc*current));  //2700000000000000000



//* örnek : Kayip sayi yi bulun.
//* alttaki 1 den 7 ye kadar olan sayıların bulunduğu bir dizi verilmiş ancak bir eleman unutulmuş, unutulan elemanı bulunuz.

const nummern=[5 ,1 ,4 ,7 ,2 ,3 ];

let total=((nummern.length+1)*(nummern.length+2))/2;

const diziToplam= nummern.reduce((acc,curr)=>acc+curr)
console.log(total-diziToplam); //6  (unuttuğum değer)

