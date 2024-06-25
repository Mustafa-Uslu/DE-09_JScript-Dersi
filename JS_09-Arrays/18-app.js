// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. yöntem (Array literal) tercih edilen yöntem

const yaslar=[30,29,45,27,12];
console.log(yaslar); //[30, 29, 45, 27, 12]

//yaslar=[1,2,3] //Assignment to constant variable.

//! 2. yöntem (Array constructor) 

const cars=new Array("BMW","Mercedes","Volvo")
console.log(cars);  //['BMW', 'Mercedes', 'Volvo']

const birth=1979

const isimler=["erkan","ayca", "mustafa", 2024-birth, "kemal", true, yaslar]

console.log(isimler); //['erkan', 'ayca', 'mustafa', 45, 'kemal', true, Array(5)]

console.log(isimler[2]);//mustafa
console.log(isimler[6][1]);// yaslar dizisinin 29 una ulaştık

console.log(--isimler[6][1]); // -- ile bir azalttik 28
console.log(isimler[6][1]); // 28  yani kalici degistirdik.

isimler[5]=false;  //Stringlerde true yu false yaptik.
console.log(isimler[5]); //false


// ?=========================================================
// ?    DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR) Kalici degistirir
// ?=========================================================

//! pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür. Kalici degistirir.

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop(); //sondaki diziyi sildik

console.log(meyveler); //['Elma', 'Erik', 'Armut', 'Muz']

console.log(meyveler.pop()); //Muz =sildigini gösterir.


//! shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

console.log(meyveler.shift()); //Elma = Bastan diziyi siler
console.log(meyveler); //['Erik', 'Armut']


//! push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

//meyveler.push("cilek", "Kavun","Karpuz");
console.log( meyveler.push("çilek","Kavun", "karpuz")); //5 eleman sayisini döndürür.

console.log(meyveler); // ['Erik', 'Armut', 'cilek', 'Kavun', 'Karpuz']


//! unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.unshift("Ayva");  //diziyi Array basina ekledik

console.log(meyveler); // ['Ayva', 'Erik', 'Armut', 'çilek', 'Kavun', 'karpuz']


//! reverse() dizinin tamamını ters çevirir (sadece dizilerde(Array) calisir)

meyveler.reverse();
console.log(meyveler);  //['karpuz', 'Kavun', 'çilek', 'Armut', 'Erik', 'Ayva']

console.log(meyveler[3].split("").reverse());  // ['t', 'u', 'm', 'r', 'A'] 


//! splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

meyveler.splice(2,1,"Ananas");  //1 yazarsam değiştirmiş oluyor= cilegi sildi yerine Ananas geldi
console.log(meyveler);  // ['karpuz', 'Kavun', 'Ananas', 'Armut', 'Erik', 'Ayva']

meyveler.splice(3,0,"çilek");  //0yazarsam belirtilen index e eleman ekler= Armutu saga ittir, yerine Kiraz geldi
console.log(meyveler);  // ['karpuz', 'Kavun', 'Ananas', 'çilek', 'Armut', 'Erik', 'Ayva']

meyveler.splice(4,1); //! 4 index li elemani siler. ekleme yapmazsaniz, eklenecegi belirtmezseniz o diziyi siler.
console.log(meyveler); //['karpuz', 'Kavun', 'Ananas', 'çilek', 'Erik', 'Ayva']



//! sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre) -Kalici degistirir.
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort(); //Ascii Code lara göre siralar ve kalici siralar
console.log(meyveler);  //['Ananas', 'Ayva', 'Erik', 'Kavun', 'karpuz', 'çilek']

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];
number.sort(); //sirala
console.log(number); // [1, 10, 22, 231, 3, 35, 5, 55, 77]

number.sort((a,b)=>a-b);  //2 parametreyi karsilastirarak normal sirala
console.log(number); // [1, 3, 5, 10, 22, 35, 55, 77, 231]

number.sort((a,b)=>b-a); // büyükten kücüge sirala
console.log(number); // [231, 77, 55, 35, 22, 10, 5, 3, 1]


//! Pazartesi Dersi

//? ===========================================================
//!   DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================


 
const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

//! ******includes -iceriyor mu? **********************/

console.log(sayilar1.includes("5"));//false
console.log(sayilar1.includes(5));//true


//! **indexOf(), lastIndexOf()  Baslarda varmi, Sonlarda var mi? ilk buldugunu getirir */
console.log(sayilar1.indexOf("uc"));//4
console.log(sayilar1.indexOf(5));//1
console.log(sayilar1.lastIndexOf(5));//7
console.log(sayilar1.indexOf(5,2));//7  //(2.indexten sonra 5 varmi?)


//? ********** */ Örnek
//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür
//const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

//const sayiString=prompt("Lütfen Bir Sayi Giriniz.");  //sürekli sormasin diye yoruma aldik
// const sayiNumber=Number(sayiString);

// if (sayilar1.includes(sayiString)) {
//     console.log("Aradiginiz sayinin String hali dizide var. Index'i :",sayilar1.indexOf(sayiString));

// }else{
//     console.log("Aradiginiz sayinin String hali yok..");
// }
// if (sayilar1.includes(sayiNumber)) {
//     console.log("Aradiginiz sayinin Number hali dizide var. Index'i :",sayilar1.indexOf(sayiNumber));

// }else{
//     console.log("Aradiginiz sayinin Number hali yok..");
// }


//! * join()  -Array in elemanlarini Stringe dönüstürür.  *****/
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(" ")); // 3 5 2 2 uc 2 bes 5 6
console.log(sayilar1.join("")); //3522uc2bes56
console.log(sayilar1.join("A")); //3A5A2A2AucA2AbesA5A6


const meyveler1 = ["Elma", "Erik", "Armut", "Muz", "Kivi"];
console.log(meyveler1[3].split("").reverse().join("")); //zuM


//! toString()  , ile birlestir
 //? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());  //3,5,2,2,uc,2,bes,5,6


//! slice() -dilimlemek, ayirmak, bastaki indexi dahil, 2.index dahil degil  *****/

const araba=["bmw","mercedes", "audi", "ferrari", "lamborgini"]

console.log(araba.slice(3)); //['ferrari', 'lamborgini']
console.log(araba.slice(1,3)); //['mercedes', 'audi']


//! *****concat - birlestir 2array birlestirir +yazilani ekler **********/
const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"];
const rakamlar=[1,2,3,4,5,6];

console.log(kisiler.concat(rakamlar)); //['özlem', 'esra', 'nihal', 'fatih', 'hüseyin', 1, 2, 3, 4, 5, 6]

const birleşik=kisiler.concat(rakamlar,true,"ayse","gökçe",["fatih", "kemal"],3,[["ayca","mustafa"]])

console.log(birleşik); //['özlem', 'esra', 'nihal', 'fatih', 'hüseyin', 1, 2, 3, 4, 5, 6, true, 'ayse', 'gökçe', 'fatih', 'kemal', 3, Array(2)]

console.log(kisiler+rakamlar); // özlem,esra,nihal,fatih,hüseyin1,2,3,4,5,6


//! every()    -Hepsi/Tüm diziyi gezer ,&& gibi tüm dizi sarta uyarsa varsa:true-false verir
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,34,45,56,89,15];

console.log(yas.every((a)=>a>=18));  //false :1 tane 15 var
console.log(yas.every((a)=>a<90));  //true  :1 tane 15 var
//* 1 tane bile şarta uymayan varsa false döndürür, hepsi şarta uyarsa true döndürür


//! some() -  Tümünü gezer || gibi 1 i sarta uyarsa true döner, yoksa false döner.
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((osman)=>osman>70)); //true
console.log(yas.some((osman)=>osman>90)); //false


