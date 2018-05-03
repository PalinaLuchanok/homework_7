document.getElementsByClassName('task-to-click')[0].onclick = addNewElement;

function addNewElement() {
    var input = document.createElement('input');
    document.getElementsByClassName('task')[0].appendChild(input);
    alert ("Введите текст произвольной длины!");
    var button = document.createElement('button');
    document.getElementsByClassName('task')[0].appendChild(button);
    button.innerText = 'Найти самые длинные слова';
    button.onclick = findMaxWords;
}
function findMaxWords () {
    var text = document.getElementsByTagName('input')[0].value;
    var textArray = text.split(' ');
    var newArray = textArray.sort(compare);

    alert('Три самые длинные слова : ' + newArray[0] + ';' + newArray[1] + ';' + newArray[2]);

    function compare(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    }
}