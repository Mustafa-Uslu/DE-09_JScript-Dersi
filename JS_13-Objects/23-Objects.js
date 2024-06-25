//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır


 //! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-yol   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1=new Object({name:"BMW", engine:1.6, model:2000});
const car2=new Object({name:"Mercedes", engine:2.0, model:2000});


console.log(car1);   ///Object   //{name: 'BMW', engine: 1.6, model: 2000}
console.log(car1.name);  //BMW
console.log(car1.engine);  //1.6
console.log(car1["engine"]); //1.6

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const car3=new Object({});
car3.name="Porsche";
car3.motor=1.6;
console.log(car3); //{name: 'Porsche', motor: 1.6}


//* ---------------------------------------------------------
//* 2-yol   Object Constructor (OOP ile ayrıntılı göreceğiz)
//* ---------------------------------------------------------
function Calisanlar(a,b,c) {  //C nin altinda 3 nokta artik kullanilmayan bir yontem demek
    this.calisanId=a;
    this.calisanName=b;
    this.calisanMaas=c;

//! eğer object constructor kullanacaksak this gerekli, arrow function da this kullanımı sağlıklı olmadığından burada decleration functionu kullandık

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder

console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir
    
}
const kisi1=new Calisanlar(101,"mehmet",8000);
const kisi2=new Calisanlar(102,"rengin",10000);

console.log(kisi1); //Calisanlar {calisanId: 101, calisanName: 'mehmet', calisanMaas: 8000}
console.log(kisi2); //Calisanlar {calisanId: 102, calisanName: 'rengin', calisanMaas: 10000}
 console.log(kisi2.calisanName); //rengin


 //* ---------------------------------------------------------
//* 3yol-   Object Literal (en çok kullanılan yol)
//* ---------------------------------------------------------
const person={
    name:"Johny",
    surname:"Deep",
    birth:1970,
    job:"actor",
    hasDriverLicense:true,
    languages:["ingilizce","almanca", "java","next.js"],
    children:{first:"sarah",second:"lucy"}
}

console.log(person);  //{name: 'Johny', surname: 'Deep', birth: 1970, job: 'actor', hasDriverLicense: true, …}
console.log(person.name); //Johny
console.log(person.languages[1]); //almanca
console.log(person.children.first); //sarah

//? REWRITE - Ekleme -Düzenleme yi kalici yapar
person.birth+=5;
console.log(person.birth); //1975

//? yeni property eklemek
person.location="Amerika";
console.log(person);  //{name: 'Johny', surname: 'Deep', birth: 1975, job: 'actor', hasDriverLicense: true,location:"Amerika" …}

//* Örnek
person.languages.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a)); //INGILIZCE / ALMANCA / JAVA / NEXT.JS



//* ---------------------------------------------------------
//*    Objects teki Yöntemler + fonction eklenebilir
//* ---------------------------------------------------------
 
const mensch = {
    name: "Johny",
    surname: "Deep",
    birth: 1970,
    job: "actor",
    hasDriverLicense: true,
    yasHesapla: function () {
      return `${this.name} oyuncusu ${2024 - this.birth} yaşındadır`;
    },
    selamla: () => "merhaba",  //arrow yontemi
  };

  //! NOT: nesnenin içindeki değerleri kullanarak bir fonksiyon yazacaksak this keywordü kullanılmalı, arrow function this i desteklemediği için, ilk fonksiyonda decleration yöntemini tercih ettik

  console.log(mensch);  // {name: 'Johny', surname: 'Deep', birth: 1970, job: 'actor', hasDriverLicense: true, …}
  console.log(mensch.yasHesapla());  //Johny oyuncusu 54 yaşındadır
  console.log(mensch.selamla());  //merhaba


  //***********Objeleri diziye dönüstürdü*************** */
  //? Sadece value lari almak istersek
  console.log(Object.values(mensch)); // objenin value larini bir diziye atiyor. //['Johny', 'Deep', 1970, 'actor', true, ƒ, ƒ]

    //? Sadece key lari almak istersek
    console.log(Object.keys(mensch)); // ['name', 'surname', 'birth', 'job', 'hasDriverLicense', 'yasHesapla', 'selamla']


// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Rengin",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Kemal",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Halil",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    }];

    console.log(people); 
    /*0:{name: 'Mustafa', surname: 'Gertrud', job: 'developer', age: 30}
      1:{name: 'Rengin', surname: 'Müller', job: 'tester', age: 35}
      2:{name: 'Mehmet', surname: 'Rosenberg', job: 'team lead', age: 40}
      3:{name: 'Kemal', surname: 'Gutenberg', job: 'developer', age: 26}
      4:{name: 'Halil', surname: 'Shaffer', job: 'tester', age: 24} */

      //* Örnek1 people dizisindeki job lari gösteriniz
      people.forEach((a)=>console.log(a.name+" "+a.job)); // Mustafa developer / Rengin tester / Mehmet team lead / Kemal developer / Halil tester

      //* Ornek yası 33 ün üstünde olan kişilerin name lerini listele
      people.filter((a)=>a.age>33).forEach((a)=>console.log(a.name)); //Rengin / Mehmet

      //* ornek2 yaşları 1 er arttır ve sonucu yeni bir diziye aktar
      const yeniyas=people.map((kisi)=>kisi.age+1);
      console.log(yeniyas); //[31, 36, 41, 27, 25]

      const yeniyas1=people.map((kisi)=>`${kisi.name} ${kisi.age+1}`);
      console.log(yeniyas1); // ['Mustafa 31', 'Rengin 36', 'Mehmet 41', 'Kemal 27', 'Halil 25']

      console.log(people[0].age); //30  kalici degismemistir

      //* Ornek3 yasları 1 er arttır, sonucu dizide kalıcı değiştir
      console.log(people.map((insan,i,array)=>array[i].age=insan.age+1 )); //[31, 36, 41, 27, 25]
      console.log(people[0].age); //31 kalici degisti

      console.log(people.map((insan)=>insan.age+=1)); //[32, 37, 42, 28, 26]
      console.log(people[0].age); //32  kalici degisti

      //* //* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak job ları olmadan yeni bir object li dizi oluşturalım,keyleri de farklı olsun

      const yeniPeople=people.map((human)=>({
        isim:human.name,
        soyad:human.surname,
        yas:human.age+1
    }));
    console.log(yeniPeople);
    /* 
    0:{isim: 'Mustafa', soyad: 'Gertrud', yas: 33}
    1:{isim: 'Rengin', soyad: 'Müller', yas: 38}
    2:{isim: 'Mehmet', soyad: 'Rosenberg', yas: 43}
    3:{isim: 'Kemal', soyad: 'Gutenberg', yas: 29}
    4:{isim: 'Halil', soyad: 'Shaffer', yas: 27}
    */
    console.log(people);
    /*
    0:{name: 'Mustafa', surname: 'Gertrud', job: 'developer', age: 32}
    1:{name: 'Rengin', surname: 'Müller', job: 'tester', age: 37}
    2:{name: 'Mehmet', surname: 'Rosenberg', job: 'team lead', age: 42}
    3:{name: 'Kemal', surname: 'Gutenberg', job: 'developer', age: 28}
    4:{name: 'Halil', surname: 'Shaffer', job: 'tester', age: 26}
    */

    //* Ornek5 her elemanın name ini büyük harfli yaz, yaslarını 2 kat yap, job larının önüne senior kelimesi ekleyelim ve bunları yeni bir diziye atalım

    const yeniPeople2=people.map((person)=>({
        name:person.name.toUpperCase(),
        surname:person.surname,
        age:person.age*2,
        job:"senior "+person.job,

    }));
    console.log(yeniPeople2);
    /*
    
    0:{name: 'MUSTAFA', surname: 'Gertrud', age: 64, job: 'senior developer'}
    1:{name: 'RENGIN', surname: 'Müller', age: 74, job: 'senior tester'}
    2:{name: 'MEHMET', surname: 'Rosenberg', age: 84, job: 'senior team lead'}
    3:{name: 'KEMAL', surname: 'Gutenberg', age: 56, job: 'senior developer'}
    4:{name: 'HALIL', surname: 'Shaffer', age: 52, job: 'senior tester'}
    */
    console.log(people);
       /*
    0:{name: 'Mustafa', surname: 'Gertrud', job: 'developer', age: 32}
    1:{name: 'Rengin', surname: 'Müller', job: 'tester', age: 37}
    2:{name: 'Mehmet', surname: 'Rosenberg', job: 'team lead', age: 42}
    3:{name: 'Kemal', surname: 'Gutenberg', job: 'developer', age: 28}
    4:{name: 'Halil', surname: 'Shaffer', job: 'tester', age: 26}
    */


    //* ornek6 people dizisine yeni object veri ekleyelim
    people.push({ name: "ipek", surname: "bilir", job: "developer", age: 44 }); 
    console.log(people);
    /*
    0:{name: 'Mustafa', surname: 'Gertrud', job: 'developer', age: 32}
    1:{name: 'Rengin', surname: 'Müller', job: 'tester', age: 37}
    2:{name: 'Mehmet', surname: 'Rosenberg', job: 'team lead', age: 42}
    3:{name: 'Kemal', surname: 'Gutenberg', job: 'developer', age: 28}
    4:{name: 'Halil', surname: 'Shaffer', job: 'tester', age: 26}
    5:{name: 'ipek', surname: 'bilir', job: 'developer', age: 44}
    */

    
    //* ornek7: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın
    const yeni=people.filter((kisi)=>kisi.job=="developer").map((a)=>({
        ad:a.name,
        yas:a.age
    }));
    console.log(yeni); 
    /*
    0:{ad: 'Mustafa', yas: 32}
    1:{ad: 'Kemal', yas: 28}
    2:{ad: 'ipek', yas: 44}
    length:3
    */

    //* Ornek8: ortalama yasi hesaplayiniz.
    const ort=people.reduce((toplam,eleman)=>toplam+eleman.age,0)/people.length;
    console.log(ort); //34.8333



    //?    nested objects -icice object -map, forEach,filter kullanamiyoruz.
    //                    -for, for in kullanilir.

const menschen = {
    person1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    person2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    person3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  };

  //! nested object lerde; FOR - IN kullanılabilir, index sonuçta. Ama for of kullanılamaz , dizilerde verileri almak için itere eden for of object te çalışmaz
//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) kullanamazsınız. sadece klasik for döngüsü ve for in kullanılabilir


  //! FOR IN

  for (let i in menschen) {
    console.log(i); // person1 /person2 / person3

    console.log(menschen[i]); //{name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000',…}  / {name: 'John', surname: 'Sweet', dob: '1990', job: 'tester', salary: '110000',…}   /  {name: 'Steve', surname: 'Job', dob: '2000', job: 'developer', salary: '90000', …}

    //console.log(menschen.i);  //noktali sekilde calismaz

    console.log(menschen[i].name);
    /*
    person1 {name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000',…} Can
    person2 {name: 'John', surname: 'Sweet', dob: '1990', job: 'tester', salary: '110000', …} John
    person3 {name: 'Steve', surname: 'Job', dob: '2000', job: 'developer', salary: '90000', …}Steve
    */

  };

  //! FOR OF

// for (let i of menschen) {
//   console.log(i);  //menschen is not iterable
// }

for (let i of Object.keys(menschen)) {
    console.log(i);  //person1,person2...
  
   console.log(menschen[i]);
  }
  
   console.log(Object.values(menschen));//bütün süslüleri diziye attı
  
  for (let i of Object.values(menschen)) {
    console.log(i);//bütün süslüleri getirdi, value lari.
  
  };

