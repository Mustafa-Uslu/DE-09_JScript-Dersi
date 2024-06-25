//! Döngüler ile event listener tanımlanabilir. Az sayıda element var ise sorun 
//! olmaz ama çok fazla element var ise bu kaynak tüketimini arttırır.
// const minusbtn = document.querySelectorAll(".fa-minus")
// const plusbtn = document.querySelectorAll(".fa-plus")

// // console.log(minusbtn)

// minusbtn.forEach((minus)=>{
//     minus.addEventListener("click", ()=>{
//         console.log('-')
//     })
// })

// plusbtn.forEach((plus)=>{
//     plus.addEventListener("click", ()=>{
//         console.log('+')
//     })
// })

//! Constant  //3000 üstü nakliyesiz politikasi degisiklik olursa veya vergide degisiklik olursa, buradan düzenlersek yeterli olacaktir.
const FREE_SHIPPING_LIMIT = 3000;
const SHIPPING_PRICE = 25.99;
const TAX_RATE = 0.18;


//? Selectors
const deleteAllBtn=document.querySelector(".delete-div .fa-trash-can")
const products=document.querySelector("article.products");
//console.log(products);

function deleteUrun(){
    products.textContent="No Product"; 
    products.classList.add("no-product");      //Elemente class ekledik
   // console.log(products.classList);
   //document.querySelector(".delete-div").sytle.display="none"  //html de ekrandan sildik yani gizledik
    document.querySelector(".delete-div").remove()  //Gizler ve Html den cikarir yani tamamen sildik
    totalPrice();
}

//console.log(deleteAllBtn);

//? Event Listeners
deleteAllBtn.addEventListener("click",()=>{

    if (confirm("Are you sure? Eminmisin?")) {
    
    deleteUrun()
}
});

products.addEventListener("click",(e)=>{
   // console.log(e.target.classList)
    // const result = [...e.target.classList]     //includes ile çalışmak için classlist i array e çevirdik
    // console.log(result.includes("fa-trash-can")) 
    // console.log(e.target.classList.includes("fa-trash-can"))
 
    //* Tek bir event listener ile tüm butonlari yakalamak
    // if (e.target.classList.contains("fa-trash-can")) {
    //     alert("Cöpe tikladiniz")
    // }else if (e.target.classList.contains("fa-plus")) {
    //     alert("+ ya tikladiniz")
    // }else if (e.target.classList.contains("fa-minus")) {
    //     alert("- ye tikladiniz")
    // }else{
    //     console.log("Bosluga Tikladiniz");
    // }

    if (e.target.classList.contains("fa-plus")) {
        //? static olarak kullanirsak hangi + butonuna basilirsa basilsin ilk quantity artar.
        //document.getElementById("quantity").textContent++
        e.target.previousElementSibling.textContent++
        calculatePrice(e.target)

    }else if(e.target.classList.contains("fa-minus")){
       
        if(e.target.nextElementSibling.textContent >1){
            e.target.nextElementSibling.textContent--
        }
        calculatePrice(e.target)
        
     }else if(e.target.classList.contains("fa-trash-can")){
         e.target.closest(".product").remove();    //closest: en yakinindaki demek
      totalPrice();

        }
    const trashCan = document.querySelectorAll("article.products .fa-trash-can").length

    if(trashCan <1 ){
        deleteUrun()
    }
    
});


const calculatePrice = (btn) => {
    const discountedPrice = btn.closest(".product-info").querySelector("#discounted-price")
    // console.log(discountedPrice.textContent)
    const productPrice = btn.closest(".buttons-div").querySelector("#product-price")

    const quantity = btn.parentNode.querySelector("#quantity")

    productPrice.textContent = (quantity.textContent * discountedPrice.textContent).toFixed(2);

    totalPrice();
}

const totalPrice = ()=> {
    const prices = document.querySelectorAll("#product-price")
    // prices.forEach((price)=>console.log(price.textContent))
    const total = [...prices].reduce((sum, price) => sum + Number(price.textContent),0 )
    // console.log(total)
    const shippingPrice = total >= FREE_SHIPPING_LIMIT || total === 0 ? 0 : SHIPPING_PRICE 

    const interimPrice = total + shippingPrice
    const tax = interimPrice * TAX_RATE
    const sum = total + tax + shippingPrice


    //! Dom'a sonuçları yazdır
    const selectedPrice = document.querySelector("#selected-price")
    selectedPrice.textContent = total.toFixed(2)

    document.getElementById("shipping").textContent = shippingPrice.toFixed(2)
    document.getElementById("tax").textContent = tax.toFixed(2)
    document.getElementById("total").textContent = sum.toFixed(2)

}

window.addEventListener("load", ()=>{
    totalPrice()
});