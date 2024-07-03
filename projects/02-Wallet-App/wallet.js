let tarih = document.getElementById("date");
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2); // Ayı iki basamaklı yapmak için
    let day = ('0' + today.getDate()).slice(-2); // Günü iki basamaklı yapmak için
 
let formattedDate = `${year}-${month}-${day}`;
    tarih.value = formattedDate;

// 2. yol
// let bugun = new Date();
// let gun = bugun.getDate();
// let ay = bugun.getMonth() + 1;
// let yil = bugun.getFullYear();
// let bugununTarihi = gun + '/' + ay + '/' + yil;
// document.getElementById('tarih').innerText = 'Bugünün Tarihi: ' + bugununTarihi;


let mainArea = document.querySelector(".mainArea");
let miktar = document.getElementById("harcama");
let harcamaSebep = document.getElementById("harcamaSebep");

let harcamaListesi=[];

mainArea.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("test", e );
    const yeniHarcama={
        tarih:tarih.value,
        miktar:miktarInput.value,
        alan:harcamaSebep.value,
        id:new Date().getTime()
    }
    harcamaListesi.push(yeniHarcama);
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));

    console.log(JSON.parse(localStorage.getItem("harcamalar")));
});


//**** */ NOT: Local'e veri yollayip almak 
localStorage.setItem("mustafa", 10);
console.log(localStorage.getItem("mustafa")); //console'de : 10
//************* */


/*
//selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

// Variables

let gelirler = 0; //gelir girişlerini tutacak olan değişken
let harcamaListesi = []; //harcama objelerimizi tutacak olan array

//Hesap tablosu

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")
const kalanTh = document.getElementById("kalanTh")


//harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//harcama tablosu
const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")


//gelir Ekle Formu

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler)
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.innerText = gelirler
    ekleFormu.reset()
    hesaplaVeGuncelle()
})

// Sayfa ilk açıldığında localStorage de bulunan verileri ekrana yazdırır, değişkenlere atama yapar

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    gelirinizTd.innerText = gelirler
    tarihInput.valueAsDate = new Date()
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []

    harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))
    hesaplaVeGuncelle()

})

// Harcama girişlerinin yapılması

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload u engeller

    const yeniHarcama = {
        id: new Date().getTime(),
        // tarih: tarihInput.value,
        tarih: new Date(tarihInput.value).toLocaleDateString(),
        alan: harcamaAlaniInput.value,
        miktar: miktarInput.value

    }

    // console.log(yeniHarcama)
    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()

    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    harcamayiDomaYaz(yeniHarcama)
    hesaplaVeGuncelle()
})

//Harcamayı Dom'a yaz

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
    // const {id, miktar, tarih,alan} = yeniHarcama //destruct the data

    //innerHTML ile

    // harcamaBody.innerHTML += `
    // <tr>
    // <td>${tarih}</td>
    // <td>${alan}</td>
    // <td>${miktar}</td>
    // <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>

    // </tr>
    // `
    //istenmeyen kod çalıştırılabilir.

    // create element yöntemi ile

    const tr = document.createElement("tr"); // tr elementi oluşturur
    // tr elementinin ilk üç td sini oluşturur.
    const appendTd = (content) => {
        const td = document.createElement("td");
        td.textContent = content;
        return td;
    }
    // tr elementinin son td sini oluşturur.
    const createLastTd = () => {
        const td = document.createElement("td");
        const iElement = document.createElement("i");
        iElement.id = id;
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button";
        td.appendChild(iElement);
        return td;
    }

    // td oluşturarak tr ye ekleme

    tr.append(
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        createLastTd()
    )


    harcamaBody.append(tr) // harcamayı sona ekler
    // harcamaBody.prepend(tr) // harcamayı öne ekler



}

const hesaplaVeGuncelle = () => {
    // gelirinizTd.innerText = gelirler //geliri ekrana yaz
    gelirinizTd.innerText = new Intl.NumberFormat().format(gelirler) //geliri ekrana yaz

    //giderler toplamını bul
    const giderler = harcamaListesi.reduce(
        (toplam, harcama) => toplam + Number(harcama.miktar), 0
    )
    giderinizTd.innerText = new Intl.NumberFormat().format(giderler) //gider toplamını ekrana yaz
    kalanTd.innerText = new Intl.NumberFormat().format(gelirler - giderler)

    // Kalan 0 dan küçükse kalan ve miktarı kırmızı yaz
    const borclu = gelirler - giderler < 0;
    // console.log(borclu)

    kalanTd.classList.toggle('text-danger', borclu)
    kalanTh.classList.toggle('text-danger', borclu)
}

harcamaBody.addEventListener("click", (e) => {
    // console.log(e.target)

    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove()
    }
    //silinen harcamanın id sini alır
    const id = e.target.id
    // console.log(id)
    // silinen harcamayı array den çıkarır
    harcamaListesi = harcamaListesi.filter((harcama => harcama.id != id))
    //yeni array i local e update eder
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    //silindikten sonra yeniden hesapla

    hesaplaVeGuncelle()



})

temizleBtn.addEventListener("click", () => {
    if (confirm('Silmek istediğinize emin misiniz?')) {
        harcamaListesi = [] //tüm harcamaları listeden siler
        gelirler = 0 //geliri sıfırlar
        // localStorage.clear() // tüm local storage siler
        localStorage.removeItem('gelirler') // sadece gelirleri siler
        localStorage.removeItem('harcamalar') // sadece gelirleri siler
        harcamaBody.innerHTML = "" // DOM dan harcamaları siler
        hesaplaVeGuncelle() //silindikten sonra yeniden hesapla
    }
})

document.addEventListener("keydown",(e)=>{
    if (e.keyCode === 123) {
        e.preventDefault()
      }
})
*/