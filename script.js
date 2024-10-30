// // const userId = prompt("Genrate Userid:")

// for(let name = 0; name < 100; name++){
//         console.log(`This is Your Userid: ${name}`)
// }

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(function(resp){
    console.log(resp)
})
.catch((error)=>(console.log(error)))