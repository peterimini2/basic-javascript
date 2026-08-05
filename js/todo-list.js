const todoList = [{
  name: 'make dinner',
  dueDate: '2026-08-01'
}, {
  name: 'wash dishes',
  dueDate: '2026-08-01'
}];
const addBtn = document.querySelector('.todo-btn');
const inputTodo = document.querySelector('.input-todo');

addBtn.addEventListener("click", () => {
  addTodo();
})

inputTodo.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
})

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.delete-todo-btn')
  .forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}




function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const inputDateElement = document.querySelector('.js-date-input');

  const name = inputElement.value;
  const dueDate = inputDateElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  renderTodoList();

  sessionStorage.setItem('myList', todoList);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // To skip loop.
  }
  console.log(i);
}


