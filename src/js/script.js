setTimeout(() => {
    alert("PRÓXIMO SHOW: 08/08 - 21HS - BROOKS - RECREIO - RJ");
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
document.querySelector(".form-submit").addEventListener("click", function () {
    this.textContent = "Mensagem Enviada ✓";
    this.style.background = "#1a4a2a";
    setTimeout(() => {
        this.textContent = "Enviar Mensagem";
        this.style.background = "";
    }, 3000);
});
