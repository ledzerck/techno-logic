const addButton = document.querySelector('#add-button')
const todoInput = document.querySelector('#todo-input')
const todosContainer = document.querySelector('#todo-container')
const form = document.querySelector('#create-to-do-form')

// Variable global para guardar los ToDo's
let todos = ['Comprar manzanas', 'Pasear al gato']


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


// Esta función borra las tareas del render
function deleteHandler(event) {
    // Seleccionamos el elemento padre del botón de borrar que se presionó
    const itemTodelete = event.target.parentNode

    // Podemos usar querySelector para seleccionar solo dentro de un contenedor
    const textToDelete = itemTodelete.querySelector('span').textContent
    // Aquí modificamos el array de los todos
    const newTodos = []
    for (let i = 0; i < todos.length; i++) {
        if (textToDelete !== todos[i] ) {
            newTodos.push(todos[i])
        }  
    }
    todos = newTodos
    renderTodos()
}





// Con esta función hacemos el render en nuestro sitio
function renderTodos(){
    todosContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        // Creamos el contenedor de cada tarea
        const todoItem = document.createElement('article')

        // Creamos un span, que contenga la tarea
        const todoContent = document.createElement('span')
        todoContent.textContent = todos[i]

        // Creamos un botón para borrar el elemento
        const button = document.createElement('button')
        button.textContent = 'Borrar'

        // Agregamos un EventListener para borrar
        button.addEventListener('click', deleteHandler)

        // Insertamos la tarea y el botóno de borrar en cada contenedor de tarea
        todoItem.appendChild(todoContent)
        todoItem.appendChild(button)

        // Insertamos la tarea en el contenedor de Tareas
        todosContainer.appendChild(todoItem)
    }
}

// addButton.addEventListener('click', submitHandler )
form.addEventListener('submit',submitHandler)


renderTodos()