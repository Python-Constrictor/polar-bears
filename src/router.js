const route = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
  "/polar-bears": "/polar-bears/pages/home.html",
  "/polar-bears/about": "/polar-bears/pages/about.html",
  "/polar-bears/threats": "/polar-bears/pages/threats.html",
  "/polar-bears/strategies": "/polar-bears/pages/strategies.html",
  "/polar-bears/lebron": "/polar-bears/pages/lebron_ai.html",
};

const handleLocation = async() =>{
    const path = window.location.pathname;
    const filepath = routes[path] || routes["/polar-bears"];
    console.log(filepath);
    let response = await fetch(filepath);
    console.log(response);
    if(!response.ok){
        document.getElementById("main-page").innerHTML = "<p>we couldn't find the page</p>";
        return;
    }
    const html = await response.text();
    document.getElementById("main-page").innerHTML = html;
}

window.route = route;
window.onpopstate = handleLocation; 

document.addEventListener("DOMContentLoaded", handleLocation);