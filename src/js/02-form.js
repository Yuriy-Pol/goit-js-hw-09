document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';

  form.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const currentState = {
        email: form.elements.email.value,
        message: form.elements.message.value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const currentState = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    console.log(currentState);

    localStorage.removeItem('feedback-form-state');
    form.reset();
  });
});
