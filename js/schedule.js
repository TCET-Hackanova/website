let timeLinks = document.querySelectorAll('.time-link');
let content = document.querySelectorAll('.time-content');
content[0].classList.remove('time-content');


// let arrowF=document.querySelector('.arrowF');
// let arrowB=document.querySelector('.arrowB');
// let day=1;
// arrowF.addEventListener('click', e=>{
//     e.preventDefault();
//     if(day<5)day++;
//     let i=day-1;
//     content.forEach(cnt => cnt.classList.add('time-content'));
//     timeLinks.forEach(btn => btn.classList.remove('link-border'));
//     timeLinks[i].classList.add('link-border');
//     content[i].classList.remove('time-content');

// });

// arrowB.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (day >1) day--;
//     let i = day-1;
//     content.forEach(cnt => cnt.classList.add('time-content'));
//     timeLinks.forEach(btn => btn.classList.remove('link-border'));
//     timeLinks[i].classList.add('link-border');
//     content[i].classList.remove('time-content');

// });

for (let i = 0; i < timeLinks.length; i++) {
    timeLinks[i].addEventListener('click', e => {
        e.preventDefault();
        timeLinks.forEach(link => {
            link.classList.remove('link-border');
        });
        content.forEach(cnt => {
            cnt.classList.add('time-content');
        })
        timeLinks[i].classList.add('link-border');
        content[i].classList.remove('time-content');
    });

}