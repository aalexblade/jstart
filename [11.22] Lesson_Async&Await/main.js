// function notAsyncFunc(){
//     fetch('http://localhost:3000/userkey').then(responce => responce.json())
//         .then(data => {
//             console.log('FIRST FETCH ->',data)
//             fetch(`http://localhost:3000/${data.user_key}`)
//                 .then(responce => responce.json())
//                 .then(data => {
//                     console.log('SECOND FETCH ->', data)
//                     fetch(`http://localhost:3000/${data.path}`).then(responce => responce.json())
//                         .then(data => console.log('THIRD FETCH',data))
//                 })
//         })
// }
// notAsyncFunc()
// async function AsyncFunc(){
    // const data = await fetch('http://localhost:3000/userkey').then(response => response.json())
    // console.log('FIRST ASYNC FETCH -> ', data)
    // const pathResponse = await fetch(`http://localhost:3000/${data.user_key}`)
    // const data2 = await pathResponse.json()
    // console.log('SECOND ASYNC FETCH -> ', data2)
    // const news = await fetch(`http://localhost:3000/${data2.path}`)
    // const result = await news.json()
    // console.log('THIRD ASYNC FETCH -> ', result)
    // console.log(result)
// }
// AsyncFunc()