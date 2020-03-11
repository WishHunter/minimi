const formSubmit = (form) => {
    const phone = form.elements.phone.value;

    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
        phone: phone
    });


    xhr.open("POST", '../../callback.php');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(json);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log( 'Ошибка: ' + xhr.status);
            console.log( 'Текст ошибки: ' + xhr.statusText);
            return;
        }
    };

    xhr.onerror = function() {
        console.log( 'Скорей всего нет соединения');
    };
};

export { formSubmit };
