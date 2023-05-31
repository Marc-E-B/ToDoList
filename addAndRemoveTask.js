function addAndRemoveTask (inputValue){

    //Ajouter Item ou afficher message d'erreur si champ vide
    let newLi = document.createElement('li');
    let newTaskText = document.createTextNode(inputValue.value);
    newLi.appendChild(newTaskText);

    if(inputValue.value === ""){
        alert('Please write something ?');
    }
    else{
        document.getElementById("ulList").appendChild(newLi);
    }

    //Reinititialiser la barre de saisie
    inputValue.value ="";

    // Pour ajouter les croix aux nouvelles taches
    let closeItem = document.createElement("span");
    let closeCross = document.createTextNode("\u00D7");
    closeItem.className = "close";
    closeItem.appendChild(closeCross);
    newLi.appendChild(closeItem);

    //Barrer Item


    //Supprimer Item
    closeItem.addEventListener('click', function(){
        // console.log('test 1 2 test')
        closeItem.parentElement.remove()
    })
}