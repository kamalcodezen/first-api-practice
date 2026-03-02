
const commentData = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then((res) => res.json())
        .then((jsonData) => displayComment(jsonData));

}
/* 
{
   "postId": 1,
   "id": 1,
   "name": "id labore ex et quam laborum",
   "email": "Eliseo@gardner.biz",
   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
 },
*/

const displayComment = (posts) => {
    // console.log(posts)

    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = "";

    posts.forEach(post => {
        // console.log(post)
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="comment-card">
        <h3>${post.id} :-</h3>
        <h3>${post.name}</h3>
         <h4>${post.email}</h4>
         <p>${post.body}</p>
       </div>`;
       
        commentsContainer.append(div);
    });

}

commentData();