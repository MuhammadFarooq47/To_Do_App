var list = document.getElementById("list")

function addTodo(){
   var todoItem = document.getElementById("todo_item");

   // li section
   var li = document.createElement("li");
   var liText = document.createTextNode(todoItem.value)
   li.append(liText);
   li.setAttribute("class", "li")

   //Delete button section
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DEL");
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    // Edit Button section
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    
    list.appendChild(li)
    todoItem.value = ""


   

    
}
function deleteItem(e){
    //Button ko li k andar rakha howa hy tbhe li button ka parent hy....
    e.parentNode.remove()
}



function delAll(){
    list.innerHTML = ""

}


function editItem(e){
    var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue
}