const addButton = document.querySelector('#add-button')
const todoInput = document.querySelector('#todo-input')
const todosContainer = document.querySelector('#todo-container')

// Variable global para guardar los ToDo's

const todos = ['Comprar manzanas', 'Pasear al gato']

function clickHandler(event) {
    event.preventDefault()
    const todoText= todoInput.value
    if(todoText === ''){
        alert('Por favor ingresa una tarea')
        return
    }
    
    todos.push(todoText)
    renderTodos()
}

function renderTodos(){
    todosContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement('article')
        todoItem.textContent = todos[i]
        todosContainer.appendChild(todoItem)
    }
}

addButton.addEventListener('click', clickHandler )

renderTodos()