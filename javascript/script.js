
// -------------Dashboard toggle-------------- 

const sidebar = document.querySelector('#sidebar'),
toggle = document.querySelector("#sidebarToggle")
toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
})