const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoItem = document.querySelector(".todo-item");
const isActive = document.querySelector(".active");
const listItems = document.querySelector(".todo-list-items");
// Event Listener
todoButton.addEventListener("click", addTodo);
listItems.addEventListener("click", deleteCheck);
function addTodo(e) {
  e.preventDefault();

  // Create div element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   todoDiv.classList.add("flex-grow");
  // Create radio button
  const radioBtn = document.createElement("input");
  radioBtn.setAttribute("type", "radio");
  //   todoDiv.classList.add("flex-grow");
  // Create li
  const listItem = document.createElement("li");
  listItem.innerText = todoInput.value;
  todoInput.value = "";
  //   todoDiv.classList.add("flex-grow");

  // Create button
  const deleteBtn = document.createElement("img");
  deleteBtn.src = "/trash.png";
  deleteBtn.classList.add("delete-btn");
  //   todoDiv.classList.add("flex-grow");

  deleteBtn.innerText = "Delete";
  todoDiv.appendChild(radioBtn);
  todoDiv.appendChild(listItem);
  todoDiv.appendChild(deleteBtn);
  todoItem.appendChild(todoDiv);
  isActive.classList.remove("active");
  isActive.classList.add("hide");
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
