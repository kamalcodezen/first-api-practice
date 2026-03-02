

const commentData = () => {

    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then((res) => res.json())
        .then((jsonData) => console.log(jsonData));

}
commentData();