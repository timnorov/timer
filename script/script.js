window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

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
        const timeInterval = setInterval(updateClock, 1000);
    }
    countTimer('30 April 2021');

    //меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            if (window.screen.width >= 768) {
                menu.classList.toggle('active-menu');
            } else {
                if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                    menu.style.transform = `translate(0)`;
                } else {
                    menu.style.transform = `translate(-100%)`;
                }
            }
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', event => {
                event.preventDefault();

                const blockID = event.target.getAttribute('href').substr(1);

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }
        const mouseBtn = document.querySelector('a[href="#service-block"]');
        mouseBtn.addEventListener('click', e => {
            e.preventDefault();
            document.getElementById('service-block').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });

    };

    toggleMenu();

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupContent.style.left = '-28%';
        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.screen.width >= 768) {
                    popupInterval = requestAnimationFrame(popupAnimate);
                } else {
                    popupContent.style.left = '30%';
                }
            });
        });


        //popup animation
        let count = 0,
            popupInterval,
            popdownInterval;
        const popupAnimate = function() {
            popupInterval = requestAnimationFrame(popupAnimate);
            count += 3;
            if (count < 39) {
                popupContent.style.left = count + '%';
            } else {
                cancelAnimationFrame(popupInterval);
            }
        };
        const popdownAnimate = function() {
            popdownInterval = requestAnimationFrame(popdownAnimate);
            count -= 3;
            if (count > -29) {
                popupContent.style.left = count + '%';
            } else {
                cancelAnimationFrame(popdownInterval);
                popup.style.display = 'none';
                popupContent.style.left = '-28%';
                count = 0;
            }
        };
        popupClose.addEventListener('click', () => {
            if (window.screen.width >= 768) {
                popdownInterval = requestAnimationFrame(popdownAnimate);
            } else {
                popup.style.display = 'none';
                popupContent.style.left = '-28%';
                count = 0;
            }
        });

    };
    togglePopUp();
});
