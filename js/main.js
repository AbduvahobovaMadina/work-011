const link = document.querySelector(".link")

console.log(link);

function checkLinkStatus(){
    let token = localStorage.getItem("x-auth-token")
    if(token){
        link.textContent = "Admin"
        link.setAttribute("herf", "./pages/admin.html")
    }else{
        link.textContent = "Login"
        link.href = "./pages/login.html"
    }
}
checkLinkStatus()


