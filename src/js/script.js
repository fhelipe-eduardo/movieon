setTimeout(() => {
    alert("PRÓXIMO SHOW: 17/07 - 21HS - BROOKS - MÉIER - RJ");
}, 3000);

// Nav scroll
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("visible"), i * 80);
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
);
reveals.forEach((el) => observer.observe(el));

// Track hover plays
document.querySelectorAll(".track").forEach((track) => {
    track.addEventListener("mouseenter", () => {
        const num = track.querySelector(".track-num");
        num.dataset.orig = num.textContent;
        num.textContent = "▶";
    });
    track.addEventListener("mouseleave", () => {
        const num = track.querySelector(".track-num");
        if (num.dataset.orig) num.textContent = num.dataset.orig;
    });
});

// Form submit
emailjs.init("3oj5JJCc1-mnyodN8");

document
    .getElementById("contact_form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        const serviceID = "service_3h2i9cy";
        const templateID = "template_zgwol8q";
        const submitButton = document.getElementById("submit_button");
        submitButton.textContent = "Enviando....";
        submitButton.disabled = true;

        emailjs
            .send(serviceID, templateID, formData)
            .then(() => {
                Toastify({
                    text: "Mensagem enviada com sucesso!",
                    duration: 3000,
                    style: {
                        background: "#28a745",
                        color: "#f4f4f4",
                    },
                }).showToast();

                document.getElementById("contact_form").reset();
            })
            .catch((error) => {
                Toastify({
                    text: "Erro ao enviar a mensagem!",
                    duration: 3000,
                    style: {
                        background: "#dc3545",
                        color: "#f4f4f4",
                    },
                }).showToast();

                console.error("Erro no envio", error);
            })
            .finally(() => {
                submitButton.textContent = "Enviar Mensagem";
                submitButton.disabled = false;
            });
    });

// Menu Hamburguer
const hamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
