const addBtn = document.querySelector(".btn");
const todoInput = document.querySelector("#inputAndButton input");

//create while pressing the button
addBtn.addEventListener("click", function(){

  addAndRemoveTask(todoInput)
});

//create while pressing enter
todoInput.addEventListener("keypress", function(event) {
    
    if (event.keyCode === 13) {
      event.preventDefault();
      addAndRemoveTask(todoInput)
    }
});