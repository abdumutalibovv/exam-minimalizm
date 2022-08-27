let navMenu = document.querySelector("#menu")
let navClose = document.querySelector("#close")
let mobile = document.querySelector("#mobileMenu")
let nav = document.querySelector("#nav")


navMenu.addEventListener("click", function(){
    mobile.style.display = "block";
    navClose.style.display = "block"
    navMenu.style.display = "none";
    nav.style.display = "flex"
})

navClose.addEventListener("click", function(){
    mobile.style.display = "none";
    navClose.style.display = "none"
    navMenu.style.display = "block";
})