
const doc = document;
let count = 0;

//Debugging
//click event for add task button - to retrive the input value and append to ul element
doc.getElementById("addTask").onclick = function (event) {
    event.preventDefault();
    let inputValue = doc.getElementById("inpt"); //<input />

    if (inputValue.value) { //""
        //creating a new li element to show the task in browser
        const li = doc.createElement("li"); //<li></li>
        const spanElement = doc.createElement("span");
        const editButton = doc.createElement("button"); //<button></button>
        const deleteButton = doc.createElement("button");

        li.setAttribute("id", "li_"+count);

        editButton.innerText = "Edit";
        editButton.setAttribute("data-id", "li_"+count);

        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("data-id", "li_"+count);


        editButton.addEventListener("click", function(event) {
            editTask(event)
        })

        deleteButton.addEventListener("click", function(event) {
            deleteTask(event)
        })

        spanElement.innerText =  inputValue.value;
        li.appendChild(spanElement);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        //after creating the li element, adding input field value which is retriving from input
        // li.innerText = inputValue.value; //<li> New Task </li>
        inputValue.value = ""; //

        //appending li item inot ul element.
        doc.getElementById("todolist").appendChild(li);
        count++;

    }
}

function editTask(event) {
    // alert("Edit")
    const elmId =  event.target;
    const elem= elmId.getAttribute("data-id");

    const editInpt = document.createElement("input");

    const editTask = document.querySelector("#"+elem+" span"); // #li_0 span

    editInpt.value = editTask.innerText;

    document.querySelector("#"+elem+" span").innerText = "";
    document.querySelector("#"+elem+" span").appendChild(editInpt);
}

function deleteTask(event) {
    const elmId =  event.target;
    const elem= elmId.getAttribute("data-id");
    document.querySelector("#"+elem).remove();
}