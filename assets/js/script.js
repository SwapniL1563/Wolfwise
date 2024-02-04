const  btn = document.querySelector(".hamburger")
const  hidebar = document.querySelector(".hidebar")

btn.addEventListener("click", function(){
    hidebar.classList.toggle("show")
})