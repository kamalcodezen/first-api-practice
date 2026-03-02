

const todosList = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((res) => res.json())
        .then((jsonData) => displayTodo(jsonData));

}

//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },

const displayTodo = (todos) => {
    // console.log(todos)
    const todosContainer = document.getElementById("todos-container");
    todosContainer.innerHTML = "";

    todos.forEach(todo => {
        // console.log(todo);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="todo-card">
        <div>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</div>
        <div>${todo.title}</div>
        </div>
        `;
        todosContainer.append(div);
    });

}

todosList();