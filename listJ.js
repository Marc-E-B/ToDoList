const addBtn = document.querySelector(".btn");
const todoInput = document.querySelector("#inputAndButton input");

//executes addAndRemoveTask() while pressing the button
addBtn.addEventListener("click", function(){

  addAndRemoveTask(todoInput)
});

//executes addAndRemoveTask() while pressing enter
todoInput.addEventListener("keypress", function(event) {
    
    if (event.keyCode === 13) {
      event.preventDefault();
      addAndRemoveTask(todoInput)
    }
});