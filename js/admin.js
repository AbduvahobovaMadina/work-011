const admin = document.querySelector(".admin")


// protect route
let token = localStorage.getItem("x-auth-token")

function checkToken(){
    if(!token){
        window.location.replace("/pages/login.html")

    }

}
checkToken()

function handleLogout(){
    localStorage.removeItem("x-auth-token")
    open("./pages/login.html", "_self")
}


function adminInfoRender(){
    let userData = JSON.parse(localStorage.getItem("user"))
    console.log(userData);
    admin.innerHTML = `
    <img src="${userData.image}" alt="">
        <h3>${userData.firstName}</h3>
    `
}
adminInfoRender()