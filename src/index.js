import "./index.css";

var header = document.getElementById("header");
let heading = document.createElement("h1");
heading.innerHTML = "TODO LIST";
heading.classList.add("redcolor", "center", "bgheading");
header.append(heading);
let logo = document.createElement("img");

logo.src =
  "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png";
  //logo.width="500px"
  logo.setAttribute("id","logo")

header.append(logo);
var addTodoData = document.getElementById("addTodoData");
let addTodo = document.createElement("div");
addTodo.setAttribute("id", "addTodo");

let input = document.createElement("input");
input.setAttribute("id", "input_taking");
let btn = document.createElement("button");
btn.innerHTML = "Add";
btn.addEventListener("click", () => {
  let val = document.getElementById("input_taking").value;
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoList.push(val);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  display(todoList);
});
addTodoData.append(input, btn);

addTodoData.append(addTodo);
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
display(todoList);
function display(data) {
  let displayTodo = document.getElementById("displayTodo");
  displayTodo.innerHTML = "";
  data.map((ele) => {
    let title = document.createElement("p");
    title.innerHTML = ele;
    displayTodo.append(title);
  });
}
