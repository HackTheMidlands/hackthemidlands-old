function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, descriptionID, endtime, description) {
    var clock = document.getElementById(id);
    var clockDescription = document.getElementById(descriptionID)
    clockDescription.innerText = description;
    if (endtime === null) {
        clock.style.display = "none";
    } else {
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 250);
}
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Javascript zero-indexes months, but not days.
    // Please don't ask why.
    // var deadline = new Date(Date.parse(new Date(2019, 9, 27, 12, 00, 00)));
    var deadline = null;
    initializeClock('countdown', 'countdown-description', deadline,"Coming soon...");
})
