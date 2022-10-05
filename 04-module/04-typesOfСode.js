// Императивный vs декларативный

// Рассмотрим разницу подходов на примере базовой операции фильтрации
// коллекции.Напишем код перебора и фильтрации массива
// // чисел по какому - то критерию.

// // Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > 3) {
//         filteredNumbers.push(numbers[i]);
//     };
// };
// console.log(filteredNumbers);

// // Метод filter() скрывает в себе логику перебора коллекции и вызывает
// // callback - функцию, которую мы ему передаем для каждого элемента,
// // возвращая массив элементов, подошедших под критерий.

// // Декларативный подход

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers);
