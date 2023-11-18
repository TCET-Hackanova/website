const accordionBtns = document.querySelectorAll('.accordion__title');
const divCollapse = document.querySelectorAll('.accordion__collapse');

// accordionBtns.forEach((button) => {


// document.addEventListener('DOMContentLoaded', function (event) {
var acc = document.getElementsByClassName('accordion__title');
var panel = document.getElementsByClassName('accordion__text');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        console.log(acc[i]);

        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        }
    };
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
// });