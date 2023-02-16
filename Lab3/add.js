const todoListWrapper = document.querySelector('.todolist');
const addBtn = document.querySelector("#addNew");

addBtn.onclick = function () {
    addTodo();
}

const main = document.querySelector('.main');
const input = document.getElementById("newInput");

input.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        addTodo()
    }
});

function addTodo() {
    if(input.value == ''){
        return;
    }
    if(input.value[0] == ' '){
        input.value = '';
        return;
    }
    const task = document.createElement('div');
    task.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    task.appendChild(checkbox);

    const txt = document.createElement('span');
    txt.classList.add('taskText');
    txt.innerText = input.value;
    task.appendChild(txt);

    const butDiv = document.createElement('div');
    butDiv.classList.add('btn-div');

    const btn = document.createElement('button');
    btn.className = "delete-btn";
    btn.innerHTML = '<img src="trash-10-xxl.png" width="20">';
    btn.addEventListener('click', () => {
        let itemIdx = Object.values(todoListWrapper.children).indexOf(task);
        todoListWrapper.removeChild(todoListWrapper.children[itemIdx])
    });

    butDiv.appendChild(btn);
    task.appendChild(butDiv);
    todoListWrapper.appendChild(task);
    input.value = '';
}

