const sendBottomForm = () => {
    
        let formName = document.getElementById('form2-name'),
        formMess = document.getElementById('form2-message'),
        formEmail = document.getElementById('form2-email'),
        formPhone = document.getElementById('form2-phone');

        formName.addEventListener('input', () => {
            formName.value = formName.value.replace(/[^А-Яа-я ]/,'')
        });
        formMess.addEventListener('input', () => {
            formMess.value = formMess.value.replace(/[^А-Яа-я0-9\-,.:"?! ]/,'')
        });
        formEmail.addEventListener('input', () => {
            formEmail.value = formEmail.value.replace(/[^A-Za-z\-@_.!~*']/,'')
        });
        formPhone.addEventListener('input', () => {
            formPhone.value = formPhone.value.replace(/[^0-9\+]/,'')
        });

        formName.addEventListener('blur', () => {
            if(formName.value !== '') {
            formName.value = formName.value.replace(/\s+/g, ' ').trim()
            formName.value = formName.value.replace(/[-]+/g, '-')
            formName.value = formName.value.replace(/^\-+|\-+$/g, '')
            formName.value = formName.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
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
        formPhone.addEventListener('blur', () => {
            formPhone.value = formPhone.value.replace(/\s+/g, ' ').trim()
            formPhone.value = formPhone.value.replace(/[-]+/g, '-')
            formPhone.value = formPhone.value.replace(/^\-+|\-+$/g, '')
        });

        
        const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form2');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if(formName.classList.contains('success') && formEmail.classList.contains('success') && formPhone.classList.contains('success') && formMess.classList.contains('success')) {
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

    export default sendBottomForm;