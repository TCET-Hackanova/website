// const sponsorsItems = document.querySelectorAll('.sponsors--i');
// const callBack = function (enteries) {
// 	// console.log(enteries);
// 	enteries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add('show');
// 		}
// 	});
// };
// const observer = new IntersectionObserver(callBack, {
// 	threshold: 0,
// });
// sponsorsItems.forEach((card) => {
// 	observer.observe(card);
// });
// const slides = document.querySelectorAll('.slide');
// const left = document.querySelector('.slider__btn--left');
// const right = document.querySelector('.slider__btn--right');
// let currentSlide = 0;
// const maxSLides = slides.length;

// const nextSlide = function () {
// 	if (currentSlide === maxSLides - 1) {
// 		currentSlide = 0;
// 	} else {
// 		currentSlide++;
// 	}
// 	slides.forEach((s, i) => {
// 		s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
// 	});
// };
// setInterval('nextSlide()', 4000);