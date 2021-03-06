/* 1. При каждом сабмите формы - пушить значение инпута в массив */
/* 2. Очищать форму после каждого сабмита */
/* 3. Рендерить на странице то, что было введено в форму */

const form = document.getElementById('root-form');
const list = document.getElementById('root-list');


form.addEventListener("submit", submitHandler);

const arr = [];

function submitHandler(event){
    event.preventDefault();
    const{
        target,
        target: {
            elements: {email},
        },
    } = event;

    const valForm = validateForm(email.value);
    if(valForm === false){
        alert("Необходимо ввести email"); 
        return;
    }

    arr.push(email.value);
    list.append(createListItem(email.value));

    target.reset();
}

function createListItem(value){
    const listItem = document.createElement('li');
    listItem.innerText = value;

    return listItem;
}


/* TODO */
/* 4. Валидация значения в инпуте при сабмите формы (На пустой инпут) */



function validateForm(email) {
    if (email === "" || email === null) {
        return false;
    }

    return true;
} 

/* 5. Добавить в элементы списка кнопку удаления, которая 
удалит этот li элемент и соответствующее значение в массиве. */


