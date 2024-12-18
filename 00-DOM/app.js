const addButton = document.querySelector('#add-button')
const todoInput = document.querySelector('#todo-input')

// Variable global para guardar los ToDo's

const todos = []

function clickHandler(event) {
    event.preventDefault()
    const todoText= todoInput.value
    if(todoText === ''){
        alert('Por favor ingresa una tarea')
        return
    }
    console.log(todoText)
    todos.push(todoText)
    console.log(todos)
}

addButton.addEventListener('click', clickHandler )