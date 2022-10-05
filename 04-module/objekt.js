


//  const car = {
//     title: "x5",
//     manufacturer: "BMW",
//     color: "black",
// }

// // console.log(car.color);
// // console.log(car.title);

// car.year = 2022;
// car.engine = "Disel";

// console.log(car);



// Обращение к вложенным свойствам

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
//   const location = user.location;
//   console.log(location); // Объект location
  
//   const country = user.location.country;
//   console.log(country); // 'Jamaica'



// // Добавление свойств

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];
  
//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // 'en'
//   console.log(book.translations); // ['ua', 'ru']


// =========================================================

// Цикл for...in
// Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
//   };



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   for (let key in apartments){
//     console.log(apartments);
//   }
    
      
//   const keys = [];
//   const values = [];
  // Change code below this line
  

// ==================================================================

// Object keys and valies + total

// const likes = {
//     bab: 100,
//     neutral: 50,
//     good: 17,
// };

// // let keys = Object.keys(likes); //arrea of keys
// // console.log(keys.length);

// let values = Object.values(likes);
// console.log(values.length);

// let total = 0;
// for (const i of values) {
//     total += i;
// }
//     console.log ( 'total:', total);

// =======================================================================
// МАССИВ ОБЪЕКТОВ

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// // console.log(colors);

// for (let i of colors) {
//     console.log(i.rgb);
//     console.log(i.rgb);
// }
