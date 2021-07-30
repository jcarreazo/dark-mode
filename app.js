let toggleSwitch = document.getElementById("switch");
let menuButton = document.getElementById("menu");
let navBar = document.getElementById("navbar");
navBar.style.display = ("none")
navBar.hidden=true;
let navBarStatus = navBar.hidden;

menuButton.addEventListener("click", () => {
    navBarStatus = !navBarStatus;
    console.log(navBarStatus);
    toggleMenu();
    
})

function toggleMenu() {
    if (navBarStatus == true) {
        navBar.style.display = ("none");
    } else {
        navBar.style.animation("menu-move ease-in 0.5s;");
        navBar.style.display = ("flex");
        
    }
}