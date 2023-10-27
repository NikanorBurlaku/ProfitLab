
document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    var menuList = document.querySelector(".menu__list");
    var navBtn = document.querySelector(".nav__button");

    burger.addEventListener("click", function () {
        menuList.classList.toggle("active");
        burger.classList.toggle("active");
        navBtn.classList.toggle("active");
    });
});