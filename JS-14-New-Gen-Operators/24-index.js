console.log("**** NEW GEN OPERATORS *****")



//* =============================================
//!   DESTRUCTURING (OBJECT) -ilk önce yapilan bir durum.
//*   -{istenilen basliklar(Obj key'leri) yazilir} ve log(atanilan isimle cagrilir)          
//* =============================================
const product = {  //heap te tutulur
    id:"12345",
    brand:"Apple",
    type:"smart phone",   
    price:3000,
    
}
const product1 = {  //heap te tutulur
    id:"123456",
    brand:"Samsung",
    type:"Mobile phone",   
    price:5000,
}


//? .notasyonu ile erişim mümkün

console.log(product.type);  //smart phone
let proPrice = product.price
console.log(proPrice); //3000
proPrice += 100                
console.log(proPrice); //3100   //stack ta tutulur yeni gecici veri
console.log(product.price); //3000
// product.price = proPrice
// console.log(product.price)

//? square bracket
console.log(product["brand"]);  //Apple

//? DESTRUCTURING yöntemi
//?DEğişken isimleri objedeki keylerle aynı olmalıdır
let {id, brand,type,price} = product

console.log("ID:",id);      //ID: 12345
console.log("brand:",brand); //brand: Apple
console.log("type:",type);   //type: smart phone
console.log("price:",price);  //price: 3000
price += 500
console.log(price); //3500
console.log(product.price); //3000
// product.price = price
// console.log(product.price)

//? Key'ler isim degisiklikleri : ile yapilir
const {id:pro1Id, price:pro1Price, type:pro1type, brand:pro1Brand } = product1;
console.log(pro1Brand, pro1Id, pro1type, pro1Price); //Samsung 123456 Mobile phone 5000

//? NESTED DESTR
const insanlar = {
    kisi1: {
      kimlikNo: "1234567890",
      adi: "Ahmet",
      soyadi: "Can",
      meslek: "Mimar",
      maas: 30000,
    },
    kisi2: {
      kimlikNo: "44234567890",
      adi: "Canan",
      soyadi: "Can",
      meslek: "Sosyal Gelişim Uzmanı",
      maas: 25000,
    },
  }

  console.log(insanlar.kisi1.meslek); //Mimar
  console.log(insanlar["kisi2"]["meslek"]); //Sosyal Gelişim Uzmanı

  //? Level1 Destr
//   const {kisi1,kisi2}=insanlar;
//   console.log(kisi1);  // {kimlikNo: '1234567890', adi: 'Ahmet', soyadi: 'Can', meslek: 'Mimar', maas: 30000}

 
   //?Level2 DEstr
//    const {adi,kimlikNo,soyadi,meslek,maas} = kisi1;
//    console.log(adi,kimlikNo,soyadi,meslek,maas); // Ahmet 1234567890 Can Mimar 30000
 
   //?iki seviyeli destr
  
const {
    kisi1:{adi,soyadi},
    kisi2:{adi:kisi2Ad, soyadi:kisi2Soyad}
} = insanlar

console.log(kisi2Ad); //Canan



   //* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ];
  console.log("******************");
  
  team.forEach((person) => {
    console.log("Name", person.name);  //Name Josh  /Name John / Name Hazel
    console.log("Surname", person.surname); //Surname Barry / ..
    console.log("Job", person.job);  //Job tester  / ..
    console.log("Age", person.age);  //Age 45 /..
    console.log("******************");
  });
  
  console.log("******************");
  team.forEach((person) => {
    const { name, surname, job, age } = person;
    console.log("Name2", name); //... Name2 Josh
    console.log("Surname2", surname); //... Surname2 Nut
    console.log("Job2", job);  // ... Job2 team lead
    console.log("Age2", age);  //  ... Age2 40
    console.log("******************");
  });
  
  console.log("******************");
  team.forEach(({ name, age, surname, job }) => {
    console.log("Name3", name); // Name3 Josh
    console.log("Surname3", surname); //..
    console.log("Job3", job); // ..
    console.log("Age3", age); // ..
    console.log("******************");
  });
  
  //!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----
  
  const objGoster = function() {
      return{
          name: "Hazel",
          surname: "Nut",
          job: "team lead",
          age: 40,
      }
  }
  
  let {name, surname, job, age} = objGoster()
  console.log(name); // Hazel
  console.log("Age", ++age); // Age 41
  
  //?Fonksiyon Parametresi
  console.log("******************");
  
  const data = {
      id:"123",
      desc:"This is top secret information",
      createdTime: "1980"
  }
  
  const printData = (data) => {
      console.log(`${data.id} - ${data.desc} - ${data.createdTime}`); //123 - This is top secret information - 1980
  }
  
  const printDataDestr = (data) => {
      const {id,desc,createdTime} = data
      console.log(`${id} - ${desc} - ${createdTime}`); //123 - This is top secret information - 1980
  }
  
  const printDataAir = ({id,desc,createdTime}) =>{
      console.log(`${id} - ${desc} - ${createdTime}`); //123 - This is top secret information - 1980
  }
   
  printData(data);
  printDataDestr(data);
  printDataAir(data);
   

//* =============================================
//!   DESTRUCTURING (ARRAY) 
//*  -siralama önemli  -index üzerinden takip gibi
//* =============================================

const people = ["Ali", "Veli", "Harvey", "Ashley"]
let ali = people[0]
console.log(ali); //Ali
const [kisi1, kisi2,, kisi4] = people
console.log(kisi1,kisi2,kisi4); //Ali Veli Ashley



//* ==============================================
//!   REST (...)
//* =============================================
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//? ARRAY

const araclar = ["Kamyon","Tır","Kamyonet","Motosiklet","Minibüs", "Taxi"]

const [arac1,, arac2, arac3, ...binekAraclar] = araclar
console.log(arac3);  //Motosiklet
console.log(arac2,binekAraclar); // Kamyon >(2) ['Minibüs', 'Taxi']

//? Object

const person = {
    ad: "Hazel",
    soyad: "Nut",
    is: "team lead",
    yas: 40,
}

const {ad, yas, ...geriKalan} = person
console.log(geriKalan);  //{soyad: 'Nut', is: 'team lead'}


//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a,b,...kalan) => a+b 
console.log(topla(1,5,7,9,3)); //6

const toplam = (...sayılar) => {
    return sayılar.reduce((a,b)=>a+b)
}

console.log("TOPLAM",toplam(1,5,7,9,3)); // TOPLAM 25

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

 
//* =============================================
//!   SPREAD (...)
//* =============================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar,karaAracları]
console.log(tasitlar);// [Array(4), Array(3)]

const flatTasitlar = [...karaAracları, ...ucanAraclar]
console.log(flatTasitlar); //['araba', 'bisiklet', 'marti', 'helicopter', 'drone', 'ucak', 'fuze']


//? Ornek

const cumle = "Uzun ince bir yoldayım";
const cumleDizisi = [...cumle];
console.log(cumleDizisi); //['U', 'z', 'u', 'n', ' ', 'i', 'n', 'c', 'e', ' ', 'b', 'i', 'r', ' ', 'y', 'o', 'l', 'd', 'a', 'y', 'ı', 'm']

//? Ornek

const numbers = [1, 3, 4, 5];
console.log(Math.max(...numbers)); //5


//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  };

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.
//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.


//! FOR - IN

// for (let s in object) {
     //fonksiyonumuz
// }

for(let s in sahislar){
    console.log(s); // sahis1 /sahis2/ sahis3  
    console.log(sahislar[s]); // {name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000', …} /...
    console.log(sahislar[s].salary); // 140000 / 110000 / 90000
}

//? kullanisli Object methotlari  *********************

console.log(Object.keys(sahislar));     //? objenin key'leri array olarak doner // ['sahis1', 'sahis2', 'sahis3']
console.log(Object.values(sahislar));   //? objenin value'larını array olarak doner  // [{…}, {…}, {…}]
console.log(Object.values(sahislar.sahis2));  //? objenin value'larını array olarak doner // ['John', 'Sweet', '1990', 'tester', '110000', false]
console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner    //[Array(2), Array(2), Array(2)]
console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner  //[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

//! FOR - OF

// for(let x of iterable ) {
// //*   code block to be executed
// }


for (const key of Object.keys(sahislar)) {
    console.log(sahislar[key].salary) //! square
}


console.log("************************")


for(let v of Object.values(sahislar)){
    console.log(v)
    console.log(v.name)
}

