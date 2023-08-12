// For Todo List 3
let todoList2 = [];
function storeTodo3() {
  let inputElement = document.querySelector(".input2");
  let todoName = inputElement.value;
  todoList2.push(todoName);
  inputElement.value = "";
}

function displayTodo3() {
  storeTodo3();
  let todoList = "";
  let displayDiv = document.querySelector(".display-div");
  for (let i = 0; i < todoList2.length; i++) {
    const todoLists = todoList2[i];
    let paragraphElement = `
    <p>
    ${todoLists}
    <button onclick = "
    "
    >Delete
    </button>
    </p>`;
    todoList += paragraphElement;
  }
  displayDiv.innerHTML = todoList;
}
