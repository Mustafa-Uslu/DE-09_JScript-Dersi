/* -------------------------------------------------------------------------- */
/*                           JAVASCRIPT DEĞİŞKENLER                           */
/* -------------------------------------------------------------------------- */
// Değişken bir değer tutat ve çağrıldığında o değer işleme girer
// CONST : constant : sabit

//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const degiskenAdi="JavaScript";
console.log(typeof degiskenAdi); //String

const sayi=6;
console.log(typeof sayi); //number

//degiskenAdi="osman" //Assignment to constant variable.
//const ile tanimlanan degiskenler degistirilemez.

const isTrue=true; //degiskeni true olarak tanimladik
const isFalse=false; //degiskeni false olarak tanimladik
console.log(typeof isTrue); //boolean

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil="javascript";
dil="java";
console.log(dil);

let sayi2=34;
console.log(sayi2+7); //34+7=41 yazar

let sayi3="34";
console.log(sayi3+7); //34 string+ 7 yanina conconation yazar : 347

//! bir string ile number toplanırsa aslında toplama yapmaz, onları iki kelime gibi yanyana yazar
console.log(sayi3-4); //cikarma sadece mat.islem oldugundan 34-4=30 yazar


// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi4=67;
sayi2=100;


console.log("************************");

var ilk ="global"

console.log(ilk);

{
console.log(ilk);

ilk="naber"

console.log(ilk);

var ikinci="nasılsın"
}

console.log(ilk);
console.log(ikinci);//var olduğu için süslünün içindeki değişkene süslünün dışından da erişebildim


console.log("*******************");
//!LET SCOPE
let first="osman"
console.log(first);

{

  console.log(first);  

  first="hüseyin"

let second=45
console.log(second);
}

console.log(first);
//  console.log(second);

// block taki elemana dışarıdan erişemeyiz (const ve let için)

console.log("********************");
//! CONST SCOPE

const erste="mustafa"

console.log(erste);

{
    console.log(erste);
    // erste="uslu" değiştirmeye çalışınca hata veriyor

    const zweite="ayca"
    console.log(zweite);
}

console.log(zweite);

// const ve let için scope içinde olan scope (süslü) içinde kalır