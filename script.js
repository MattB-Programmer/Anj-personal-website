const header = document.querySelector(".header");
const line = document.querySelector(".header-trigger");

function checkScroll() {
    if (!header || !line) {
        console.error("Header or line not found!");
        return;
    }

    const headerBottom = header.getBoundingClientRect().bottom;
    const lineTop = line.getBoundingClientRect().top;

    console.log("Header bottom:", headerBottom);
    console.log("Line top:", lineTop);

    header.classList.toggle("scrolled", lineTop <= headerBottom);
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

checkScroll();