    const countTimer = (deadline) => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const timer = getTimeRemaining();

            timerHours.innerHTML = ('0' + timer.hours).slice(-2);
            timerMinutes.innerHTML = ('0' + timer.minutes).slice(-2);
            timerSeconds.innerHTML = ('0' + timer.seconds).slice(-2);

            if (timer.timeRemaining <= 0) {
                clearInterval(timeInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

        }
        updateClock();
    };

    export default countTimer;