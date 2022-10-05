// callback функция обратного вызова

// function greet(name) {
//     return `Welcome ${name}.`;
// }
// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet(`Sara`));   //Welcome Sara.
// // Выводим функцию greet в консоль не вызывая её
// console.log(greet)

//========================================================

// Колбэк-функция

// function greet(name) {
//     return `Welcome ${name}.`;
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//     console.log(`Регистрация гостя ${name}.`);
//     callback(name);
// }
// registerGuest("Sara", greet);

//Инлайн колбэки

// function registerGuest(name, callback) {
//     console.log(`Регистрация гостя ${name}.`);
//     callback(name);
// }
// // /// Передаём инлайн функцию greet как колбэк
// // registerGuest('Mango', function greet(name) {
// // //     console.log(`Welcome ${name}.`);
// // // });
// // // // Передаём инлайн функцию notify как колбэк
// // // registerGuest("Sara", function natify(name){
// // //     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);

// // // });

// // //=========================================================
// // // Несколько колбэков

// // function processCall(recipient) {
// //     // Имитируем доступность абонента случайным числом
// //     const isRecipientAvailable = Math.random() > 0.5;

// //     if (!isRecipientAvailable) {
// //         console.log(`Абонент ${recipient} недоступен, оставте сообщение.`);
// //     // Логика активации автоответчика
// //     } else {
// //         console.log(`Соединяем с ${recipient}, ожидайте...`);
// //        // Логика принятия звонка
// //     }
// // };

// // processCall("Sara");


// // Несколько колбэков Рефакторинг

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         onNotAvailable(recipient);
//         return;
//     // Логика активации автоответчика
//     }
//     onAvailable(recipient);
// }
    
//     function takeCall (name) {
//         console.log(`Соединяем с ${name}, ожидайте...`);
//        // Логика принятия звонка
// }

//     function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставте сообщение.`);
//      // Логика активации автоответчика
//     }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//       // Логика записи голограммы
//     }

// processCall("Sara", takeCall, activateAnsweringMachine);
// processCall("Bob", takeCall, leaveHoloMessage);


// ========================================================
// Абстрагирование повторения

// Например, скрипт выполняет какое-то действие определенное
// количество раз.Для этого можно написать цикл for.
// for (let i = 0; i < 10; i += 1){
//     console.log(i);
// };

// Можем ли мы абстрагировать «делать что-то N раз» как функцию?
// - да, напишем функцию, которая вызывает console.log() N раз.

// function repeatLog(n) {
//     for (let i = 0; i <  n; i += 1){
//         console.log(i);
//     }
// }

// repeatLog(5);

// ========================================================
//  Но что, если мы хотим сделать что - то, кроме логирования чисел ?
//  Поскольку «делать что - то» можно представить как функцию,
//  а функции - это просто значения, мы можем передать действие как аргумент.

// function printValue(value) {
//     console.log(value);
// };

// function prettyPrint(value) {
//     console.log('Loggin value: ', value);
// };

// function reapet(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// };
// // Передаем printValue как callback-функцию
// reapet(3, printValue);
// reapet(4, prettyPrint);

// ========================================================

// const fnA = function (msg, callback) {
//     console.log(msg);

//     console.log(callback);
//     callback();
// };

// const fnB = function () {
//     console.log('Эта фуркция при вызове fnB');
// };

// fnA('qweqwe', fnB);

// =====================================

// const fnA = function (msg, callback) {
//     console.log(msg);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Эта фуркция при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

