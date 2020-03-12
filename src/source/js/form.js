const message = (text, input) => {
  const textBlock = input.previousElementSibling;
  textBlock.innerHTML = text;
  textBlock.classList.add('active');
  setTimeout(() => {
    textBlock.classList.remove('active');
  }, 3500);
}

const formSubmit = (form) => {

  ym(60757945, 'reachGoal', 'order');

    const phone = form.elements.phone.value;

    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
        phone: phone
    });

    xhr.open("POST", '../../callback.php');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr.send(json);

  let text = 'Спасибо, с вами свяжутся в ближайшее время';

  xhr.onload = function () {

    if (xhr.status != 200) {
      text = 'Упс, Ошибка: ' + xhr.status + ' ' + xhr.statusText;
      message(text, form.elements.phone);
      return;
    }
    form.elements.phone.value = '';
    message(text, form.elements.phone);
    };

    xhr.onerror = function() {
      text = 'Нет соединения';
      message(text, form.elements.phone);
    };
};

export { formSubmit };
