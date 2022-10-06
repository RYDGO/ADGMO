//============== JQuery ============
$(document).ready(function () {
  //--------- impact-Radio-hide/show -------
  $("input[name$='impacts']").click(function () {
    var test = $(this).val();
    if (test == "no") {
      $(".impact-show").hide();
    } else {
      $(".impact-show").show();
    }
  });

  //--------- Input-Search-Dropdown (no-image) -------
  var selectedin = "";
  $(".input").focus(function () {
    $(this).parent().children("datalist").css("display", "block");
    $(this).parent().addClass("border-dark");
    $(this).css("border-radius", "5px 5px 0 0");
    let input = this;
    let datalist = $(this).parent().children("datalist");
    $(this)
      .parent()
      .children("datalist")
      .find("option")
      .each(function () {
        $(this).click(() => {
          input.value = this.value;
          $(input).css("border-radius", "5px");
          $(datalist).css("display", "none");
          $(this).parent().removeClass("border-danger");
          $(this).parent().next().css("display", "none");
        });
      });
  });
  $(".input").on("blur", function () {
    let input = this;
    input.value = selectedin;
    let datalist = $(this).parent().children("datalist");
    setTimeout(() => {
      let error = $(this).parent().next();
      if (!input.value) {
        $(error).css("display", "block");
        $(this).parent().removeClass("border-dark");
        $(this).parent().addClass("border-danger");
      } else if (input.value) {
        $(error).css("display", "none");
        $(this).parent().removeClass("border-danger");
      }
      $(datalist).css("display", "none");
    }, 300);
  });
  $(".input").on("input", function () {
    currentFocus = -1;
    var text = this.value.toUpperCase();
    let option = $(this).parent().children("datalist").find("option");
    option.each(function () {
      if (this.value.toUpperCase().indexOf(text) > -1) {
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    });
  });
  

  //--------- Input-Search-Dropdown (image) -------
  $(".dropdown-input").focus(function () {
    $(".input-dropdown-list").show(1000);
  });
  $(".dropdown-input").blur(function () {
    $(".input-dropdown-list").hide(1000);
  });

});

//============== Javascript ============
//-------------- Sidebar-toggle --------
