// ÇALIŞMA SORULARI
// SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin
// alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

const alanBulun = function (a, b) {
    return (a * b)/2;
  }; 
  console.log(alanBulun(3, 4)); //6



// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu
// tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak
// sonuçları ana programa döndürmeli gerekmektedir.
const usAl = function (a, b) {
    return a ** b;
  };
  
  const cevreBul = function (a, b) {
    return (a + b) * 2;
  };
  
  const alanBul = function (a, b) {
    return a * b;
  };
  const hesapla = function(secim,s1,s2){
  
  if(secim=="usAlırmısın"){
     console.log( usAl(s1,s2))
  }else if(secim=="cevreBulurmusun"){
     console.log( cevreBul(s1,s2))
  }else if(secim=="alanBulurmusun"){
    console.log(  alanBul(s1,s2))
  };
  };
  hesapla("usAlırmısın",3,5);  //243
  hesapla("cevreBulurmusun",13,15); //56
  hesapla("alanBulurmusun", 2, 4); //8



console.log("******* TW9 / 5.soru********");
const kareAl=(a)=>{
    return  (a**2);
}
   // kareAl(2);
    console.log(kareAl(4));//16


// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını
// hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression
// yöntemi ile yazınız. NOT: Yıl 4'e tam bölünüyorsa VE (100'e tam bölünmüyorsa
// VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

const artikYil=(jahr)=> {
    if (jahr %4 ==0 && jahr %100!=0 || jahr %400==0) {
      console.log(`${jahr} artik yildir. 👍`);
    }else{
      console.log(`${jahr} artik yil degildir.🤦‍♂️`);
    }
}
artikYil(2005); //2005 artik yil degildir.🤦‍♂️
