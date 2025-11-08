let tasks = [] // stores all tasks.

function renderTasks() {
    const list = document.getElementById("taskList")
    const counter = document.getElementById("counter")

    list.innerHTML = ""

    // i++ => i = i + 1 => i += 1


    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `
        <li>
        ${i + 1} - ${tasks[i]}
        <button onclick="removeTask(${i})">X</button>
        </li>
        `
    }

    // `` => use those in order to display the value of a variable
    // ''
    // ""
    counter.innerText = `${tasks.length} task${tasks.length === 1 ? "" : "s"}`
}

function addTask() {
    const input = document.getElementById("taskInput")
    const task = input.value.trim()

    if (task === "") {
        alert("Enter a task!")
        return
    }

    tasks.push(task) // add to array
    input.value = "" // clear field

    renderTasks()
}


function removeTask(index) {
    tasks.splice(index, 1) // remove 1 item at position index
    renderTasks() // refresh
}

// Event listener for the button

document.getElementById("addBtn").addEventListener("click", addTask)