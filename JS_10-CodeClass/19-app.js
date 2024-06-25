let isimler =["harvey","ashley","fatih","mustafa","kemal"];
let bos=[];

console.log(typeof(isimler[0])); //string
console.log(isimler.length); //5
console.log(Boolean(bos.length)); //false

bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor"); //veri gelmiyor

//for, while , do while , forEach

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]); //isimlerin icindeki isimler gelir.
    
// }


// let sayac = 0;

// while (sayac < isimler.length) {
//     console.log(isimler[sayac]);
//     sayac ++ ;
// };
// console.log(sayac); //5


//isimler.forEach(isim=>console.log(isim));//isimlerin icindeki isimler gelir.


//! 1- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
//let isimler1 =["harvey must kemal isimler"];
//isimler1.forEach(isimler1=>console.log(isimler1.includes("a","e","i","o","ö","u","ü")));
 
//************************************** */
function sesliBul(bul) {
    const sesliHarfler = 'aeiouAEIOU';
    let bulSesHarf = [];
    for (let sesharf of bul) {
        if (sesliHarfler.includes(sesharf)) {
            bulSesHarf.push(sesharf);
        }
    }
    return bulSesHarf;
}
let sonuc = sesliBul("hello world");
console.log(sonuc);  //['e', 'o', 'o']

//* *****Hc cözümü ***************************/

let hello = "hello world" // eoo


function findVowels(str) {
    let vowels = "aeıioöuü";
    let newStr= "";

    for (let i = 0; i < str.length; i++) {
        

        if (vowels.includes(str[i])) {
            newStr += str[i]
        }
    };
    return newStr;
}

console.log(findVowels(hello)); //eoo
console.log(findVowels("yakarsa dünyayi garipler yakar sarkisi")); //aaaüaiaieaaaii

//*****match metoduyla************************** */

let str = "Uzun zaman once uzak bir ulkede";
let sesliHarfler = str.match(/[aeiouAEIOU]/g);  //?halil
console.log(sesliHarfler);  //['U', 'u', 'a', 'a', 'o', 'e', 'u', 'a', 'i', 'u', 'e', 'e']



//! 2- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
let arr = [1,200,30,80,5,4,0]  //200

let maxSayi = (sayilar) => {
    let max = sayilar[0]
    for (let i = 0; i < sayilar.length; i++) {
        if (sayilar[i] > max) {
            max = sayilar[i]
        }
    }
    return max;
}

console.log(maxSayi(arr)); //200

//** 2.yol***************** */

let sayis = [1, 5, 9, 70, 7, 15];
sayis.sort((a,b)=> a-b);     //? Altenatif çözüm
console.log(sayis[sayis.length-1]);  //70


//! 3- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.

let dizi1 = [1, 2, 3, 4, 5, 6, 7 ,8, 9];

function sumOfArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(sumOfArray(dizi1)); // 45

//! 4- bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

let numbers = [1, 2, 3, 4, 5];

function avarageArray(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}
console.log(avarageArray(numbers)); //3


//! 5-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.
let cumle=" Hasret rüzgarlari cok erken esti.";
function newCumle(sentence) {
    const newCumle=cumle.split(" ");
    return newCumle.length

}
console.log(newCumle(cumle)); //6


//! 6- Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.
let sentence = "Javascript harika bir dil"; // "dil bir harika Javascript"

//Cümleyi kelimelerine ayır
let word = sentence.split(" ");

//kelimeleri ters sırayla birleştir
let reversedSentence = word.reverse().join(" ");
console.log(reversedSentence);  //dil bir harika Javascript




//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// let names = [];
// while (true) {
//     let name = prompt('Bir ad girin veya çikmak için "q" yazin:');
//     if (name === 'q') {
//         if (names.length > 0) {
//             let removedName = names.pop();
//             console.log("'" + removedName + "' listeden kaldırıldı.");
//         } else {
//             console.log("Liste boş.");
//         }
//         break;
//     }
//     names.push(name);
// }
// console.log("İsimlerin son listesi");
// console.log(names);

//*******2.yol *************/
// let isimler2 = [];
// while (true) {
//     let isim = prompt("Lutfen bir isim girin veya cikmak icin 'q' tusuna, listeyi gormek icin 'e' tusuna basin:");
//     if (isim === 'e') {
//         console.log("İsimler:", isimler2);
//         continue;
//     }
//     if (isim === 'q') {
//         isimler2.pop();
//         break;
//     }
//     isimler2.push(isim);
// }
// console.log("İsimler:", isimler2);


//*******Hc cözümü *************/
// const names = [];

// while (true) {
//   let name = prompt("Lütfen bir isim giriniz. cikmak icin de `q` basiniz");
//   if (name === "q") {
//     names.pop();
//     break;
//   }
//   names.push(name);
// }
// console.log(names);



//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

//hesapla("harvey",2001) //output: "Harvey 23 yasindadir"

function yasHesabi(isim,dogumTarihi){
    const mevcutYil= new Date().getFullYear();
    const dogumYili = new Date(dogumTarihi).getFullYear();
    const yas = mevcutYil - dogumYili;
    return `${isim}, ${yas} yasindadır`;
    }
    console.log(yasHesabi("Halil",1996)); //Halil, 54 yasindadır

//******2.yol **********************************/

function yasHesapla(isim,dt){
    console.log(`${isim} ${new Date().getFullYear()-dt} yasindadir`  )
};
yasHesapla("ayse",1991);  //ayse 33 yasindadir

//***  Hc cozümü *************************** */
//let ad=prompt("Adinizi Giriniz");
//let yasiniz=prompt("Yasinizi Giriniz");

//? funtion decoration
function hesapla(isim, tarih) {
    let yas=new Date().getFullYear()-tarih;
    return console.log(`${isim} ${yas} yasindadir.`);
}
 hesapla("mustafa",1978); //mustafa 46 yasindadir.

 //?arrow funtion ile
const hesapla1=(isim,tarih)=>{
    let yas=new Date().getFullYear()-tarih;
    return console.log(`${isim} ${yas} yasindadir.`);
}
 hesapla("mustafa",1978);  //mustafa 46 yasindadir.

//*******Arkadaslardan */
// function yasHesapla() {
//     const isim = prompt("Lutfen isminizi girin:");
//     const dogumTarihi = prompt("Lutfen dogum tarihinizi (YYYY-AA-GG formatinda) girin:");
//     const simdikiTarih = new Date();
//     const dogumTarihObjesi = new Date(dogumTarihi);
//     const yas = simdikiTarih.getFullYear() - dogumTarihObjesi.getFullYear();
//     alert(`${isim} sizin yasiniz ${yas} Sevgiyle kalin.`);
// }
// yasHesapla();

/********************* */
// const yasHesaplaArrow = () => {
//     const isim = prompt("Lutfen isminizi girin:");
//     const dogumTarihi = prompt("Lutfen dogum tarihinizi (YYYY-AA-GG formatında) girin:");
//     const simdikiTarih = new Date();
//     const dogumTarihObjesi = new Date(dogumTarihi);
//     const yas = simdikiTarih.getFullYear() - dogumTarihObjesi.getFullYear();
//     alert(`${isim} sizin yasiniz ${yas} Sevgiyle kalin.`);
// }
// yasHesaplaArrow();



//! 9- isimler1 dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

const isimler1 = [
    'Ahmet',
    'mehmet',
    'ismet',
    'SAFFET',
    'Can',
    'Canan',
    'Cavidan',
  ];


  const newA=[];

  for (let i = 0; i < isimler1.length; i++) {
    const element = isimler1[i].toLowerCase();
    newA.push(element);
    
  }
  console.log(newA); //['ahmet', 'mehmet', 'ismet', 'saffet', 'can', 'canan', 'cavidan']


  //! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

  function factorial(n) {

      if (n === 0 || n === 1){
        return 1;
    }else{
        return n* factorial(n-1);  //5*4*3*2*1
    }
  }
  console.log(factorial(5)); //120
  console.log(factorial(10)); //3628800

  //*******Hc cözümü */

  function faktoriyel(num) {
    let result=1;
    for (let i = 1; i <= num; i++) {
        result*=i;
    }
    return result;
  }
  console.log(faktoriyel(3)); //6


  //! 11- kayıp sayıyı bulun?
  
  const sayi = [5,2,6,1,3,7,9,4];
  function kayipSayiBul(sayi) {
      const siraliSayi = sayi.sort((a, b) => a - b);
      for (let i = 0; i < siraliSayi.length - 1; i++) {
          if (siraliSayi[i + 1] - siraliSayi[i] !== 1) {
              return siraliSayi[i] + 1;
          }
      }
      return siraliSayi[siraliSayi.length - 1] + 1;
  }
  console.log("Kayip sayi:", kayipSayiBul(sayi));  //Kayip sayi: 8

  //******Hc cözümü ************ */
  const sal = [5,2,6,1,3,7]   

  const findNumber = (arr) => {
      let total = (arr.length+1)*(arr.length+2) / 2
  
      let arrTotal = sal.reduce((acc,curr,i)=> {
          console.log("akümülatör" ,acc);
          console.log("Curr" ,curr);
          console.log("index" ,i);
          return acc + curr
      });
      
      return total - arrTotal;
  };
  
  console.log("eksik sayı",findNumber(sal));   //eksik sayı 4


  // let dizi2 = [5,2,6,1,3,7];
// dizi2.sort((a,b)=>a-b)
// console.log(dizi2);

// for (let i = 0; i < dizi2.length; i++) {
//   //  [1, 2, 3, 5, 6, 7]
//   if(dizi2[i]!==dizi2[i+1]-1){
//     console.log(dizi2[i]+1);
//     break;
//   }
// }

  //! 12- let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program
let string = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";
let stringNumber = [];
const splitToNumber = (string) => {
  let newString = string.split(",");
  console.log(newString);
  for (let i = 0; i <= newString.length - 1; i++) {
    if (newString[i] === "bir") stringNumber.push(1);
    else if (newString[i] === "iki") stringNumber.push(2);
    else if (newString[i] === "üç") stringNumber.push(3);
    else if (newString[i] === "dört") stringNumber.push(4);
    else if (newString[i] === "beş") stringNumber.push(5);
    else if (newString[i] === "altı") stringNumber.push(6);
    else if (newString[i] === "yedi") stringNumber.push(7);
    else if (newString[i] === "sekiz") stringNumber.push(8);
    else stringNumber[i] = 9;
  }

  return stringNumber.join("");
};
console.log(splitToNumber(string));


//! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir: 
//? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

//? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

//? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

//? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

//? findNemo("I Nemo am") ➞ "I found Nemo at 2!"

function findNemo(sentence) {
    if (sentence.includes("Nemo ")) {
      return "I found Nemo at " + (sentence.split(" ").indexOf("Nemo") + 1) + "!";
    } else {
      return "I can't find Nemo :(";
    }
  }



//! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

function removeDups() {

    // Write your code here
    
    return dedupedArr;
  }
  




//!NOT reduce()  cok kull. bak

 