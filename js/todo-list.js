const todoList = []
const addBtn = document.querySelector('.todo-btn');

addBtn.addEventListener("click", () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  sessionStorage.setItem('myList', todoList);
}