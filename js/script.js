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

const header = document.querySelector(".header");

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


window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      header.classList.add("light");
    } else {
      header.classList.remove("light");
    }
});


const starNav = document.querySelectorAll(".coffee_price");
const starContent = document.querySelectorAll(".coffee__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}