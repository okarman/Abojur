let butter = document.getElementById("menuButter");
let menu = document.querySelector(".menu");

butter.onclick = function () {
    butter.classList.toggle('butter--active');
    menu.classList.toggle('menu--active');
}

