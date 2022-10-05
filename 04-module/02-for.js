//Перебор (итеррация) массива

// const fruits = ["Mango", "Kiwi", "Strawberry", "Apple", "Chery"];
// // console.table(fruits);

// // const lastIndex = fruits.length - 1;

// // for (let i = 0; i <= lastIndex; i +=1 ){
// //     fruits[i] += "-1";
// // // }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// console.table(fruits);


//================================================

//  Перебор массива 
// Сделать переменную total
// Кадый элемент приплюсовать к total

// const cart = [54, 23, 2, 125, 10, 45, 50, 77];
// //2 - Сделать переменную total до цикла
// let total = 0;

// // console.log(cart.length);
// //1 - перебор массива
// for (let i = 0; i < cart.length; i +=1) {
//     // console.log(cart[i]);
//     //3 - Кадый элемент приплюсовать к total
//     total += cart[i];
// }

// console.log('Total:', total);


//=========================================================

// //Нади самое длинное слово!

// const findLongestWord = function(str) {
//     let arrStr = str.split(' ');
//     let wordLength = 0;
//     let longestWord;
  
//     for (let i = 0; i < arrStr.length; i += 1) {
//       wordLength = arrStr[1].length;
  
//       if (arrStr[i].length > wordLength) {
//         longestWord = arrStr[i];
  
//         return longestWord;
//       }
  
//     }
//   };
  
//   // Вызовы функции для проверки
//   console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'


//================================================================


