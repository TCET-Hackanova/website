const accordionBtns = document.querySelectorAll('.accordion__title');
const divCollapse = document.querySelectorAll('.accordion__collapse');

// accordionBtns.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		// console.log('click')

// 		let accCollapse = button.nextElementSibling;

// 		if (!button.classList.contains('collapsing')) {
// 			// open accordion item
// 			if (!button.classList.contains('open')) {
// 				// console.log("click");

// 				accCollapse.style.display = 'block';
// 				let accHeight = accCollapse.clientHeight;
// 				// console.log(accHeight)

// 				setTimeout(() => {
// 					accCollapse.style.height = accHeight + 'px';
// 					accCollapse.style.display = '';
// 				}, 1);

// 				accCollapse.classList.add('collapsing');

// 				setTimeout(() => {
// 					//   console.log("click");
// 					// accCollapse.classList = 'accordion__collapse collapse open';
// 					accCollapse.classList.add('open');
// 				}, 300);
// 			}
// 			//close accordion item
// 			else {
// 				// accCollapse.classList = 'accordion__collapse collapsing';
// 				accCollapse.classList.remove('open');
// 				setTimeout(() => {
// 					accCollapse.style.height = '0px';
// 				}, 1);

// 				//
// 				setTimeout(() => {
// 					//   console.log("click2");
// 					accCollapse.classList = 'accordion__collapse collapse';
// 					accCollapse.style.height = '';
// 				}, 300);
// 			}

// 			button.classList.toggle('open');
// 		}
// 	});
// });

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