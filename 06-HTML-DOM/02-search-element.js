// Поиск элементов
// Итак, мы уже знаем что DOM - элемент - это объект со свойствами и методами.
// Самое время научиться быстро находить элемент по произвольному
// CSS - селектору.Группа методов elem.querySelector * это современный
// стандарт для поиска элементов.Они позволяют найти элемент или группу элементов
// по CSS - селектору любой сложности.

// element.querySelector(selector);

// Используется если необходимо найти только один, чаще всего уникальный элемент.

// - Возвращает первый найденный элемент внутри element, соответствующий
// CSS - селектору selector.
// - Если ничего не найдено, вернет null.
    
// element.querySelectorAll(selector);

// Используется если необходимо найти коллекцию элементов, то есть получить
// массив ссылок на элементы с одинаковым селектором.Например, все элементы
// списка с классом menu - item.

// Возвращает псевдомассив всех элементов внутри element, удовлетворяющих
// CSS - селектору selector.
// Если ничего не найдено, вернет пустой массив.
// Открой этот пример в отдельном окне и посмотри логи в консоли разработчика.

// html
/* <ul id="menu" class="menu">
  <li class="menu-item">home</li>
  <li class="menu-item">about</li>
  <li class="menu-item">gallery</li>
  <li>blog</li>
</ul> */

// js

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);