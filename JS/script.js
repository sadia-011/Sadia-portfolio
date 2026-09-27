```javascript
// ==========================================
// STUDENT PORTFOLIO - JAVASCRIPT
// ==========================================

// Wait until the complete HTML document is loaded
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. WELCOME MESSAGE
    // ==========================================

    alert("Welcome to Sadia's Portfolio!");


    // ==========================================
    // 2. SMOOTH SCROLLING FOR NAVIGATION
    // ==========================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ==========================================
    // 3. CONTACT FORM VALIDATION
    // ==========================================

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            // Prevent page refresh
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("mail").value.trim();
            const message = document.getElementById("message").value.trim();


            // --------------------------------------
            // Check Name
            // --------------------------------------

            if (name === "") {

                alert("Please enter your name.");
                document.getElementById("name").focus();

                return;
            }


            // --------------------------------------
            // Check Email
            // --------------------------------------

            if (email === "") {

                alert("Please enter your email.");
                document.getElementById("mail").focus();

                return;
            }


            // --------------------------------------
            // Check Email Format
            // --------------------------------------

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");
                document.getElementById("mail").focus();

                return;
            }


            // --------------------------------------
            // Check Message
            // --------------------------------------

            if (message === "") {

                alert("Please write a message.");
                document.getElementById("message").focus();

                return;
            }


            // --------------------------------------
            // Successful Submission
            // --------------------------------------

            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted successfully."
            );

            // Clear the form
            form.reset();

        });

    }


    // ==========================================
    // 4. PROJECT CARD INTERACTION
    // ==========================================

    const projectCards = document.querySelectorAll(".card");

    projectCards.forEach(function (card) {

        // Mouse enters the card
        card.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.03)";
            this.style.cursor = "pointer";

        });


        // Mouse leaves the card
        card.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });


        // Click project card
        card.addEventListener("click", function () {

            const projectTitle =
                this.querySelector("h3").textContent;

            alert("You selected: " + projectTitle);

        });

    });


    // ==========================================
    // 5. DYNAMIC FOOTER YEAR
    // ==========================================

    const footer = document.querySelector("footer p");

    if (footer) {

        const currentYear = new Date().getFullYear();

        footer.innerHTML =
            "&copy; Personal Portfolio " + currentYear;

    }


    // ==========================================
    // 6. TYPING EFFECT FOR HEADER
    // ==========================================

    const headerText = document.querySelector("header p");

    if (headerText) {

        const originalText =
            "Computer Science & Engineering";

        let index = 0;

        headerText.textContent = "";


        function typeText() {

            if (index < originalText.length) {

                headerText.textContent +=
                    originalText.charAt(index);

                index++;

                setTimeout(typeText, 70);

            }

        }

        typeText();

    }


    // ==========================================
    // 7. SCROLL-TO-TOP BUTTON
    // ==========================================

    const topButton = document.createElement("button");

    topButton.textContent = "↑ Top";

    topButton.id = "topButton";

    // Button styling
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "5px";
    topButton.style.backgroundColor = "black";
    topButton.style.color = "white";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.zIndex = "1000";


    document.body.appendChild(topButton);


    // Show button when scrolling
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });


    // Scroll to top when button is clicked
    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ==========================================
    // 8. HIGHLIGHT ACTIVE NAVIGATION LINK
    // ==========================================

    const sections =
        document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.clientHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.style.fontWeight = "normal";

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.style.fontWeight = "bold";

            }

        });

    });


    // ==========================================
    // 9. CONTACT FORM CHARACTER COUNTER
    // ==========================================

    const messageBox =
        document.getElementById("message");

    if (messageBox) {

        const counter =
            document.createElement("small");

        counter.style.display = "block";
        counter.style.marginTop = "5px";

        messageBox.parentNode.appendChild(counter);


        function updateCounter() {

            const characters =
                messageBox.value.length;

            counter.textContent =
                "Characters: " + characters;

        }


        messageBox.addEventListener(
            "input",
            updateCounter
        );


        updateCounter();

    }


    // ==========================================
    // 10. CONSOLE MESSAGE
    // ==========================================

    console.log(
        "Sadia's Portfolio JavaScript loaded successfully!"
    );

});
```
