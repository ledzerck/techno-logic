const addButton = document.querySelector('#add-button')
const todoInput = document.querySelector('#todo-input')
const todosContainer = document.querySelector('#todo-container')
const form = document.querySelector('#create-to-do-form')

// Variable global para guardar los ToDo's
let todos = [
   {id: 1734543653127, label: "Comprar manzanas"},
   {id: 1734543658321, label: "Pasear al perro"}
]




// Función para crear la tarea
function submitHandler(event) {
    // Con esto evitamos que el form haga reload en la página (Qué es el comportamiento por defecto)
    event.preventDefault()
    // Guardamos el texto de nuestro form
    const todoText= todoInput.value
    if(todoText === ''){
        alert('Por favor ingresa una tarea')
        return
    }
    const id = Date.now()

    const newTodo = {
        label: todoText,
        id: id
    }

    // Agregamos la tarea al Array de todo's
    todos.push(newTodo)
    renderTodos()

    // Limpiar el input
    todoInput.value = ''
}


// Esta función borra las tareas del render
function deleteHandler(event) {
    // Seleccionamos el elemento padre del botón de borrar que se presionó y obtenemos su id, que contiene un Date.now
    const idToDelete = event.target.parentNode.getAttribute('data-id')

    const newTodos = []

    for (let i = 0; i < todos.length; i++) {
        if (idToDelete != todos[i].id ) {
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
        todoItem.setAttribute('data-id', todos[i].id)

        // Creamos un span, que contenga la tarea
        const todoContent = document.createElement('span')
        todoContent.textContent = todos[i].label

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