let todoItemList = [
    {
        item: 'Buy Milk',
        duedate: '2023-12-07'
      },
      {
        item: 'Go to College',
        duedate: "2023-12-07"

      }
];
displayItems();

function addTodo() {
    let inuptElement = document.querySelector('#todo');
    let todoItem = inuptElement.value;
    let dateElement = document.querySelector('.date');
    let todoDate = dateElement.value ;
    todoItemList.push({item:todoItem,duedate:todoDate});
    inuptElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems(){
    let displayElement = document.querySelector('#item-list');
    let html = '';
    for(let i =0;i<todoItemList.length;i++){
        const{item,duedate} = todoItemList[i];
        html+= `<span>${item}</span>
                <span>${duedate}</span>
                <button class="btn-delete" onclick="todoItemList.splice(${i},1);displayItems();
                ">Delete</button>
                <button class="btn-update" onclick="updateItem(${i});
                ">Edit</button>
        `
    }
    displayElement.innerHTML = html;
}

function updateItem(index) {
    
    let inuptElement = document.querySelector('#todo');
    inuptElement.value = todoItemList[index].item;
    let dateElement = document.querySelector('.date');
    dateElement.value = todoItemList[index].duedate;
    let todoButton = document.querySelector('.btn-todo');
    todoButton.style.display = "none";
    // Check if an update button already exists
    let existingUpdateButton = document.querySelector('.btn-todo-update');
        
    // If an update button exists, remove it
    if (existingUpdateButton) {
        existingUpdateButton.remove();
    }
    let newButton = document.createElement("button");
        newButton.innerText = "Update";
        newButton.className = "btn-todo-update";
        newButton.onclick = function() {
            editTodo(index);
        };
        document.querySelector(".grid-container").appendChild(newButton);
        

}

function editTodo(index) {
    let inuptElement = document.querySelector('#todo');
    let todoItem = inuptElement.value;
    todoItemList[index].item = todoItem;
    let dateElement = document.querySelector('.date');
    let todoDate = dateElement.value ;
    todoItemList[index].duedate = todoDate;
    inuptElement.value = '';
    dateElement.value = '';
    alert("Update SuccessFully");
    let todoButton = document.querySelector('.btn-todo');
    todoButton.style.display = "block";
    let updateButton = document.querySelector('.btn-todo-update');
    updateButton.style.display = "none";
    displayItems();
}