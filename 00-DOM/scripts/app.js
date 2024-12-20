const addButton = document.querySelector('#add-button')
const todoInput = document.querySelector('#todo-input')
const todosContainer = document.querySelector('#todo-container')
const form = document.querySelector('#create-to-do-form')


// Variable global para guardar los ToDo's
let todos = [
    { id: 1734543653127, label: "Comprar manzanas", status: "Activo" },
    { id: 1734543658321, label: "Pasear al perro", status: "Pendiente" },
    { id: 1734543659506, label: "Estudiar para el examen", status: "Terminado" }
]




// Función para crear la tarea
function submitHandler(event) {
    // Con esto evitamos que el form haga reload en la página (Qué es el comportamiento por defecto)
    event.preventDefault()

    // Usamos Date.now para otorgarle un id único
    const id = Date.now()

    // Guardamos el texto de nuestro form
    const todoText = todoInput.value
    if (todoText === '') {
        alert('Por favor ingresa una tarea')
        return
    }

    // Recogemos el valor del Status
    let getStatus = document.querySelector('input[name="to-do-status"]:checked')

    if (getStatus === null) {
        alert('Por favor elige un status para la tarea')
        return
    }

    const newTodo = {
        label: todoText,
        id: id,
        status: getStatus.value
    }

    // Agregamos la tarea al Array de todo's
    todos.push(newTodo)
    renderTodos()

    // Limpiar el input
    form.reset()
    todoInput.value = ''
}


// Esta función borra las tareas del render
function deleteHandler(event) {
    // Seleccionamos el elemento padre del botón de borrar que se presionó y obtenemos su id, que contiene un Date.now
    const idToDelete = event.target.closest('.todo').getAttribute('data-id')

    const newTodos = []

    for (let i = 0; i < todos.length; i++) {
        if (idToDelete != todos[i].id) {
            newTodos.push(todos[i])
        }
    }
    todos = newTodos
    renderTodos()
}





// Con esta función hacemos el render en nuestro sitio
function renderTodos() {
    todosContainer.innerHTML = ''
    todos.forEach(todo => {
        const article = document.createElement('article');
        article.classList.add('todo');
        article.setAttribute('data-id', todo.id);

        article.innerHTML = `
            <span class="todo-name">${todo.label}</span>
            <span class="todo-status ${todo.status}">${todo.status}</span>
            <button class="action eliminar"><i class="bi bi-trash3-fill"></i></button>
        `;

        const deleteButton = article.querySelector('.eliminar');
        deleteButton.addEventListener('click', deleteHandler);

        todosContainer.appendChild(article);


    })
    // Selecciona todos los botones de eliminar después de renderizar
    const deleteButtons = document.querySelectorAll('.eliminar')
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteHandler)
    })
}


form.addEventListener('submit', submitHandler)


renderTodos()