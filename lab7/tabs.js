function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => {
            displayTabs(users); 
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}

function displayTabs(users) {
    const tabsContainer = document.getElementById("tabs");
    
    users.forEach(user => {
        // here i create a button for each user
        const btn = document.createElement("button");
        btn.innerText = user.username;

        btn.onclick = function() {
            // Remove active class from all buttons
            document.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            // add active class to clicked button
            btn.classList.add("active");
            getPosts(user.id);
        };

        tabsContainer.appendChild(btn);
    });
}


async function getPosts(userId) {
    const displayArea = document.getElementById("posts-container");
    displayArea.innerHTML = "<p>lloading posts...</p>";

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const posts = await response.json();

        displayArea.innerHTML = `<h3>Posts by User ID: ${userId}</h3><ul>`;
        
        posts.forEach(post => {
            displayArea.innerHTML += `<li>${post.title}</li>`;
        });

        displayArea.innerHTML += "</ul>";

    } catch (error) {
        console.error("error fetching posts:", error);
        displayArea.innerText = "Failed to load posts.";
    }
}

getUsers();