const headerNav = document.querySelector(".header__nav");
const toggleBtn = document.querySelector(".toggle__menu");

const closeBtn = document.querySelector(".header__toggle .Ex img");

const servicesImg = document.querySelector(".services__image");
const services_img = document.querySelector(".services__image2");
const services__img = document.querySelector(".services__image3");
const servD = document.querySelector(".serv__d");
const box = document.querySelector(".box");

const serv_D = document.querySelector(".serv__d2");
const bo_x = document.querySelector(".box2");

const serv__D = document.querySelector(".serv__d3");
const bo__x = document.querySelector(".box3");

toggleBtn.addEventListener("click", () =>{
    headerNav.classList.toggle("open");
    toggleBtn.classList.toggle("open"); 
});
closeBtn.addEventListener("click", () =>{
closeBtn.classList.remove("open");
headerNav.classList.remove("open");
});
services_img.addEventListener("mouseover", () =>{
    services_img.classList.toggle("open");
    serv_D.classList.toggle("open");
});
services__img.addEventListener("mouseover", () =>{
    services__img.classList.toggle("open");
    serv__D.classList.toggle("open");
});
bo_x.addEventListener("mouseleave", () =>{
    services_img.classList.remove("open");
     serv_D.classList.remove("open");
 });
bo__x.addEventListener("mouseleave", () =>{
    services__img.classList.remove("open");
     serv__D.classList.remove("open");
 });

servicesImg.addEventListener("mouseover", () =>{
    servicesImg.classList.toggle("open");
    servD.classList.toggle("open");
});
box.addEventListener("mouseleave", () =>{
    servicesImg.classList.remove("open");
     servD.classList.remove("open");
 });

//  Services

// const nav = document.querySelectorAll(".nav");
// const navContent = document.querySelectorAll(".s__content");
// nav.forEach((snav) => {
//   snav.addEventListener("click", () => {
//     removeActiveNav();
//     snav.classList.add("active");
//     const activeNav = document.querySelector(`#${nav.id}-content`);
//     removeActiveNav();
//     activeNav.classList.add("active");
//   });
// });

// function removeActiveNav() {
//   nav.forEach((snav) => {
//     snav.classList.remove("active");
//   });
// }

// function removeActiveNav() {
//   navContent.forEach((snav) => {
//     snav.classList.remove("active");
//   });
// }

