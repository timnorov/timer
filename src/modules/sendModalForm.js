    const sendModalForm = () => {
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

    export default sendModalForm;