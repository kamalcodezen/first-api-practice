
function postData() {

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
            displayData(jsonData);
        })
}

// {
//     "userId": 10,
//     "id": 100,
//     "title": "at nam consequatur ea labore ea harum",
//     "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
// }

const displayData = (posts) => {

    // access the container 
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.innerHTML = `
           <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
        postContainer.appendChild(div);

    });

};
postData();