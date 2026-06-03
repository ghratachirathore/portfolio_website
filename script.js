const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (themeToggle) {
        themeToggle.textContent = "Light Mode";
    }
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";

        }

    });

}

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");

            if (
                filter === "all" ||
                filter === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});