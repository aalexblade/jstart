// 1. Function declaration

// function seyHi() {
//     console.log("Hello");


// seyHi();

// =======================================
// 2. Function expression

// const seyHi = function () {
//     console.log("Hello");
// };

// console.log(seyHi);
// seyHi();
// seyHi();
// seyHi();
// seyHi();
// seyHi();
// seyHi();

// ======================================
// 3. Arrow functions
// // =>
// const seyHi = () => {
//     console.log("Hello");
// };

// seyHi();
// seyHi();
// seyHi();
// seyHi();
// seyHi();
// seyHi();

// =========================================
// 4. IEFF
// ()()

// (function () {
//     console.log("Hello");
// })();

// (() => {
//     console.log("Hello");
// })();

// ========================================
// 5. CLB
// function seyHi(sayName) {}

// function sayName() {
//     console.log("Alex");
// }

// ========================================
// 6. Aninumus

// ["Alex", "Bob", "Mike"].forEach((item) => {
//     console.log(item);
// });

// =======================================
// Parameters and Agruments

// function seyHi(userName) {
//     // parameter

//     console.log(`Hello ${userName}`);
// }

// // console.log(userName);

// seyHi("Alex"); // argument
// seyHi(100);
// seyHi([1, 2, 3, 5]);

// const getSum = function (a, b, c) {
//     console.log(a + b + c);
// };

// getSum(10, 5, 2);
// getSum(10, 10, 2);

//=================================================
// Default params

// const seyHi = function (userName = "Alex") {
//     console.log(`Hello ${userName}`);
// };

// seyHi();
// seyHi();
// seyHi();
// seyHi();
// seyHi("Bob");
// seyHi("Mike");

// ====================================
// 4. IEFF with params
// // (function (userName) {
// //     console.log("Hello" + " " + userName);
// // })("Alex");


// // 1. Объявление функции multiply
// function multiply() {
//   // Тело функции
//   console.log("Это лог при вызове функции multiply");
// }

// // 2. Вызовы функции multiply
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'

// // 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550