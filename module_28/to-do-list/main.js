function addToDoList(target) {
    // console.log(target.parentNode.childNodes[1].value);
    const todoValue = document.getElementById("todo-title").value;
    const toDoListContainer = document.getElementById("todo-container");
    const createNewList = document.createElement("li");
    createNewList.innerText = todoValue;
    toDoListContainer.appendChild(createNewList);
}