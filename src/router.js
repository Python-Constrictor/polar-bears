const route = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    "/polar-bears": "/polar-bears/src/pages/home.html",
    "/polar-bears/about": "/polar-bears/src/pages/about.html",
    "/polar-bears/threats": "/polar-bears/src/pages/threats.html",
    "/polar-bears/strategies": "/polar-bears/src/pages/strategies.html",
    "/polar-bears/lebron": "/polar-bears/src/pages/lebron_ai.html",
}

const handleLocation = async() =>{
    const path = window.location.pathname;
    const filepath = routes[path] || routes["/"];
    let response = await fetch(filepath);
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