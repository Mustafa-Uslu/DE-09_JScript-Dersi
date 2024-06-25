// * =======================================================
//! *                     DÖNGÜLER
// * =======================================================

//************************ FOR **** sayi-adet varsa************** 

//? ornek1- ekrana 10 kere merhaba yazdırın
// for (let index = 1; index <=10; index++) {
//     console.log("Merhaba"); // 10 kere Merhaba yazar
//     console.error("Yanlis");
// }


//? ornek2- 1 den n e kadar olan sayilarin toplami
// const N=+prompt("Lütfen bir sayi giriniz");
// let toplam=0;
// for(let number=1; number<=N; number++){
//     toplam=toplam+number;
// } 
// console.log(`${N}` +" Girilen deger Toplami : " + toplam); //10= 55  , 20=210


//? ÖRNEK3: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.
// const N=+prompt("Lütfen bir sayi giriniz");
// let asal=true;
// for(let i=2; i<N; i++){
//     if (N%i ==0) {
//        asal=false;
//     }
// } 
// console.log(asal?"Asaldir" : "Asal degildir");


//? örnek4- 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.

// for (let i = 1; i <=7; i++) {
//     let rastgele=Math.round(Math.random()*100);
//     console.log(rastgele);
// }


//******************* */ WHİLE*****sart varsa***********************
//? ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let N=prompt("Lütfen 1 - 100 arasinda bir sayi giriniz");
 
// while (N<1 || N>100) {
//     console.error("Sayi  1-100 arasinda olmalidir.");

//     N=prompt("Lütfen 1 - 100 arasinda bir sayi giriniz");
 
// } 
// console.log("Tebrikler sayi  1-100 arasinda");


//************* */ DO WHİLE*****islem sonra sart varsa***********************

//? ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz
// let N;
// do {
//     N1=prompt("Lütfen 1 - 100 arasinda bir sayi giriniz");
// } while (N1<1 || N1>100);

// console.log("Tebrikler");

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir



 
//? ORNEK2: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let devamMi;
// do {
// let vize=+prompt("Vize Norunuzu Giriniz");
// let final=+prompt("Final Norunuzu Giriniz");

// let gecmeNotu=vize*0.4+final*0.6 

// console.log(gecmeNotu>50 ? "Tebrikler Mezunsunuz": "Kaldiniz, Kitaplari atmayiniz");

// devamMi=prompt("Devam etmek istiyorsaniz e tusuna basiniz");

// } while (devamMi.toLowerCase()=="e"); // esitse do ya dön dedik.


//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let sayi1;
// do {
//     sayi1=prompt("Lütfen Bir tusa basiniz")

// } while (sayi1!="q");
// console.log("Cikis yaptiniz");


//!! GUESS NUMBER - Sayi tahmin oyunu  ************************
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

 //* NOT:tutulan sayi0-1 arasinda oldugundan,tutulacak sayi ile carpmak lazim, 
//  const rastgele = Math.ceil(Math.random() * 20);

//  console.log(rastgele);
 
//  let hak = 5;
 
//  while (hak > 0) {
//    let guess = prompt("sayı tahmin edinizz");
 
//    if (rastgele == guess) {
//      console.log("tebrikler doğru tahmin ettiniz 👯‍♂️");
 
//      break;
//    } else if (rastgele > guess) {
//      console.log("ARTTIR 📈");
//      hak--;
//      //  hak=hak-1
//    } else {
//      console.log("AZALT 📉");
//      hak--;
   
//    }
//  }
 
//  if (hak == 0) {
//    console.log("5 hakkında da doğru tahmin edemedin");
//  }


//? quiz
let result=0;
for (let i=1; i<=5; i++){
    result*=i;
}
console.log("Result: "+result); //5defa döner sonuc:0