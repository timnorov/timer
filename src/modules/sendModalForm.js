    const sendModalForm = () => {
        let formName3 = document.getElementById('form3-name'),
        formEmail3 = document.getElementById('form3-email'),
        formPhone3 = document.getElementById('form3-phone');

        formName3.addEventListener('input', () => {
            formName3.value = formName3.value.replace(/[^А-Яа-я ]/,'')
        });
        formEmail3.addEventListener('input', () => {
            formEmail3.value = formEmail3.value.replace(/[^A-Za-z\-@_.!~*']/,'')
        });
        formPhone3.addEventListener('input', () => {
            formPhone3.value = formPhone3.value.replace(/[^0-9\+]/,'')
        });

        formName3.addEventListener('blur', () => {
            if(formName3.value !=='') {
            formName3.value = formName3.value.replace(/\s+/g, ' ').trim()
            formName3.value = formName3.value.replace(/[-]+/g, '-')
            formName3.value = formName3.value.replace(/^\-+|\-+$/g, '')
            formName3.value = formName3.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
            }
        });
        formEmail3.addEventListener('blur', () => {
            formEmail3.value = formEmail3.value.replace(/\s+/g, ' ').trim()
            formEmail3.value = formEmail3.value.replace(/[-]+/g, '-')
            formEmail3.value = formEmail3.value.replace(/^\-+|\-+$/g, '')
        });
        formPhone3.addEventListener('blur', () => {
            formPhone3.value = formPhone3.value.replace(/\s+/g, ' ').trim()
            formPhone3.value = formPhone3.value.replace(/[-]+/g, '-')
            formPhone3.value = formPhone3.value.replace(/^\-+|\-+$/g, '')
        });


        const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form3');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if(formName3.classList.contains('success') && formEmail3.classList.contains('success') && formPhone3.classList.contains('success')) {
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
            }
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

    export default sendModalForm;