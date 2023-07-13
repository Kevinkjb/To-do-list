const closeBtn = document.querySelector("#close-btn")
const inputList = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulList = document.getElementById("ul-list")
const contentP = document.getElementById("content-p")
let saveItem = JSON.parse(localStorage.getItem("listContainer"))
let listContainer = []
const classListItem = 'close-item'

if(saveItem){
    listContainer = saveItem
    render()
}

inputBtn.addEventListener("click", function(){
    todoList()


})

closeBtn.addEventListener("click", function(){
    listContainer = []
    localStorage.clear()
    render(listContainer)
})

function todoList(){
    listContainer.push(inputList.value)
    localStorage.setItem("listContainer", JSON.stringify(listContainer))
    inputList.value = ""
    render()
}

function render(){
        listItem = ""

        for(let i = 0; i<listContainer.length; i++){
            const todoObject = listContainer[i];
            listItem += 
            `
                <li class="main-display">
                    ${todoObject}
                    <button onclick="
                    listContainer.splice(${i}, 1);
                    render();
                    "class="delete-todo-button">X</button> 
                </li>
            `

        }

        ulList.innerHTML = listItem
}