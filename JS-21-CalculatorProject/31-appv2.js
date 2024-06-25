const num=document.querySelectorAll(".num")
const operator=document.querySelectorAll(".operator")
const previousUst=document.querySelector(".previous-display")
const currentAlt=document.querySelector(".current-display")
const equalEsit=document.querySelector(".equal")
const ac=document.querySelector(".ac")
const percentYuzde=document.querySelector(".percent")
const pmArtiEksi=document.querySelector(".pm")

let altEkranText=""
let ustEkranText=""
let islem=""
let sonuc=null;

//! eşittir kontolü için isequalPress=false
//!operatore basıldımı kontrolü isOperatorPressed=false

num.forEach((number)=>{
    number.onclick=()=>{
    //!    eğer eşittire basıldıysa ve operatore basılmadıysa return yap 
        
    //    altEkranText=number.textContent
    //    currentAlt.textContent=altEkranText
    // yukarıdaki işlem fonksiyonda yapılamsı için bu şekilde kullanıldı
    ekranaHazirlik(number.textContent)
    }

})

//!EKRANA HAZIRLIK İŞLEMLERİ
const ekranaHazirlik=(num)=>{     
 
    //! Eşittire basıldıysa ve 2 .kez operatore basıldıysa altekranı boşalt, eşittir basıldıyı false
    // ? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün
    if (altEkranText==="0" && num !=="0" && num!=="."){        
        altEkranText=num
        updateEkran()
        return;
        
    }
 
    //? kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
    if (altEkranText=="0" && num=="0") return

    //? kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

    if (num==="." && altEkranText.includes(".")) return

    //? kullanıcı 10 haneden sonra girmesin
    // if (altEkranText.length>9) return

    //? kullanıcı 10dan fazla girerse exponential olarak bir gösterim yapsın
    const deger=(altEkranText.length>10) ? altEkranText.length.toExponential() : altEkranText;
    altEkranText=deger;

    //  const deger=(altEkranText.length>10) ? altEkranText="error" : altEkranText
    // altEkranText=deger

    if (altEkranText===".") {altEkranText="0."}

    altEkranText +=num
    updateEkran()

}


  //!EKRANDA GÖSTERME İŞLEMLERİ
const updateEkran=()=>{
    currentAlt.textContent=altEkranText
    if (islem){
          previousUst.textContent=`${ustEkranText} ${islem}`
    }
    else{
        previousUst.textContent=""
    }

}

operator.forEach((op)=>{
    op.onclick=()=>{
        
        if (altEkranText==="") return

        if (altEkranText && ustEkranText) hesapla()
//! eğer alt ekrantext boşsa ve sonuc null ise aşağıdaki işlemi yap
        islem=op.textContent
        // ustEkranText=altEkranText
        ustEkranText=`${sonuc} ${işlem}`
        // altEkranText=""
        updateEkran()
    

        if (altEkranText && (ustEkranText || sonuc !== null) && !isEqualPressed) {
            hesapla();
          } else if (isEqualPressed && !isOperatorPressedAfterEqual) {
            isOperatorPressedAfterEqual = true;
          } else {
            sonuc = parseFloat(altEkranText);
          }
        
    }


})



equalEsit.onclick=()=>{
    hesapla()    
    updateEkran()
    altEkranText=""
}

const hesapla=()=>{
    switch (islem){
        case "+":
            sonuc=Number(ustEkranText) + Number(altEkranText);
        break;
        case "-":
            sonuc=ustEkranText - altEkranText;
        break;
        case "x":
            sonuc=ustEkranText * altEkranText;
        break;
        case "÷":
            sonuc=ustEkranText / altEkranText;
        break;
        case "%":
            sonuc=(ustEkranText /100) *altEkranText;
        break;
        default:
            break;
    }
    altEkranText=sonuc;
    ustEkranText=""
    islem="";

}

ac.onclick=()=>{
    islem=""
    altEkranText=""
    ustEkranText=""
    updateEkran()
}
//* html de class isimlerinde function ise bu kullanilir
// percentYuzde.onclick=()=>{
//     altEkranText= altEkranText/100
//     updateEkran()
// }

pmArtiEksi.onclick=()=>{
    altEkranText=altEkranText*-1
    updateEkran()
}
