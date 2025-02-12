let menuIcon = document.querySelector(".menu-icon");
let mainNav = document.querySelector("#main-nav");
let resNav = document.querySelector("#res-nav");

let flag = false;

menuIcon.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    resNav.classList.toggle("active");

    if (flag) {
        menuIcon.innerHTML = `<i class='ri-menu-line'></i>`;
    } else {
        menuIcon.innerHTML = `<i class='ri-close-large-fill'></i>`;
    }

    flag = !flag; // Toggle flag
});
