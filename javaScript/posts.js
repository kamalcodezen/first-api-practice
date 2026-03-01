
function postData() {

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
            displayData(jsonData);
        })
}

const displayData = (posts) => {

    // access container
    const postContainer = document.getElementById("post-data");

    posts.forEach(post => {
        // console.log(post.title);

        // create html element
        const li = document.createElement("li");
        li.innerText = post.title

        // add li to container
        postContainer.appendChild(li);
    });

}