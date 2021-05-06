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
    }
    countTimer('30 May 2022');

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

    //слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            dot = document.querySelectorAll('.dot'),
            ul = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };
    const slide = document.querySelectorAll('.portfolio-item'),
        ul = document.querySelector('.portfolio-dots');

    for (let i = 0; i < slide.length; i++) {
        const li = document.createElement('li');

        ul.appendChild(li);
        if (i === 0) {
            li.classList.add('dot');
            li.classList.add('dot-active');
        } else {
            li.classList.add('dot');
        }
    }
    
    slider();

    //наша команда
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(commandPhoto => commandPhoto.addEventListener('mouseenter', () => 
        event.target.src = event.target.dataset.img))
    commandPhoto.forEach(commandPhoto => commandPhoto.addEventListener('mouseleave', () =>
        event.target.src = event.target.dataset.img.slice(0, -5)+ '.jpg'))

    //калькулятор
    const input = document.querySelectorAll('input.calc-item');

    input.forEach(input => input.addEventListener('input', () => 
        input.value = input.value.replace(/\D/g, '')))

    //раздел остались вопросы
    let formName = document.getElementById('form2-name'),
        formName1 = document.getElementById('form1-name'),
        formName3 = document.getElementById('form3-name'),
        formMess = document.getElementById('form2-message'),
        formEmail = document.getElementById('form2-email'),
        formEmail1 = document.getElementById('form1-email'),
        formEmail3 = document.getElementById('form3-email'),
        formPhone = document.getElementById('form2-phone'),
        formPhone1 = document.getElementById('form1-phone'),
        formPhone3 = document.getElementById('form3-phone');

        formName.addEventListener('input', () => {
            formName.value = formName.value.replace(/[^А-Яа-я ]/,'')
        });
        formName1.addEventListener('input', () => {
            formName1.value = formName1.value.replace(/[^А-Яа-я ]/,'')
        });
        formName3.addEventListener('input', () => {
            formName3.value = formName3.value.replace(/[^А-Яа-я ]/,'')
        });
        formMess.addEventListener('input', () => {
            formMess.value = formMess.value.replace(/[^А-Яа-я0-9\-,.:"?! ]/,'')
        });
        formEmail.addEventListener('input', () => {
            formEmail.value = formEmail.value.replace(/[^A-Za-z\-@_.!~*']/,'')
        });
        formEmail1.addEventListener('input', () => {
            formEmail1.value = formEmail1.value.replace(/[^A-Za-z\-@_.!~*']/,'')
        });
        formEmail3.addEventListener('input', () => {
            formEmail3.value = formEmail3.value.replace(/[^A-Za-z\-@_.!~*']/,'')
        });
        formPhone.addEventListener('input', () => {
            formPhone.value = formPhone.value.replace(/[^0-9\+]/,'')
        });
        formPhone1.addEventListener('input', () => {
            formPhone1.value = formPhone1.value.replace(/[^0-9\+]/,'')
        });
        formPhone3.addEventListener('input', () => {
            formPhone3.value = formPhone3.value.replace(/[^0-9\+]/,'')
        });

        formName.addEventListener('blur', () => {
            if(formName.value !== '') {
            formName.value = formName.value.replace(/\s+/g, ' ').trim()
            formName.value = formName.value.replace(/[-]+/g, '-')
            formName.value = formName.value.replace(/^\-+|\-+$/g, '')
            formName.value = formName.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
            }
        });
        formName1.addEventListener('blur', () => {
            if(formName1.value !=='') {
            formName1.value = formName1.value.replace(/\s+/g, ' ').trim()
            formName1.value = formName1.value.replace(/[-]+/g, '-')
            formName1.value = formName1.value.replace(/^\-+|\-+$/g, '')
            formName1.value = formName1.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
            }
        });
        formName3.addEventListener('blur', () => {
            if(formName3.value !=='') {
            formName3.value = formName3.value.replace(/\s+/g, ' ').trim()
            formName3.value = formName3.value.replace(/[-]+/g, '-')
            formName3.value = formName3.value.replace(/^\-+|\-+$/g, '')
            formName3.value = formName3.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
            }
        });
        formMess.addEventListener('blur', () => {
            formMess.value = formMess.value.replace(/\s+/g, ' ').trim()
            formMess.value = formMess.value.replace(/[-]+/g, '-')
            formMess.value = formMess.value.replace(/^\-+|\-+$/g, '')
        });
        formEmail.addEventListener('blur', () => {
            formEmail.value = formEmail.value.replace(/\s+/g, ' ').trim()
            formEmail.value = formEmail.value.replace(/[-]+/g, '-')
            formEmail.value = formEmail.value.replace(/^\-+|\-+$/g, '')
        });
        formEmail1.addEventListener('blur', () => {
            formEmail1.value = formEmail1.value.replace(/\s+/g, ' ').trim()
            formEmail1.value = formEmail1.value.replace(/[-]+/g, '-')
            formEmail1.value = formEmail1.value.replace(/^\-+|\-+$/g, '')
        });
        formEmail3.addEventListener('blur', () => {
            formEmail3.value = formEmail3.value.replace(/\s+/g, ' ').trim()
            formEmail3.value = formEmail3.value.replace(/[-]+/g, '-')
            formEmail3.value = formEmail3.value.replace(/^\-+|\-+$/g, '')
        });
        formPhone.addEventListener('blur', () => {
            formPhone.value = formPhone.value.replace(/\s+/g, ' ').trim()
            formPhone.value = formPhone.value.replace(/[-]+/g, '-')
            formPhone.value = formPhone.value.replace(/^\-+|\-+$/g, '')
        });
        formPhone1.addEventListener('blur', () => {
            formPhone1.value = formPhone1.value.replace(/\s+/g, ' ').trim()
            formPhone1.value = formPhone1.value.replace(/[-]+/g, '-')
            formPhone1.value = formPhone1.value.replace(/^\-+|\-+$/g, '')
        });
        formPhone3.addEventListener('blur', () => {
            formPhone3.value = formPhone3.value.replace(/\s+/g, ' ').trim()
            formPhone3.value = formPhone3.value.replace(/[-]+/g, '-')
            formPhone3.value = formPhone3.value.replace(/^\-+|\-+$/g, '')
        });

    //калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        let oldTotal = 0;

            const countSum = () => {
                let total = 0,
                    countValue = 1,
                    dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                    squareValue = +calcSquare.value;

                if (calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }
                
                if (calcDay.value && calcDay.value < 5) {
                    dayValue *= 2;
                } else if (calcDay.value && calcDay.value < 10){
                    dayValue *= 1.5;
                }

                if (typeValue && squareValue) {
                    total = price * typeValue * squareValue * countValue * dayValue;
                } 
                animateValue(totalValue, oldTotal, total, 600);
                oldTotal = total;
                totalValue.textContent = total;
            };

            calcBlock.addEventListener('change', (event) => {
                const target = event.target;

                if (target.matches('select') || target.matches('input')) {
                    countSum();
                }
            });
            function animateValue(totalValue, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                totalValue.textContent = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
            }
    };

    calc(100);

    //send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form1');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = `  
            <div class='sk-fading-circle'>
                <div class='sk-circle sk-circle-1'></div>
                <div class='sk-circle sk-circle-2'></div>
                <div class='sk-circle sk-circle-3'></div>
                <div class='sk-circle sk-circle-4'></div>
                <div class='sk-circle sk-circle-5'></div>
                <div class='sk-circle sk-circle-6'></div>
                <div class='sk-circle sk-circle-7'></div>
                <div class='sk-circle sk-circle-8'></div>
                <div class='sk-circle sk-circle-9'></div>
                <div class='sk-circle sk-circle-10'></div>
                <div class='sk-circle sk-circle-11'></div>
                <div class='sk-circle sk-circle-12'></div>
            </div>
            `;
            const formData = new FormData(form);
        
            postData(formData)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status error not 200')
                    }
                    // console.log(response);
                    statusMessage.textContent = successMessage;
                    form.reset();
                    formName1.classList.remove('success');
                    formPhone1.classList.remove('success');
                    formEmail1.classList.remove('success');
                    setTimeout(() => {
                        form.removeChild(statusMessage)
                    }, 5000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setTimeout(() => {
                        form.removeChild(statusMessage)
                    }, 5000);
                });
        });

        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
        };
    };

    sendForm();

    //отправка из модального окна
    const sendModalForm = () => {
        const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form3');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = `  
            <div class='sk-fading-circle'>
                <div class='sk-circle sk-circle-1'></div>
                <div class='sk-circle sk-circle-2'></div>
                <div class='sk-circle sk-circle-3'></div>
                <div class='sk-circle sk-circle-4'></div>
                <div class='sk-circle sk-circle-5'></div>
                <div class='sk-circle sk-circle-6'></div>
                <div class='sk-circle sk-circle-7'></div>
                <div class='sk-circle sk-circle-8'></div>
                <div class='sk-circle sk-circle-9'></div>
                <div class='sk-circle sk-circle-10'></div>
                <div class='sk-circle sk-circle-11'></div>
                <div class='sk-circle sk-circle-12'></div>
            </div>
            `;
            const formData = new FormData(form);
        
            postData(formData)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status error not 200')
                    }
                    // console.log(response);
                    statusMessage.textContent = successMessage;
                    form.reset();
                    formName3.classList.remove('success');
                    formPhone3.classList.remove('success');
                    formEmail3.classList.remove('success');
                    setTimeout(() => {
                        form.removeChild(statusMessage)
                    }, 5000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setTimeout(() => {
                        form.removeChild(statusMessage)
                    }, 5000);
                });
        });

        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
        };
    };

    sendModalForm();

    //отправка нижней формы

    const sendBottomForm = () => {
        const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form2');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = `  
            <div class='sk-fading-circle'>
                <div class='sk-circle sk-circle-1'></div>
                <div class='sk-circle sk-circle-2'></div>
                <div class='sk-circle sk-circle-3'></div>
                <div class='sk-circle sk-circle-4'></div>
                <div class='sk-circle sk-circle-5'></div>
                <div class='sk-circle sk-circle-6'></div>
                <div class='sk-circle sk-circle-7'></div>
                <div class='sk-circle sk-circle-8'></div>
                <div class='sk-circle sk-circle-9'></div>
                <div class='sk-circle sk-circle-10'></div>
                <div class='sk-circle sk-circle-11'></div>
                <div class='sk-circle sk-circle-12'></div>
            </div>
            `;
            const formData = new FormData(form);
        
            postData(formData)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status error not 200')
                    }
                    // console.log(response);
                    statusMessage.textContent = successMessage;
                    form.reset();
                    formName.classList.remove('success');
                    formPhone.classList.remove('success');
                    formEmail.classList.remove('success');
                    formMess.classList.remove('success');
                    setTimeout(() => {
                        form.removeChild(statusMessage)
                    }, 5000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setTimeout(() => {
                        form.removeChild(statusMessage)
                    }, 5000);
                });
        });

        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
        };
    };
    sendBottomForm();
}); 
