const API_URL = "https://jsonplaceholder.typicode.com/posts"

const loadBtn = document.getElementById("btn");
const statusEl = document.getElementById("status");
const postEl = document.getElementById("posts");
const retrybtn = document.getElementById("retrybtn")

console.log("Javascript has been implied");
console.log({loadBtn, statusEl, postEl});

async function loadPosts() {
    statusEl.textContent = "Loading..."
    loadBtn.disabled = true;


try{
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error ("Opps: ${response.status}")
    }
    const data = await response.json();
    const firstFive = data.slice(0, 5);
    renderPosts(firstFive);
    statusEl.textContent = "";
     
    }catch (error){
        statusEl.textContent = "There's an Error. Please try again.";
        console.error(error);
    } finally{
        loadBtn.disabled = false;
    }
}


function renderPosts(posts){
    postEl.textContent = "";

    posts.forEach (function (post) {
        const wrapper = document.createElement("article");
        const titleEl = document.createElement("h3");
        const bodyEl = document.createElement("p");

        wrapper.classList.add("post");
        bodyEl.classList.add("post-body");

        titleEl.textContent = post.title;
        bodyEl.textContent = post.body;

        wrapper.appendChild(titleEl);
        wrapper.appendChild(bodyEl);
        postEl.appendChild(wrapper);
    });
}

loadBtn.addEventListener("click", loadPosts)