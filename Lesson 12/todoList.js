const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach(function (todoObject, i) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector(".display-div").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".input-text");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".input-date");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
