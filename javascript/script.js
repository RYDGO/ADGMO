//input dropdown hide/show

// -------------Dashboard toggle-------------- 

const sidebar = document.querySelector('#sidebar');
if (sidebar) {
  const toggle = document.querySelector("#sidebarToggle");
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  })
}


// Jquery: dropdown functionality
$(document).ready(function () {

  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).toggleClass('active');
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  $(".dropdown-input").focus(function () {
    $(".input-dropdown-list").show(1000);
  });
  $(".dropdown-input").blur(function () {
    $(".input-dropdown-list").hide(1000);
  });
});

//  input dropdown hide / show
$('.input').focus(function () {
  $(this).parent().children('datalist').css("display", "block")
  $(this).css("border-radius", "5px 5px 0 0")
  let input = this
  let datalist = $(this).parent().children('datalist')
  $(this).parent().children('datalist').find('option').each(function () {
    $(this).click(() => {
      input.value = this.value
      $(input).css("border-radius", "5px")
      $(datalist).css("display", "none")
    })
  })

})


// input.oninput = function () {
//   currentFocus = -1;
//   var text = input.value.toUpperCase();
//   for (let option of browsers.options) {
//     if (option.value.toUpperCase().indexOf(text) > -1) {
//       option.style.display = "block";
//     } else {
//       option.style.display = "none";
//     }
//   }
// };
// var currentFocus = -1;
// input.onkeydown = function (e) {
//   if (e.keyCode == 40) {
//     currentFocus++;
//     addActive(browsers.options);
//   } else if (e.keyCode == 38) {
//     currentFocus--;
//     addActive(browsers.options);
//   } else if (e.keyCode == 13) {
//     e.preventDefault();
//     if (currentFocus > -1) {
//       /*and simulate a click on the "active" item:*/
//       if (browsers.options) browsers.options[currentFocus].click();
//     }
//   }
// };

// function addActive(x) {
//   if (!x) return false;
//   removeActive(x);
//   if (currentFocus >= x.length) currentFocus = 0;
//   if (currentFocus < 0) currentFocus = x.length - 1;
//   x[currentFocus].classList.add("active");
// }
// function removeActive(x) {
//   for (var i = 0; i < x.length; i++) {
//     x[i].classList.remove("active");
//   }
// }



