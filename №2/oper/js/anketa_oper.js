document.getElementsByClassName('ready')[0].onclick = addNewElement;

function addNewElement() {
    var message = document.createElement('p');
    var years = document.getElementsByClassName('age')[0].value;
    var days = document.getElementsByClassName('age')[0].value * 365;
    var sex = document.getElementsByClassName('sex')[0].value;
    var pensioner;
    sex == 'женский' && years >= 56 || sex == 'мужской' && years >= 61 ? pensioner = 'да' : pensioner = 'нет';
    var result = 'ФИО: ' + document.getElementsByClassName('name')[0].value + ', возраст, лет: ' +
        years + ', возраст, дней: ' + days + ', пол: ' + sex + ', пенсионный возраст:' + pensioner;
    var text = document.createTextNode(result);
    message.appendChild(text);
    document.getElementsByClassName('form')[0].appendChild(message);
}

