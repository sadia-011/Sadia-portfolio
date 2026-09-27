```javascript
document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        alert("Welcome to Sadia's Portfolio!");
    }, 500);

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("mail").value.trim();

            const message = document.getElementById("message").value.trim();

            if (name === "") {
                alert("Please enter your name.");
                document.getElementById("name").focus();
                return;
            }

            if (email === "") {
                alert("Please enter your email.");
                document.getElementById("mail").focus();
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                document.getElementById("mail").focus();
                return;
            }

            if (message === "") {
                alert("Please write a message.");
                document.getElementById("message").focus();
                return;
            }

            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted successfully."
            );

            form.reset();
        });
    }

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const topButton = document.createElement("button");

    topButton.id = "topButton";

    topButton.innerHTML = "↑";

    topButton.title = "Go to top";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }
        });
    });

    const skillBars = document.querySelectorAll(".skill-progress");

    const skillObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const width =
                        getComputedStyle(bar)
                        .getPropertyValue("--skill-width");

                    bar.style.width = width;

                    observer.unobserve(bar);
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    skillBars.forEach(function (bar) {
        skillObserver.observe(bar);
    });

    const projectCards = document.querySelectorAll(".card");

    projectCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const title =
                this.querySelector("h3").textContent;

            alert(
                "You selected the project: " +
                title
            );
        });
    });

    const message = document.getElementById("message");

    if (message) {

        const counter = document.createElement("small");

        counter.style.display = "block";

        counter.style.marginTop = "5px";

        counter.style.color = "rgb(12, 105, 105)";

        message.parentNode.appendChild(counter);

        function updateCounter() {

            const count = message.value.length;

            counter.textContent = "Characters: " + count;
        }

        message.addEventListener(
            "input",
            updateCounter
        );

        updateCounter();
    }

    console.log(
        "Sadia's Portfolio JavaScript loaded successfully."
    );

});
```
