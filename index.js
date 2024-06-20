const form = document.getElementById('registration-form');

form.addEventListener('submit', async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        alert('Форма успешно отправлена!');
        form.reset();
    } else {
        alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
    }
});

form.addEventListener('input', () => {
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    nameInput.setCustomValidity('');
    surnameInput.setCustomValidity('');
    emailInput.setCustomValidity('');
    phoneInput.setCustomValidity('');
    messageInput.setCustomValidity('');

    if (!nameInput.value) {
        nameInput.setCustomValidity('Пожалуйста, введите имя.');
    }
    if (!surnameInput.value) {
        surnameInput.setCustomValidity('Пожалуйста, введите фамилию.');
    }
    if (!emailInput.value || !emailInput.validity.valid) {
        emailInput.setCustomValidity('Пожалуйста, введите действительный адрес электронной почты.');
    }
    if (!phoneInput.value || !phoneInput.validity.valid) {
        phoneInput.setCustomValidity('Пожалуйста, введите действительный номер телефона.');
    }
    if (!messageInput.value) {
        messageInput.setCustomValidity('Пожалуйста, введите сообщение.');
    }
});