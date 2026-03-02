

const todosList = () => {

    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
        .then((res) => res.json())
        .then((jsonData) => console.log(jsonData))

}
todosList();