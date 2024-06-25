//* https://www.freecodecamp.org/news/javascript-concepts-to-know-before-learning-react/
//Aşağıdaki örnekte name özelliğine parantez gösterimini kullanarak, number özelliğine ise nokta gösterimini kullanarak erişiyoruz.
let myObject = {        
    name: "Musab",        
    number: 12,        
    developer: [true, "David", 1]    
}

console.log(myObject["name"]); //Musab
console.log(myObject.number);  //12


//Nesnedeki son değer dışındaki her değerin sonuna her zaman virgül koymalısınız.
let numbers = {
    one: "David",
    two: "George",
    3: "Peter"
}

console.log(numbers.two); //George
//console.log(numbers.3); //Hata aldok nokta koyunca, Nesnedeki son değer dışındaki her değerin sonuna her zaman virgül koymalısınız.
console.log(numbers[3]); //Peter


//* NOT:Çok sayıda dizi yöntemi vardır ancak React'te en çok kullanacağınız yöntemler: map, filter, and reduce methods.

//? map()   //Bu yöntem, bir dizinin öğeleri arasında yinelenir ve dizinin her öğesi için bir işlev çağırır. Bu, her işlev çağrısının sonucunu içeren yeni bir dizi döndürür.
let fruits = ["pawpaw", "orange", "banana"];   

let mappedFruits = fruits.map(item => item + "s");    

console.log(mappedFruits); // ["pawpaws", "oranges", "bananas"]


//? filter()  //Bu yöntem, bir dizinin belirli bir koşulla eşleşen tüm öğelerini döndürür.

let fruits1 = ["pawpaw", "orange", "banana", "grape"];
    
let filteredFruits = fruits1.filter(fruit => fruit.length > 5);

console.log(filteredFruits);  // ["pawpaw", "orange", "banana"]

//? reduce()    //Reduce yöntemi bir dizinin tüm öğelerini yineler ve her yinelemede bir eylem gerçekleştirir. Bu eylemin sonucu, son yinelemeye kadar bir sonraki eylemde kullanılmak üzere bir sonraki yinelemeye taşınır. Daha sonra nihai sonuç döndürülecektir.

let evenNumbers = [2, 4, 6, 8, 10]; 
    
evenNumbers.reduce((sum, current) => sum += current, 0);
//console.log(evenNumbers);
/* 
İki argüman alır:
    -bir fonksiyon ve,
    -işlevin başlayacağı değeri belirten isteğe bağlı bir bağımsız değişken.
*/

//? JS de Functions and Arrow Functions

