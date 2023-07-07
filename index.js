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
    render(listContainer)
}

inputBtn.addEventListener("click", function(){

    listContainer.push(inputList.value)
    localStorage.setItem("listContainer", JSON.stringify(listContainer))
    inputList.value = ""
    render(listContainer)
    console.log(listContainer)

})

closeBtn.addEventListener("click", function(){
    listContainer = []
    localStorage.clear()
    render(listContainer)
})

function render(list){
        listItem = ""

        for(let i = 0; i<listContainer.length; i++){
            listItem += 
            `
                <li class="main-display">
                    ${list[i]}
                    <input type="checkbox" class="check-list">
                </li>
            `

        }

        ulList.innerHTML = listItem
}