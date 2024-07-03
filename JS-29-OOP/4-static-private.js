//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //!private değişken tanımlaması
  #id;

  //!static değişken tanımlaması
  static counter = 0;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#id = 44;
    this.getTitle = function () {
      return this.title;
    };

    Book.counter++
    // Book.id++ bu satır çalışmaz
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
  //? Bu tip metotlara getter metot denilir.
  //! getter metotlari class icerisinde tanimlanmalidir.

  getId() {
    return this.#id;
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
  //? Bu tip metotlara setter metot denilir.
  //! setter metotlar class icerisinde tanimlanmalidir.

  setId(id){
    this.#id=id
  }
}




const book1=new Book("simyaci", "poelho coelgo", 1988)
console.log(book1);
console.log(book1.id);//parent izin vermezse undefined

console.log(book1.getId());//parent taki izin veren getId fonk ile private id e erişebildim

console.log(book1.title);

book1.title="suç ve ceza"
console.log(book1.title);
// book1.id=101 //parent izin verirse değiştirebiliriz

book1.setId("111")
console.log(book1.getId());
//Encapsulation edilen verilere getter setter lar aracılığıyla erişilebilir

//!static değişkenlere instance üzerinden erişilemez
//! Static degiskenler classname.property seklinde erisilir.
console.log(Book.counter);
console.log(++Book.counter);










//!ABSTRACT A ÖRNEK

function Kitap (a,b,c){
    //!sadece developer in gördüğü yerde tutulan verile abstract edilmiş olur
let name =a
let yazar=b
let getNoDetails=function(){
return `${name} kitabı ${yazar} a aittir`

}
// this.getDetails=function(){

//     return `book ${name} belongs to author ${yazar}`
// }

this.year=c
}
let person = new Kitap("şeker portakalı", "José Mauro de Vasconcelos",1800);

console.log(person.name);
console.log(person.getNoDetails);
// console.log(person.getDetails());