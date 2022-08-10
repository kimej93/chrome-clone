const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOLIST_KEY = "todoList";

let todos = [];

function saveToDos() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const input = document.createElement("input");
  input.type = "checkbox";

  const label = document.createElement("label");
  label.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "ㅡ";

  li.appendChild(label);
  li.appendChild(button);
  todoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOLIST_KEY);

if (savedToDos) {
  const parseToDo = JSON.parse(savedToDos);
  todos = parseToDo;
  parseToDo.forEach(paintToDo);
}
