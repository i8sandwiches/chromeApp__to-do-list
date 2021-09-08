const todoInput = document.querySelector(".todo__input"); 
const todoButton = document.querySelector(".todo__button"); 
const todoList = document.querySelector(".todo-list"); 

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
   //prevent 'F5' effect when you click button 
   event.preventDefault();

   //create div(.todo) into form(.todo_form) 
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   //create li(.todo-item) into div(.todo)
   const newTodo = document.createElement("li");
   newTodo.innerText=todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);
   
   //create button ✔ for check
   const completeButton = document.createElement("button");
   completeButton.innerText= "✔";
   //completeButton.innerHTML= "<i>✔</i>";
   completeButton.classList.add("complete-btn");
   todoDiv.appendChild(completeButton);

   //create button ✖ for remove
   const trashButton = document.createElement("button");
   trashButton.innerText= "✖";
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   
   //div(.todo) get into todoList 
   todoList.appendChild(todoDiv);

   //it makes your input empty when you add .todo
   todoInput.value ="";

}

function deleteCheck(e) {
    const item=e.target;
    //remove .todo when you click  ✖
    if(item.classList[0]==="trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //little bit transparent .todo when you click  ✔
    if(item.classList[0]==="complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }


}