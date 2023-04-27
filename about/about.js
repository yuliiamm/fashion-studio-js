/*navbar*/
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*navbar*/

/*copyright*/
let date = new Date();
let year = date.getFullYear();
document.getElementById("copyrightYear").innerHTML = year;
/*copyright*/