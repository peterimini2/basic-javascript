const todoList = ['make dinner', 'wash dishes'];
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
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();

  sessionStorage.setItem('myList', todoList);
}