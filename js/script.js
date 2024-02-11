document.addEventListener("scroll", e => {
    const navBar = document.querySelector("nav");
    navBar.style.opacity = 0.8;
    if (window.scrollY > 50) {
        // change the background color of the nav bar
        navBar.classList.add("bg-dark");
    } else {
        navBar.classList.remove("bg-dark")
    }
})