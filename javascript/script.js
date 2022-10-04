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
  $(document).ready(function () {
    $('#exampletable').DataTable();
});
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).toggleClass('active');
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
      $(this).toggleClass('active');
      // $(this).next('.sub-menu').toggleClass('show-menu');
      $(this).next('.sub-menu').toggleClass('show-menu');
      $(this).find('.dropdown').toggleClass('rotate');
      if ($(this).find('.fa-solid').hasClass('fa-plus')) {
        $(this).find('.fa-solid').removeClass('fa-plus')
        $(this).find('.fa-solid').addClass('fa-minus')
      } else {
        $(this).find('.fa-solid').addClass('fa-plus')
  
      }
    });

  $(".dropdown-input").focus(function () {
    $(".input-dropdown-list").show(1000);
  });
  $(".dropdown-input").blur(function () {
    $(".input-dropdown-list").hide(1000);
  });
});
var selectedin = ''
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

$('.input').on('blur', function () {
  let input = this
  input.value = selectedin
  let datalist = $(this).parent().children('datalist')
  setTimeout(() => {
    $(datalist).css("display", "none")
  }, 300)
})

$('.input').on('input', function () {
  currentFocus = -1;
  var text = this.value.toUpperCase();
  let option = $(this).parent().children('datalist').find('option')
  option.each(function () {
    if (this.value.toUpperCase().indexOf(text) > -1) {
      $(this).css("display", "block")

    } else {
      $(this).css("display", "none")
    }
  })
})
