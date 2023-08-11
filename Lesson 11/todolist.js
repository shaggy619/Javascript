// For Todo List 1
let todoList1 = [];
function storeTodo1() {
  let inputElement = document.querySelector(".input1");
  let todoName = inputElement.value;
  todoList1.push(todoName);
  console.log(todoList1);
  inputElement.value = "";
}

// For Todo List 2
let todoList2 = [];
function storeTodo2() {
  let inputElement = document.querySelector(".input2");
  let todoName = inputElement.value;
  todoList2.push(todoName);
  inputElement.value = "";
}

function displayTodo2() {
  storeTodo2();
  let todoList = "";
  let displayDiv = document.querySelector(".display-div");
  for (let i = 0; i < todoList2.length; i++) {
    let paragraphElement = `<p>${i + 1}.${todoList2[i]}</p>`;
    todoList += paragraphElement;
  }
  displayDiv.innerHTML = todoList;
}
