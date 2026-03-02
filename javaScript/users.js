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
    
        // object destructure
        const { id, name, username, email,address: { street, suite, city, zipcode }, phone, website, company: { name: companyName, catchPhrase, bs }
        } = post;

        const div = document.createElement("div");
        div.innerHTML = `
       
    <div class="users-card">
        <h3>Id : ${id}</h3>
        <p>Name : ${name}</p>
        <p>Username : ${username}</p>
        <p>Email : ${email}</p>
        <h3>Address : </h3>
            <p>Street : ${street}</p>
            <p>Suite : ${suite}</p>
            <p>City : ${city}</p>
            <p>Zipcode : ${zipcode}</p>
        <p>Phone : ${phone}</p>
        <p>Website : ${website}</p>
        <h3>Company :</h3>
        <p>Name : ${companyName}</p>
        <p>CatchPhrase: ${catchPhrase}</p>
        <p>Bs: ${bs}</p>
    </div>
        `;

        usersContainer.appendChild(div);

    });
}

usersData()