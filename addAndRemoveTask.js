function addAndRemoveTask (inputValue){

    //Add an item or display an alert message if the input is empty
    let newLi = document.createElement('li');
    let newTaskText = document.createTextNode(inputValue.value);
    newLi.appendChild(newTaskText);

    if(inputValue.value === ""){
        alert('Please write something ?');
    }
    else{
        document.getElementById("ulList").appendChild(newLi);
    }

    //Reset input bar
    inputValue.value ="";

    // Add a close button to the new task created
    let closeItem = document.createElement("span");
    let closeCross = document.createTextNode("\u00D7");
    closeItem.className = "close";
    closeItem.appendChild(closeCross);
    newLi.appendChild(closeItem);

    //Strikethrough item
    newLi.addEventListener('click', function(){
        if(this.style.textDecoration == 'line-through'){
            newLi.style.textDecoration = 'none'
        }
        else{
            newLi.style.textDecoration = 'line-through'
        }
    
    })

    //Delete item
    closeItem.addEventListener('click', function(){
        closeItem.parentElement.remove()
    })
}