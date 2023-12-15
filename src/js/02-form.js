document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  // Перевірка стану сховища при завантаженні сторінки
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    form.querySelector('[name="email"]').value = email;
    form.querySelector('[name="message"]').value = message;
  }

  // Відстеження події input на формі з використанням делегування
  form.addEventListener('input', function (event) {
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA'
    ) {
      // Запис значень полів у локальне сховище
      const currentState = {
        email: form.querySelector('[name="email"]').value,
        message: form.querySelector('[name="message"]').value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  // Обробник події submit форми
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Очищення сховища та полів форми
    localStorage.removeItem('feedback-form-state');
    form.reset();

    // Вивід у консоль об'єкту з полями email та message та їхніми поточними значеннями
    const submittedData = {
      email: currentState.email,
      message: currentState.message,
    };
    console.log(submittedData);
  });
});
