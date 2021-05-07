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

                if (!target.classList.contains('active-menu') && !target.classList.contains('close-btn') && !target.tagName === 'li') {
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
            const mouseBtn = document.querySelector('a[href="#service-block"]');
    mouseBtn.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('service-block').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
    };

    export default toggleMenu;