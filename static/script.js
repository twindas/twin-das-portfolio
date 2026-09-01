/* =====================================================
   TWIN DAS PORTFOLIO
   JavaScript
===================================================== */

/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

