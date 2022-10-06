//============== JQuery ============
 //------------- Submenu-toggle ----
$(document).ready(function () {
  $(".sub-btn").click(function () {
    $(this).toggleClass("active");
    $(this).next(".sub-menu").toggleClass("show-menu");
    $(this).find(".dropdown").toggleClass("rotate");
    if ($(this).find(".fa-solid").hasClass("fa-plus")) {
      $(this).find(".fa-solid").removeClass("fa-plus");
      $(this).find(".fa-solid").addClass("fa-minus");
    } else {
      $(this).find(".fa-solid").addClass("fa-plus");
    }
  });
});


//============== Javascript ============
//-------------- Sidebar-toggle --------
const sidebar = document.querySelector("#sidebar");
if (sidebar) {
  const toggle = document.querySelector("#sidebarToggle");
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}