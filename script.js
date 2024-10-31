// // const userId = prompt("Genrate Userid:")

// for(let name = 0; name < 100; name++){
//         console.log(`This is Your Userid: ${name}`)
// }


//Simple Fetch

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response  => (response .json())))

.then((data)=>{
   const userName = document.querySelector('#user-name')
   userName.textContent = data.name
    const userEmail = document.querySelector('#user-email')
    userEmail.textContent = data.email
    const userAddress = document.querySelector('#user-address')
    userEmail.textContent = data.address.street
})

// old Fetch


console.log("Thisi sisisisis")