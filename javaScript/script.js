
const person = {
    name: "kamal",
    age: 20,
    school: "bagnan boys high school",
    favorite: ["litchi", "mango"],
    isRich: true,
    money: 10
};

// json -> js object with notation

// json convert to stringify
let personJson = JSON.stringify(person);
// console.log(personJson);

// json stringify to perse object
let perseJson = JSON.parse(personJson);
// console.log(perseJson);



// api check and give data


const submitApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => console.log(data));
}

