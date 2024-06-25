// Dizi metodları
// pop(): dizinin son elemanını siler
// shift(): dizinin başındaki elamanı siler 
// push(): diziniz sonuna eleman ekler
// unshift() : dizinin başına eleman ekler 
// reverse() : diziyi tersine çevirir 
// splice():(başlangıç indexi, kaç eleman alınacak(silinecek), eklenecek eleman (item1, item2...))
// sort(): sıralama yapar(stringlerde ifadelerde ascii kodlara göre alfabetik sıralama ) 
// sort((a,b)=> a-b )
// includes(deger): içeriyomu (trıe - false)
// indexOf(deger): değerin kaçıncı indexte olduğunu 
// join(" "): bir dizideki elemanları birleştirerek stringe çevirir 
// slice(): diziden bir parçayı almamaızı sağlar 
// concat(): iki diziyi birleştirir
// every: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır.ve call fonksiyondaki şartı sağlıyosa true değer çevirir


// const numbers = [45,16,34,23]
// numbers.every((num)=>num > 18) //false

// some: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır. ve  fonksiyondaki en az bir şartı sağlıyosa true değer çevirir

// const numbers = [45,16,34,23]
// numbers.some((num)=>num > 18) //true

/*-----------------------------------------*/

// map: bir dizi için bir callback fonksiton çalıştırır. vd her eleman için o fonksiyondan çıkan sonucu bir diziye aktarır.
// forEach: bir dizi için bir callback fonksiton çalıştırır. Geriye bir değer döndürmez
// filter: bir dizi için bir callback fonksiton çalıştırır. Verilen koşulu sağlayan bir değer döndürür
// reduce: dizidekii elemanları toplayarak tek bir değere döndürür

/*-----------------------------------------*/

//! 1.Bir dizideki elemanların ortalamasını bulan fonksiyon
const numbers=[34,56,56,87,90];

//* 1.yol
let toplam = 0

const ortalama = () => {
    for (let i = 0; i < numbers.length; i++) 
        toplam += numbers[i]
    return toplam
}
console.log(ortalama()/ numbers.length); //64.6

// 2.yol
const sum = numbers.reduce((a, b) => {
    console.log("a",a)
    console.log("b",b)
   return a + b
});
const result = sum / numbers.length;

console.log(result); //64.6

//* 3.yol
const numbers1 = [34, 56, 56, 87, 90];
function ortalamaBul(dizi) {
  let toplam = 0;
  dizi.forEach(sayi => {
    toplam += sayi;
  });
  const ortalama1 = toplam / dizi.length;
  return ortalama1;
}
const ortalama1 = ortalamaBul(numbers1);
console.log(ortalama1); // 64.6

//! 2- Girilen bir cümledeki kelime sayısını bulan fonksiyon
//sentence="Merhaba Cohort DE-09";

//* 1.yol
const sentence="Merhaba Cohort DE-09";
const kelimeSayisi=(a)=> a.split(" ").length;
console.log(kelimeSayisi(sentence)); //3

//* 2. yol
function contWords(newSentence) {
    // const sumOftheWordsCount = newSentence.split(" ").length
    //Birden fazla boşluk içeriyosa

    const sumLetter = newSentence.split(/\s+/).length; // \s+ arada nekadar bosluk olursa olsun
    return sumLetter
}

console.log(contWords(sentence)); //3


  //! Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir: 
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.

//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"


test: "I like Clarusway"  // Output : I found at Clarusway at 3! 
test : "I like bootcamps " // Output  I can't find Clarusway :(

function findClarusway(sentence) {
        if (sentence.includes("Clarusway")) {
            return `I found Clarusway at ${sentence.split(" ").indexOf("Clarusway")+1}`
        } else {
            return "I can't find Clarusway :("
        }
}

const sentence1 = "I like Clarusway"

console.log(findClarusway(sentence1));  // I found Clarusway at 3

//! Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program 

// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

//* 1. yol
const arr = ["elma", "armut", "kayisi", "elma", "fener", "umut", "alex"];
const newArr = [];

const findSame = function (x) {
  for (let item of arr) {
    if (newArr.includes(item)) continue;
    newArr.push(item);
  }
  console.log(newArr); //['elma', 'armut', 'kayisi', 'fener', 'umut', 'alex']
};
findSame(arr);

//* 2.yol
function removeDuplicated(arr) {
    const duplicatedArray=[]
    for (let i of arr) {
        if (!duplicatedArray.includes(i)) {
            duplicatedArray.push(i);
        }
        return duplicatedArray
    }
   
    
}
 console.log(removeDuplicated([1,0,1,0,1])); // 1
    console.log(removeDuplicated(["elma", "armut", "kayisi", "elma", "fener", "umut", "alex"])); // ['elma']


 //!Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 
const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

//* 1.yol 
function aGrubu(arr) {
    return arr.filter(word=> word.startsWith('A'));
  }
  const result1 = aGrubu(words);
  console.log(result1);  //['Apple', 'Avocado', 'Apricot']


//* 2.yol
//const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

let neuArr = [];
words.filter((a)=>{
    if(a.slice(0,1) == "A"){
        neuArr.push(a)
    }
});
console.log(neuArr); //['Apple', 'Avocado', 'Apricot']

//* 3 yol Hc dan
function filterWords(arr) {
    const newArr=arr.filter((kelime)=>kelime[0]==="A")
    return newArr;
}
console.log(filterWords(words)); // ['Apple', 'Avocado', 'Apricot']


//! bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
//* a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries=[18000,13000,17000,24000,18500,21000,19300];

function zamli(dusuk) {
    const as=salaries.filter((a)=>(a*1.1)<20000);
    return as;
}
console.log(zamli().length); //3

//* Hc cözümü
let belowunder20K=salaries.filter(salary=>salary*1.1<20000).length;
console.log(belowunder20K); //3


//* b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı
const zamli1=salaries.filter((a)=>(a*1.1)<20000);
console.log(zamli1); //[18000, 13000, 17000]

let butce=zamli1.map((a)=>Math.round(20000 - (a  * 1.1))).reduce((a,b)=>a+b,0);
console.log(butce); //7200  

//* 2.yol
const butce1= salaries.filter((b)=> b*1.1 < 20000).map((a)=>Math.round(20000-(a*1.1))).reduce((a,b)=>a+b)

console.log(butce1); //7200

//* Hc'dan
let addBudget = salaries.map((salary) => {
    let increased = salary * 1.1
    return increased < 20000 ? 20000- increased : 0
}).reduce((sum, payment )=> sum + payment, 0)

console.log(addBudget); //7199.999999999998



// EXTRA QUESTIONS

//!1-Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program

let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
let stringNumber=[]

const splitToNumber=(string) => {

   let newString=string.split(",")
   console.log(newString);
   for (let i=0;i<=newString.length-1;i++){
 
    if (newString[i]==="bir") stringNumber.push(1)
    else if (newString[i]==="iki") stringNumber.push(2)
    else if (newString[i]==="üç") stringNumber.push(3)
    else if (newString[i]==="dört") stringNumber.push(4) 
    else if (newString[i]==="beş") stringNumber.push(5)
   else if (newString[i]==="altı")stringNumber.push(6)
   else  if (newString[i]==="yedi") stringNumber.push(7)
   else  if (newString[i]==="sekiz") stringNumber.push(8)
   else stringNumber[i]=9 
   }
   
return stringNumber.join("")
}

console.log(splitToNumber(string));





//!2-Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Asal sayıları filter fonksiyonu ile bulma
  const asalSayilar = numbers3.filter(number => {
    if (number < 2) {
      return false; // 2'den küçük sayılar asal değildir
    }
    
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false; // Tam bölünebilen sayılar asal değildir
      }
    }
    
    return true; // Geriye kalan sayılar asaldır
  });
  
  console.log(asalSayilar);


//!3-Bir diziyi tersine çeviren bir map fonksiyonu oluşturun. 
const originalArray = [1, 2, 3, 4, 5];

// Map fonksiyonu ile diziyi tersine çevirme
const reversedArray = originalArray.map((value, index, array) => array[array.length - 1 - index]);

console.log(reversedArray);


//!4 -verilen sayıyı yazıya çeviren program
function sayiyiYaziyaCevir(sayi) {
    const birler = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    const onlar = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  
    let yazi = "";
  
    // Yüzler basamağı
    if (sayi >= 100) {
        yazi += birler[Math.floor(sayi / 100)] + "yüz";
        sayi %= 100;
    }
  
    // Onlar basamağı
    if (sayi >= 10) {
        yazi += onlar[Math.floor(sayi / 10)];
        sayi %= 10;
    }
  
    // Birler basamağı
    if (sayi > 0) {
        yazi += birler[sayi];
    }
  
    return yazi;
  }
  
  // Örnek kullanım
  let sayi = 354;
  let yaziKarşılık = sayiyiYaziyaCevir(sayi);
  console.log(yaziKarşılık); // Çıktı: üçyüzelli-dört
