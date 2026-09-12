document.addEventListener("DOMContentLoaded", () => {

    /* PAGE LOADER */

    document.body.classList.add("page-loaded");


    /* PAGE TRANSITIONS */

    const links = document.querySelectorAll("a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            href.endsWith(".html") &&
            !href.startsWith("#")
        ) {

            link.addEventListener("click", (e) => {

                e.preventDefault();

                document.body.classList.remove("page-loaded");

                setTimeout(() => {
                    window.location.href = href;
                }, 450);

            });

        }

    });


    /* HERO MOUSE PARALLAX */

    const hero = document.querySelector(".hero");
    const heroTitle = document.querySelector(".hero h1");

    if (hero && heroTitle && window.innerWidth > 700) {

        hero.addEventListener("mousemove", (e) => {

            const x =
                (e.clientX / window.innerWidth - 0.5) * 14;

            const y =
                (e.clientY / window.innerHeight - 0.5) * 14;

            heroTitle.style.transform =
                `translate(${x}px, ${y}px)`;

        });

        hero.addEventListener("mouseleave", () => {

            heroTitle.style.transform =
                "translate(0, 0)";

        });

    }


    /* BUTTON MAGNETIC EFFECT */

    const buttons = document.querySelectorAll(
        ".magnetic, .hero > a, .button"
    );

    buttons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX - rect.left - rect.width / 2;

            const y =
                e.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.15}px, ${y * 0.15}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translate(0, 0)";

        });

    });


    /* SCROLL REVEAL */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        }, {
            threshold: 0.15
        });


    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* CURRENT YEAR */

    const year =
        document.querySelector("[data-year]");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }

});