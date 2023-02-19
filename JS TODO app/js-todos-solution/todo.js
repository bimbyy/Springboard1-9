document.addEventListener("DOMContentLoaded", function() {  //load in dom content
  let todoForm = document.getElementById("newTodoForm"); //set values for todoform
  let todoList = document.getElementById("todoList"); //set values for todolist

  todoForm.addEventListener("submit", function(event) { //use eventlistener for submit button to trigger next
    event.preventDefault();

    let removeButton = document.createElement("button"); //set u a remove event listener to remove tasks as needed
    removeButton.innerText = "X";

    let newTodo = document.createElement("li"); //set new todo and list
    newTodo.innerText = document.getElementById("task").value; //set up task for newtodo

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();
  });

  todoList.addEventListener("click", function(event) { //add new eventlistener for click

    const targetTagToLowerCase = event.target.tagName.toLowerCase();

    if (targetTagToLowerCase === "li") {

      event.target.style.textDecoration = "line-through";

    } else if (targetTagToLowerCase === "button") {

      event.target.parentNode.remove();
      
    }
  });
});
