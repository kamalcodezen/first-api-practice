//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }


const usersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    usersDisplay(data);

}

const usersDisplay = (posts) => {
    // console.log(posts)
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = "";

    posts.forEach(post => {
        // console.log(post)
        const div = document.createElement("div");
        div.innerHTML = `
        
     


        `;

        usersContainer.appendChild(div);

    });
}

usersData()