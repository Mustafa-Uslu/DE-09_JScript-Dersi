let buton1=document.getElementById("myButton");
let sonuc=document.getElementById("result");

// console.log(buton1);
// console.log(sonuc);


//! Callback yazim cesitleri

//? 1.yol
// buton1.addEventListener("click",function konsol() {
//    console.log(" button clicked"); 
// }); 


//? 2.yol ( fonsiyon ismi opsiyonel)
// buton1.addEventListener("click",function () {
//     console.log("button1 clicked");
//     sonuc.textContent = "Button 1 cliked";
// });

// buton1.addEventListener("dblclick",function () {
//     console.log("button1 clicked");
//     sonuc.textContent = "Button double cliked";
// });


//? 3.yol disaridan arrow /named fonsiyon cagirma
// const clicked2 = ()=>{sonuc.textContent = "Button 1 cliked"}

// buton1.addEventListener("click", clicked2);  // cagirma parantezleri olmadan yazilacak


//? 4.yol disaridan fonsiyon cagirma

// function clicked(){
//     sonuc.textContent="Button 1 clicked function called from outside";
//     console.log(" Button 1 clicked function called from outside");
// };
// buton1.addEventListener("click", clicked);



//! mouseover mouseout eventleri
 
// let myImg = document.getElementById("myImage")

// myImg.addEventListener("mouseover",()=>{
//     myImg.style.width = "300px";
//     console.log("imaj 300px oldu");  //imaj 300px oldu
// });

// myImg.addEventListener("mouseout",()=>{
//     // myImg.style.width = "100px";
//     myImg.style.display = "none";
//     // console.log("imaj 100px oldu");
// });

// buton1.addEventListener("click",()=>{
//     myImg.style.display = "block";
// });


//? drop down menu

// let secim = document.getElementById("colors");

// secim.addEventListener("change", ()=>{
//    // console.log(`Degisti`);

//    let selectedColor = secim.value
//    // console.log(selectionColor); //degisen rengi yakaladik
//     document.getElementById("selectedColorP").textContent = `Secilen Renk : ${selectedColor}`;
//     document.body.style.backgroundColor = selectedColor;

// });


/*
//? Random backgroun color
//random renk
function getRandomColor() { //floor method ile asagiya yuvarladik.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const buton2 = document.getElementById("colorButton");

const colors = [];
const colorL = document.getElementById("colorList");


buton2.addEventListener("click",()=>{
    const renk = getRandomColor()
    // console.log(renk)
    const colorObject = {color: renk}
    colors.push(colorObject)
    console.log(colors); 
    document.body.style.backgroundColor = renk


//* yeni rengi ekrana listeleme 
const listItem = document.createElement("li");
listItem.style.backgroundColor = renk;
listItem.textContent = renk;
listItem.addEventListener("click",()=>{
    listItem.body.style.backgroundColor = renk
});  //gelen rengi body rengi yaptik

// colorL.appendChild(listItem); //alta ekleyerek devam eder
colorL.prepend(listItem);       //yeni gelen üste ekler

});
*/

//! Telefon örnegi

/*
let resim = document.querySelector(".resim");
let ses1 = document.querySelector(".ses1")
let ses2 = document.querySelector(".ses2")
let ara = document.querySelector(".ara")
let baglat = document.querySelector(".baglat")
let konus = document.querySelector(".konus")
let kapat = document.querySelector(".kapat")


//* Ara Butonu

ara.addEventListener("click", ()=>{
    ses2.play();   //Ses caldirma methodu:
    ses2.volume = 0.1;
});

baglat.addEventListener("click", ()=>{
    ses2.pause();
    ses1.play()
    ses1.volume = 0.1;   //Ses caldirma seviye belirleme methodu:
    resim.src = "./helpers/connect.jpg"
});
konus.addEventListener("click", ()=>{
    ses1.pause();  //Ses durdurma methodu:
    resim.src = "./helpers/call.jpg"
});

kapat.addEventListener("click", ()=>{
    ses1.pause();
    ses2.pause();
    resim.src = "./helpers/images.jpg"
});
*/


//! Input örnegi

let alan = document.getElementById("username");
let buton3 = document.getElementById("login");
let user = document.getElementById("displayUsername");


// yazar yazmak asagiya ekledik
// alan.addEventListener("input",()=>{
//     let username =alan.value
//     user.textContent=`Girdiginiz kullanucu adi : ${username}`
// });

 

//yazilani tiklayinca asagiya ekledik
// buton3.addEventListener("click",()=>{
//     let username=alan.value
//     user.textContent=`Girdiginiz kullanucu adi : ${username}`
//     alan.value=``;
// });


//yazilani sarta baglayarak asagiya ekledik
/*
let usr = 'Mark'
buton3.addEventListener("click", ()=>{
    let username = alan.value

    if (username == usr) {
        user.textContent = `Girdiğiniz kullanıcı adı: ${username}`
        alan.value=''
        
    } else {
        user.textContent = `Girdiğiniz kullanıcı adı yanlış lütfen tekrar deneyin`
    }
});
*/

//memory card oyunlarinda kullanilabilir.

const numbers = document.querySelectorAll('.number') //Array benzeri node list döndürür

// console.log(numbers)


numbers.forEach((number, index)=>{
    number.addEventListener('click', ()=>{
        if (number.textContent === 'X') {
            number.textContent = index + 1
        } else {
            number.textContent = 'X'
        }
    })
});

