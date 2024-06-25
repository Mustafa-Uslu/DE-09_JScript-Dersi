//const number7=document.querySelector(".number-7");
//console.log(number7);

const num=document.querySelectorAll(".num");
console.log(num); //NodeList dizi seklinde listeliyor

const operator=document.querySelectorAll(".operator");
const previousUst=document.querySelector(".previous-display");
const currentAlt=document.querySelector(".current-display");
const equalEsit=document.querySelector(".equal");
const ac=document.querySelector(".ac");
const percentYuzde=document.querySelector(".percent");
const pmArtiEksi=document.querySelector(".pm");

//* Variables
let altEkranText="";
let ustEkranText="";
let islem="";

num.forEach((number)=>{
    number.onclick=()=>{
        //altEkranText=number.textContent;
        //current.textContent=altEkranText;
        //yukaridaki islem fonksiyonda yapilmasi icin bu sekilde kullanildi.
        ekranaHazirlik(number.textContent)
    }
});

//! EKRANA HAZIRLIK ISLEMLERI
const ekranaHazirlik=(num)=>{

    
    //? kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
    // İlk başta 0 girildiğinde, ardından tekrar 0 girilmesini engelle
   if (altEkranText==="0" && num!=="0" && num!==".") {
       altEkranText=num;
       updateEkran();
       return;
   };

    // ? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün.
    if (altEkranText=="0" && num=="0"){
         return;
    };


    //? kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin
    // Herhangi bir yerde . varken, tekrar . girilmesini engelle
    if (num==="." && altEkranText.includes(".")) {
        return;
    };

    //? kullanici 10haneden sonra girmesin.
   // if (altEkranText.length>=10) return  //altta detayli olani

    //? kullanici 10haneden fayla girerse exponential olarak bir gösterim yapsin.
    const deger= (altEkranText.length>10) ? altEkranText.length.toExponential(): altEkranText;
    altEkranText=deger;
    
    // const deger= (altEkranText.length>10) ? altEkranText="error": altEkranText;
    // altEkranText=deger;

    //. basinca 0 otomatik ciksin
   if (altEkranText=== ".") {altEkranText="0."}

   /* Halil bey if yolu  (num yerine altekran yazilmali sanirim) */
//    if (altEkranText === "." && altEkranText === "") {
//             altEkranText = "0.";
//         } else {
//             altEkranText += num;
//         }
    
   
    altEkranText +=num
    updateEkran()
};


 

//! EKRANA GÖSTERME ISLEMLERI
const updateEkran=()=>{
    currentAlt.textContent=altEkranText;
    if (islem) {
        previousUst.textContent=`${ustEkranText} ${islem}`;
        
    }else{
        previousUst.textContent="";
    }

};
operator.forEach((op)=>{
    op.onclick=()=>{
        if (altEkranText==="") {
            return
        }
        if (altEkranText && ustEkranText) {
            hesapla() 
        }
        islem=op.textContent;
        ustEkranText=altEkranText;
        altEkranText="";
        updateEkran();
    }
});

equalEsit.onclick=()=>{
    hesapla();
    updateEkran();
    altEkranText="";
}

const hesapla=()=>{
    switch (islem) {
        case "+":
          sonuc=Number(ustEkranText) + Number(altEkranText); //String olarak yanyana eklemesin diye Number olarak bildirdik.
            break;
        case "-":
            sonuc= ustEkranText - altEkranText;
            break;
        case "÷":
            sonuc= ustEkranText / altEkranText;
            break;
        case "x":
            sonuc= ustEkranText * altEkranText;
            break;
        case "%":
            sonuc= (ustEkranText/100)*altEkranText;
            break;  
        default:
            break;
    }
    altEkranText=sonuc;
    ustEkranText="";
    islem="";
};

ac.onclick=()=>{
    islem="";
    altEkranText="";
    ustEkranText="";
    updateEkran()
};

//* html de class isimlerinde function ise bu kullanilir
// percentYuzde.onclick=()=>{
//   altEkranText=altEkranText/100;
//   updateEkran();
// };

pmArtiEksi.onclick=()=>{
    altEkranText=altEkranText*-1;
    updateEkran();
};