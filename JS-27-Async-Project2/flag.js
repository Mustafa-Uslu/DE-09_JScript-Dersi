


const getCountry=async()=>{

 const res= await fetch("https://restcountries.com/v3.1/all")
const data= await  res.json()

// console.log(data);
printScreen(data)

}
getCountry()



const printScreen=(countries)=>{
const devletlerDiv= document.querySelector("article")

countries.forEach((a)=>{
devletlerDiv.innerHTML+=`
<div>${a.name.common} </div>

`



})




}

