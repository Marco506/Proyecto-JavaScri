

const btnLogin = document.getElementById("btnLogin")
const btnRegister = document.getElementById("btnRegister")
 

let usuarios = []


btnLogin.addEventListener("click",function () {
    

    const userName = document.getElementById("username")

    let usuario = userName.value;
    
    localStorage.setItem("username", usuario)


    userName.value = ''
})

localStorage.getItem('username')
