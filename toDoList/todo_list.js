const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const newList = document.querySelector("#new-list ul");
const completeList = document.querySelector("#complete-list ul");
const allDeleteToDos = document.querySelector("#all-delete-todos");

let toDos = [];
let completeToDos = [];

const EFFECT = "effect";
const TODO_KEY = "todo";
const COMPLETE_KEY = "complete";

function deleteToDoList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDoList();
}

function completeToDoList(event) {
  const li = event.target.parentElement;
  li.remove();
  completeToDos.push(toDos.filter(todo => todo.id === parseInt(li.id)));
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDoList();
  saveCompleteToDoList();
}

function paintCompleteToDoList_P(event) {
  const completeToDo = event.target.parentElement;
  const li = document.createElement("li");
  const span = document.createElement("span");
  const C_Highlight = completeToDos[completeToDos.length - 1][0].highlight;
  if (C_Highlight === true) {
    li.classList.add(EFFECT);
  }
  span.textContent = completeToDo.text;
  li.appendChild(span);
  completeList.appendChild(li);
}

function paintCompleteToDoList_S(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const C_todo = todo[0];
  if (C_todo.highlight === true) {
    li.classList.add(EFFECT);
  }
  span.textContent = C_todo.text;
  li.appendChild(span);
  completeList.appendChild(li);
}

function paintHighlight(event) {
  const li = event.target.parentElement;
  toDos.forEach(todo => {
    if (todo.id === parseInt(li.id) && todo.highlight === false) {
      todo.highlight = true;
      li.classList.add(EFFECT);
    } else if (todo.id === parseInt(li.id) && todo.highlight === true) {
      todo.highlight = false;
      li.classList.remove(EFFECT);
    }
  });
  saveToDoList();
}

function paintToDoList(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  li.text = newToDoObj.text;
  li.highlight = newToDoObj.highlight;
  const span = document.createElement("span");
  span.textContent = newToDoObj.text;
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "O";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  const highlightBtn = document.createElement("button");
  highlightBtn.textContent = "v";
  if (newToDoObj.highlight === true) {
    li.classList.add(EFFECT);
  }
  highlightBtn.addEventListener("click", paintHighlight);
  completeBtn.addEventListener("click", completeToDoList);
  completeBtn.addEventListener("click", paintCompleteToDoList_P);
  deleteBtn.addEventListener("click", deleteToDoList);
  li.appendChild(span);
  li.appendChild(highlightBtn);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  newList.appendChild(li);
}

function submitToDoList(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
    highlight: false,
  };
  toDos.push(newToDoObj);
  saveToDoList();
  paintToDoList(newToDoObj);
}

function allDelete_ToDos() {
  localStorage.removeItem(TODO_KEY);
  location.reload();
}

function saveToDoList() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function saveCompleteToDoList() {
  localStorage.setItem(COMPLETE_KEY, JSON.stringify(completeToDos));
}

const savedToDoList = localStorage.getItem(TODO_KEY);
const savedCompleteToDoList = localStorage.getItem(COMPLETE_KEY);

todoForm.addEventListener("submit", submitToDoList);
allDeleteToDos.addEventListener("click", allDelete_ToDos);

if (savedToDoList !== null) {
  const parsedToDos = JSON.parse(savedToDoList);
  toDos = parsedToDos;
  toDos.forEach(todo => paintToDoList(todo));
}

if (savedCompleteToDoList !== null) {
  const parsedCompleteToDos = JSON.parse(savedCompleteToDoList);
  completeToDos = parsedCompleteToDos;
  completeToDos.forEach(todo => paintCompleteToDoList_S(todo));
}
