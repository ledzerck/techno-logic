const addButton = document.querySelector('#add-button')
const todoInput = document.querySelector('#todo-input')
const todosContainer = document.querySelector('#todo-container')
const form = document.querySelector('#create-to-do-form')

// Variable global para guardar los ToDo's
const todos = ['Comprar manzanas', 'Pasear al gato']


function submitHandler(event) {
    // Con esto evitamos que el form haga reload en la página (Qué es el comportamiento por defecto)
    event.preventDefault()
    // Guardamos el texto de nuestro form
    const todoText= todoInput.value
    if(todoText === ''){
        alert('Por favor ingresa una tarea')
        return
    }
    // Agregamos la tarea al Array de todo's
    todos.push(todoText)
    renderTodos()

    // Limpiar el input
    todoInput.value = ''
}

// Con esta función hacemos el render en nuestro sitio
function renderTodos(){
    todosContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement('article')
        todoItem.textContent = todos[i]
        todosContainer.appendChild(todoItem)
    }
}

// addButton.addEventListener('click', submitHandler )
form.addEventListener('submit',submitHandler)


renderTodos()