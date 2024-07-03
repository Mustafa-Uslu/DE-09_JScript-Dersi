//! figcaption = tag = en alttaki hava durumu yazısı
//! .city-temp = derece
//! .city
//! sup = tag
//! .city-name
//! .city-icon

const input = document.querySelector("input");
const button = document.querySelector("button");
const cities = document.querySelector(".cities");
const form = document.querySelector("form")

// let arrayUsed = [];
let inputValue = "";



button.onclick = (e) => {
    e.preventDefault()

  inputValue = input.value;
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=a17bc3f5ae92ad5fdbaad666100b6f23`;
  console.log(inputValue);
  console.log(apiLink);
  fetch(apiLink)
  .then((resp) => resp.json())
  .then((data) => {
    // arrayUsed = data;
    // console.log(data);
    // console.log(arrayUsed.name);

    ekranaBasma(data);
    form.reset()
  }); 
};



function ekranaBasma(veri) {
  let newLi = document.createElement("li");
  cities.appendChild(newLi);

   console.log(document.querySelectorAll("li").length);

   if(document.querySelectorAll("li").length > 3){
    newLi.innerHTML = ""
   }else{
    newLi.innerHTML += `
    
        <h2 class="city-name" data-name=${veri.name},${veri.sys.country}>
            <span>${veri.name}</span>
            <sup>${veri.sys.country}</sup>
        </h2>
           <div class="city-temp">${Math.round(
             veri.main.temp
           )}<sup>°C</sup></div>
           <figure>
                 <img class="city-icon" src="https://openweathermap.org/img/wn/${
                   veri.weather[0].icon
                 }@2x.png">
                 <figcaption>${veri.weather[0].description}</figcaption>
           </figure>
    `;
   }
  
}
// ekranaBasma();


//* izmir&appid=a17bc3f5ae92ad5fdbaad666100b6f23
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7505dab5feb3ae31834f37ac0f780e40