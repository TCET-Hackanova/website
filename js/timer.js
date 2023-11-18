window.addEventListener('load', (event) => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    var today = new Date("Nov 11, 2023");
    var newdate = new Date();

    let countDown = new Date("Jan 19, 2024");
    setInterval(function() {
        let now = new Date().getTime(),
            distance = countDown - now;

        (document.getElementById('days').innerText = Math.floor(
            distance / day
        )),
        (document.getElementById('hours').innerText = Math.floor(
            (distance % day) / hour
        )),
        (document.getElementById('minutes').innerText = Math.floor(
            (distance % hour) / minute
        )),
        (document.getElementById('seconds').innerText = Math.floor(
            (distance % minute) / second
        ));
    }, second);

    if (window.innerWidth < 799) {
        document.querySelector('.wrapper-timer').style.height = window.innerHeight + 'px';
    }
});