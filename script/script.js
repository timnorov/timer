window.addEventListener('DOMContentLoaded', () => {

    function countTimer(deadline) {
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
            menuItems = menu.querySelectorAll('ul>li'),
            body = document.querySelector('body');

        body.addEventListener('click', () => {
            let target = event.target;

            if (target.closest('.menu')) {
                if (window.screen.width >= 768) {
                    menu.classList.toggle('active-menu');
                } else {
                    if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                        menu.style.transform = `translate(100%)`;
                    } else {
                        menu.style.transform = `translate(-100%)`;
                    }
                }
            } else if (target.closest('.active-menu')) {

                if (!target.classList.contains('active-menu') && !target.classList.contains('close-btn')) {
                    menu.classList.remove('active-menu');
                    target = event.menuItems;
                    event.preventDefault();

                    const blockID = event.target.getAttribute('href').substr(1);
                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                } else if (target.classList.contains('close-btn')) {
                    menu.classList.remove('active-menu');
                }
            } else {
                menu.classList.remove('active-menu');
            }
        });
    };

    toggleMenu();

    const mouseBtn = document.querySelector('a[href="#service-block"]');
    mouseBtn.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('service-block').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');

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
            popupInterval;

        const popupAnimate = function() {
            popupInterval = requestAnimationFrame(popupAnimate);
            count += 3;
            if (count < 39) {
                popupContent.style.left = count + '%';
            } else {
                cancelAnimationFrame(popupInterval);
            }
        };
        popup.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });

    };
    togglePopUp();

    //табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });

            }

        });
    };

    tabs();
});
