console.log("index.js'den selamlar"); //index.js'den selamlar

// named export yapılmış değişkenleri import yaparken "as" aliası ile isim değiştirerek import edebiliriz
//? default exportlarda istedigimiz isimle import edebiliyoruz.
import by, {
    topla,
    calismaSaati,
    increase as inc, 
    decrease as dec,
    myName,
  } from "./myModules.js";
  
  // import ugurla from "./myModules.js";
  
  console.log(topla(3, 5)); //8
  console.log(calismaSaati); //40
  
  console.log(inc(2)); //7
  console.log(dec(2)); //5
  console.log(myName); //Felix

  //? default exportlarda istediğimiz isimle import edebiliriz
  //ugurla();  //görüsmek üzere JS
  by();  //görüsmek üzere JS

   //! JS DERSI BITTI