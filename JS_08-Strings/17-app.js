// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//!1-Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";

console.log(str2 + str3, typeof (str2 + str3));  //helloall the world string

//!2- constructor ile tanımlanan String non-primitive (ilkel olmayan)

const str4 = new String("yeni bir String"); //new diyerek Object olusturduk ve Bas harf büyük
console.log(typeof str4); // object

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods


// *=========================================================
// *         concat() immutable=değiştirmez--> Birlestirir
// *=========================================================

const s1="clarusway"
const s2="hello"

console.log(s1.concat(s2));  // claruswayhello (sadece bu satirda birlesir.)
console.log(s1);  //clarusway

const s3 = s1.concat(s2); 
console.log(s3); //claruswayhello  (yeni bir (s3) degiskene atarsak degisir. )

//! orjinal değerler değişmez, assign ile kalıcı hale getirebiliriz

// *=========================================================
//!   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName="Ipek Bilir"

console.log(myName.toLowerCase());  //ipek bilir
console.log(myName.toUpperCase());  //IPEK BILIR

console.log(myName.toLocaleUpperCase("tr")); //IPEK BİLİR

const esitMi=(a,b)=>a==b.toLocaleUpperCase("tr") ? "eşittir" :"eşit değildir";

 console.log(  esitMi("İSMET", "ismet")); //eşittir

 //! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

 // *=========================================================
//!    charAt()  -karekter bul-index ile calisir, 
//*              -verilen index tekini getirir 
// *=========================================================

const s4 = "primitive \n  veri tiplerinin \nproperty ya \nda methodu olmaz.";

console.log(s4);
console.log(`primitive 
veri tiplerinin
property ya 
da methodu olmaz.`);

console.log(s4.charAt(5));//t
console.log(s4.charAt(12));// " "
console.log(s4.charAt(s4.length-1));// .

// *=========================================================
//!    includes()- case sensitive (büyük küçük harfe duyarlı)
//*              - iceriyor mu? varmi?
// *=========================================================

const kelime = "to be or not to be, that is The questions.";
const kelime2 = "to be or4 not to be, that is The questions.";

console.log(kelime.includes("to be"));//true
console.log(kelime.includes("TO BE"));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true

console.log(kelime.includes(" "));//true
console.log(kelime.includes("to be",14));//false 14. index itibariyle to be yok

console.log(kelime2.includes(4) ? "evet rakam var": "rakam yok"); // evet rakam var

// *=========================================================
//!    search()  (REGEX)  - Arama yapar, index döndürür
// *=========================================================

const kelime3 = "to, be or not to be, 5 that is The questions.";

console.log(kelime3.search(/[A-Z]/));//index döndürür 31
console.log(kelime3.search(/[a-z]/));// 0
console.log(kelime3.search(/[0-9]/));// 21
console.log(kelime3.search(/[0-9a-zA-Z]/));//ilk bulduğu küçük harf o yüzden  0 döndürdü
console.log(kelime3.search(/[^0-9a-zA-Z]/));//2 (, ü dödürdü)

//cümledeki büyük harfi bul onu küçült
console.log(kelime3.charAt(kelime3.search(/[A-Z]/)).toLowerCase()); //t  (Karekter ara/(index bul).kücült)


//* ----------------------------------------------------------
//!    startsWith(),       endsWith()       -- case sensitive  
//*- Bununla Basliyormu? , Bununla Bitiyormu?
//* ----------------------------------------------------------

const cumle = "Salına salına  sinsice olurum sana!";

console.log(cumle.startsWith("sa"));//false
console.log(cumle.startsWith("Sa"));//true
console.log(cumle.endsWith("!"));  //true
console.log(cumle.startsWith("sa",7));//true 7 index itibariyle sa ile başlar
console.log(cumle.endsWith("salına",13));//true 13 dahil değil 13. index e kadar olan kısım salına ile bitiyor

//* ----------------------------------------------------------
//!  replace(searchFor, replaceWith) --immutable (değiştirmez)
//*   degistirir("Aranan","Yerine KonacakOlan")
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma";

console.log(oku.replace("saf olma", "akıllı ol")); //Oku Johny gibi akıllı ol saf olma saf olma

// oku=oku.replace("saf olma", "akıllı ol");
// console.log(oku);


//?replaceAll  --Tum icerikte gecenleri degistirir
console.log(oku.replaceAll("saf olma", "zeki ol")); //Oku Johny gibi zeki ol zeki ol zeki ol

//? *2.yol  replaceAll kisa yolu (g-hepsi ,i-Büyük harfe duyarsiz ol)
console.log(oku.replace(/Saf olma/gi, "zengin ol")); // Oku Johny gibi zengin ol zengin ol zengin ol

console.log(oku.replace(/SAF/i, "fakir")); //Oku Johny gibi fakir olma saf olma saf olma
console.log(oku.replace(/saf/g, "fakir")); //Oku Johny gibi fakir olma fakir olma fakir olma

//g=global. tüm denk gelenleri değiştir
// /SAF/i;  (i=incase sensitive) yazımı büyük küçük harfe duyarsız ara demek

//* ----------------------------------------------------------
//!   slice(beginIndex, endIndex)      -kes sil/AL (dahil,Haric)   terstende(-) yapar,-bastan sayarken 0dan baslar, tersten sayarken 1den baslar, 
//*  substring(beginIndex, endIndex)    
//* ----------------------------------------------------------

const veysel = "UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(10));//BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE

console.log(veysel.slice(10,21));//BİR YOLDAYI
console.log(veysel.substring(10,21));//BİR YOLDAYI

console.log(veysel.slice(-10));//UNDUZ GECE
console.log(veysel.slice(-10,-6));//UNDU -6 dahil değil
//!substring de - index çalışmaz


//* ----------------------------------------------------------
//! split= string i diziye çevirir () belirtileni silerek yapar.)
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalım";

console.log(tarkan.split());//tek elemanlı bir diziye çevirir         //['Gel gündüzle gece olalım']
console.log(tarkan.split(" "));//boşluklardan ayırarak dizi oluşturur //['Gel', 'gündüzle', 'gece', 'olalım']
console.log(tarkan.split("e"));// e leri sil e lerden ayırarak dizi yap  //['G', 'l gündüzl', ' g', 'c', ' olalım']
console.log(tarkan.split(""));//hiçliklerden ayırarak tüm harfleri ayrı eleman yaptı  //['G', 'e', 'l', ' ', 'g', 'ü', 'n', 'd', 'ü', 'z', 'l', 'e', ' ', 'g', 'e', 'c', 'e', ' ', 'o', 'l', 'a', 'l', 'ı', 'm']
console.log(tarkan.split("e",3)); //oluşan dizinin ilk 3 elemanını getir  // ['G', 'l gündüzl', ' g']


//* ----------------------------------------------------------
//!  trim();= Traslamak . Bastan ve sondan Bosluklari siler
//* ----------------------------------------------------------

const ramazan = "     Hos geldin ya Sehr i Ramazan      ";

console.log(ramazan); //     Hos geldin ya Sehr i Ramazan    -
console.log(ramazan.trim()); //Hos geldin ya Sehr i Ramazan
console.log(ramazan.trim().endsWith("n")); //true


//* -------------------
//*chaning --degistirme

let abc="      Clarusway Full Stack";
abc=abc.trim().slice(0,9).toUpperCase();  //Stringi/trasla/KesAl/Büyüt dedik

console.log(abc); //CLARUSWAY

