    const sendForm = () => {

        let formName1 = document.getElementById('form1-name'),
        formEmail1 = document.getElementById('form1-email'),
        formPhone1 = document.getElementById('form1-phone');

        formName1.addEventListener('input', () => {
            formName1.value = formName1.value.replace(/[^А-Яа-я ]/,'')
        });
        formEmail1.addEventListener('input', () => {
            formEmail1.value = formEmail1.value.replace(/[^A-Za-z\-@_.!~*']/,'')
        });
        formPhone1.addEventListener('input', () => {
            formPhone1.value = formPhone1.value.replace(/[^0-9\+]/,'')
        });

        formName1.addEventListener('blur', () => {
            if(formName1.value !=='') {
            formName1.value = formName1.value.replace(/\s+/g, ' ').trim()
            formName1.value = formName1.value.replace(/[-]+/g, '-')
            formName1.value = formName1.value.replace(/^\-+|\-+$/g, '')
            formName1.value = formName1.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
            }
        });
        formEmail1.addEventListener('blur', () => {
            formEmail1.value = formEmail1.value.replace(/\s+/g, ' ').trim()
            formEmail1.value = formEmail1.value.replace(/[-]+/g, '-')
            formEmail1.value = formEmail1.value.replace(/^\-+|\-+$/g, '')
        });
        formPhone1.addEventListener('blur', () => {
            formPhone1.value = formPhone1.value.replace(/\s+/g, ' ').trim()
            formPhone1.value = formPhone1.value.replace(/[-]+/g, '-')
            formPhone1.value = formPhone1.value.replace(/^\-+|\-+$/g, '')
        });


        const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form1');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if(formName1.classList.contains('success') && formEmail1.classList.contains('success') && formPhone1.classList.contains('success')) {
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

    export default sendForm;