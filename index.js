// const validator = require("validator");

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



fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{
  if (!response.ok){
    thow new Error(response.status);
  }
  return response.json();
})
then.(date=>{

})
.catch(error =>{
  
})