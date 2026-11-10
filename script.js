const header = document.querySelector(".header");
const line = document.querySelector(".header-trigger");

function checkScroll() {
    if (!header || !line) {
        return;
    }

    const headerBottom = header.getBoundingClientRect().bottom;
    const lineTop = line.getBoundingClientRect().top;

    header.classList.toggle("scrolled", lineTop <= headerBottom);
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

checkScroll();



const image = "images/placeholder.png";

document.querySelector(".article-image").src = image;