// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//!global scope (gökteki yıldızlar gibi herkes görebilir)

let first=5;
let second=12;
let third=456;

console.log(first,second,third);

const scopeFunction =()=>{

    first=8

    //let sayesinde yeni bir değişken oluşturuldu ve dışarıdan erişilemez
    let second=1234;    //! function-scope
    console.log(second);   //1234
 
    let fourth=second+first;

    return fourth;
};
console.log(scopeFunction()); //1242

console.log(first);//8
console.log(second);//12
// console.log(fourth);// süslü icinde kaldi

//************************* */
//!global değişken
let number =11

const fonk=()=>{


    let number=44 //!function scope

    number++
    // console.log(number);

return number
}

console.log(   fonk())//45
console.log(number);//11

//zorlamayla içerideki number ı fonk return ü sayesinde, globaldeki number değişkenine assign ettik
number=fonk();  //global scope taki number ı function scope taki number a eşit hale getirdik 
console.log(number); //45

//******************************** */

//const number=7; //! Identifier 'number' has already been declared  (Yukarda tanimli zaten)


//! Block-scope  {}  if yada for gibi süslüler icin 
{
    number++;

    let x=5;
    let y=x+15;
console.log(y); //20   //! block-scope

}
//console.log(y); //süslü icinde olan süslü icinde kalir.  //! Uncaught ReferenceError: y is not defined at 15-scope.js:68:13
console.log(number); //46


//*? VAR (kullanmayacagiz, karsimiza cikarsa diye)

number2=100;

var number2; //var olarak data type eklenebilir. //! hoisted(number2 hep var gibi oldu)

var result="Hallo";

if (number2==1009) {
    let result="Hi!";//! Block-scope
    console.log(result); // Hi!    

    // var result="naber";  // if ve for süslüleri için var güvensizdir, heryerden erişilebilir 


}else{
    result="Salut";   //! global-scope
    console.log(result); //Salut
};

console.log(result); //naber  //Hallo   //Salut


