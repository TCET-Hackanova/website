const iconOpen = document.querySelector('#open--nav--ham');
const bodyNav = document.getElementById('body--nav');
const iconClose = document.querySelector('#close--nav--ham');

const navContainer = document.getElementById('nav-container');
let visible = false;
iconOpen.addEventListener('click', (e) => {
    const iconClose = document.querySelector('#close--nav--ham');

    if (!visible) {
        // console.log('YES');
        navContainer.style.transform = 'translateX(-5%)';
        iconOpen.classList.add('hidden--nav--bur');
        bodyNav.style.overflow = 'hidden';
        iconClose.classList.remove('hidden--nav--bur');
        // iconClose.classList.add('nav--show--link');

        visible = true;
    }
    // } else {
    // 	navContainer.style.transform = 'translateX(100%)';
    // 	visible = false;
    // }
});

iconClose.addEventListener('click', (e) => {
    iconOpen.classList.remove('hidden--nav--bur');
    bodyNav.style.overflow = 'unset';
    iconClose.classList.add('hidden--nav--bur');
    navContainer.style.transform = 'translateX(100%)';
    visible = false;
});
const navLinks = document.querySelectorAll('.link');
navLinks.forEach((navlink) => {
    navlink.addEventListener('click', (e) => {
        if (visible) {
            visible = false;
            navContainer.style.transform = 'translateX(100%)';
            iconOpen.classList.remove('hidden--nav--bur');
            bodyNav.style.overflow = 'unset';
            iconClose.classList.add('hidden--nav--bur');
            navContainer.style.transform = 'translateX(100%)';
        }
    });
});


// Active Links JS
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        var sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".menu_links a[href*=" + sectionId + "]").classList.add("link-active");
        } else {
            document.querySelector(".menu_links a[href*=" + sectionId + "]").classList.remove("link-active");
        }
    });
}