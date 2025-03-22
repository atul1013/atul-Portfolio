// Dark Mode Toggle
const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("social-icons-light-mode");
});

// Smooth Scrolling
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});
