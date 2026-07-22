const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("header");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            backToTop.classList.add("shown");
        }
        else {
            backToTop.classList.remove("shown");
        }
    });
});

observer.observe(observerTarget);