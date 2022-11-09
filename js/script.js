// Parallax Code
// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);

const load = document.getElementById('preloader');
const body = document.getElementById('body');
const mlhLogo = document.getElementById('mlh-trust-badge');
const imgMlh = document.getElementById('img--mlh');
const goToTopButton = document.querySelector('.go-to-top__button');
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
setTimeout(function loadcomplete() {
    load.style.display = 'none';
    body.style.overflow = 'unset';
    mlhLogo.style.display = 'none';
    mlhLogo.style.opacity = 0;
    imgMlh.style.display = 'none';
}, 5000);

const nav = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 30) {
        nav.style.backgroundColor = 'rgba(9, 15, 46, 1)';
    } else {
        nav.style.backgroundColor = 'rgba(9, 15, 46, 0.9)';
    }
    if (window.scrollY > 300) {
        goToTopButton.classList.add('show');
    } else {
        goToTopButton.classList.remove('show');
    }
};

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: false,
                value_area: 868.0624057955
            },
        },
        color: {
            value: '#fca311'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 3
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            },
        },
        size: {
            value: 2,
            random: false,
            anim: {
                enable: true,
                speed: 38.97970619046457,
                size_min: 8.932849335314796,
                sync: true,
            },
        },
        line_linked: {
            enable: true,
            distance: 96.20472365193136,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 3367.1653278175977,
                rotateY: 1200
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'grab'
            },
            onclick: {
                enable: false,
                mode: 'remove'
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            },
        },
    },
    retina_detect: true,
});
requestAnimationFrame(update);