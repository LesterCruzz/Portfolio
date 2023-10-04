const headerNav = document.querySelector(".header__nav");
const toggleBtn = document.querySelector(".toggle__menu");
const closeBtn = document.querySelector(".header__toggle .Ex");
toggleBtn.addEventListener("click", () =>{
    headerNav.classList.toggle("open");
    toggleBtn.classList.toggle("open");
    
});
closeBtn.addEventListener("click", () =>{
closeBtn.classList.remove("open");
});