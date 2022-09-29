const sidebar = document.querySelector('#sidebar'),
toggle = document.querySelector("#sidebarToggle"),
sidebarTabsToggle = document.querySelectorAll(".sidebarTabsToggle > a")
toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
if (sidebarTabsToggle.classList[0] === "flex-center-align") {
    sidebarTabsToggle.classList.remove("flex-center-align");
    sidebarTabsToggle.classList.add("flex-center");
} else {
    sidebarTabsToggle.classList.add("flex-center-align");
    sidebarTabsToggle.classList.remove("flex-center");
}

})