// const validator = require("validator");

// const { groupBy } = require("lodash");

// const { reject } = require("lodash")

// const { reject } = require("lodash");

// const { set } = require("lodash");

// const { update } = require("lodash");

// const { join } = require("lodash");

// const validateEmail = email => {
//   return validator.isEmail(email);
// };
 
// console.log(
//   "Is mango@mail.com a valid email?: ",
//   validateEmail("mango@mail.com")
// );

// console.log(
//   "Is Mangozedog.com a valid email?: ",
//   validateEmail("Mangozedog.com")
// );

// const message = 'NodeJs in amazing';
// console.log(message)



// const teamMeetingDate = new Date('March 16, 2030');
// console.log(teamMeetingDate)

// const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00')
// console.log(preciseTeamMeetingDate)

// Change value of isSuccess variable to call resolve or reject
// Change value of isSuccess variable to call resolve or reject
// Change value of isSuccess variable to call resolve or reject


// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return {
//       success: false,
//       message: "Guest name must not be empty",
//     };
//   }

//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting();

// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }



// fetch("https://jsonplaceholder.typicode.com/users");
// .then(reponse =>{

// })
// .then(data=>{

// })
// .catch(error =>{

// })



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//   if (!response.ok){
//     thow new Error(response.status);
//   }
//   return response.json();
// })
// then.(date=>{

// })
// .catch(error =>{
  
// })

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }

// let globalVariable; // undefined

// // Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     console.log("users inside then callback: ", users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log("globalVariable inside fetch callback: ", globalVariable);
//   });

// // No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined



// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"


// const headers = {
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// };

// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: {
//     Accept: "application/json",
//   },
// }).then(response => {
//   // ...
// });

// const fetchPostsBtn = document.querySelector(".btn");
// const userList = document.querySelector(".posts");

// fetchPostsBtn.addEventListener("click", () => {
//   fetchPosts()
//     .then((posts) => renderPosts(posts))
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: 2,
//     // Change the group number here
//     _page: 5
//   });

//   return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }


// const fetchPostsBtn = document.querySelector(".btn");
// const userList = document.querySelector(".posts");
// const alertPopup = document.querySelector(".alert");
// let isAlertVisible = false;

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 5;
// // In our case total number of pages is calculated on frontend
// const totalPages = 100 / limit;

// fetchPostsBtn.addEventListener("click", () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return toggleAlertPopup();
//   }

//   fetchPosts()
//     .then((posts) => {
//       renderPosts(posts);
//       // Increase the group number
//       page += 1;

//       // Replace button text after first request
//       if (page > 1) {
//         fetchPostsBtn.textContent = "Fetch more posts";
//       }
//     })
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page
//   });

//   return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

// function toggleAlertPopup() {
//   if (isAlertVisible) {
//     return;
//   }
//   isAlertVisible = true;
//   alertPopup.classList.add("is-visible");
//   setTimeout(() => {
//     alertPopup.classList.remove("is-visible");
//     isAlertVisible = false;
//   }, 3000);
// }

const getEl = x => document.querySelector(x)
let counter =1

function getData(){
  fetch(`https://rickandmortyapi.com/api/character?page=${counter}`)
  .then(response => response.json())
  .then(date => {
    const markup = date.results.map(item =>`
    <li class="item">
    <img src= ${item.image} alt="">
    <p>NAME: ${item.neme}</p>
    <p>gender: ${item.gender}</p>
    <p>status: ${item.status}</p>
    <p>Created: ${item.created}</p>
    <p>ID: ${item.id}</p>
  </li>
  `).join('')
  getEl('.itemList').insertAdjacentHTML('beforeend', markup)
  counter +=1
  })
 
}
getData()

// безкінечний  scroll

// window.addEventListener('scroll',() => {
//   const {scrollHeight, scrollTop, clientHeight} = document.documentElement
//   if(scrollHeight - clientHeight === scrollTop){
//     getData()
//   }
// })

// добавити сторінку для кнопки LOAD MORE
getEl('button').addEventListener('click', getData)