//============== JQuery ============
$(document).ready(function () {
  $('.js-example-basic-multiple').select2();

  $('.fav_clr').on("select2:select", function (e) { 
         var data = e.params.data.text;
         console.log(data);
         if(data=='All'){
          $(".fav_clr > option").prop("selected","selected");
          $(".fav_clr").trigger("change");
         }
    });
});
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



  //--------- Input-validation -------
  $(".input-field").focus(function () {
    $(this).parent().addClass("border-dark");
    $(this).on("input", () => {
      if (!this.value) {
        $(this).parent().removeClass("border-dark");
        $(this).parent().addClass("border-danger");
        $(this).parent().next().show();
      } else {
        $(this).parent().removeClass("border-danger");
        $(this).parent().next().hide();
      }
    });
  });
  $(".input-field").on("blur", function () {
    let input = this;
    setTimeout(() => {
      let error = $(this).parent().next();
      if (!input.value) {
        $(error).show();
        $(this).parent().removeClass("border-dark");
        $(this).parent().addClass("border-danger");
      } else if (input.value) {
        $(error).hide();
        $(this).parent().removeClass("border-danger");
        $(this).parent().removeClass("border-dark");
      }
    }, 300);
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

  //--------- Input-Search-Dropdown (image-change) -------
  var selectedin = "";
  $(".input-img").focus(function () {
    $(this).parent().children(".input-dropdown-list").css("display", "block");
    $(this).parent().addClass("border-dark");
    $(this).css("border-radius", "5px 5px 0 0");
    let input = this;
    let inputdropdownlist = $(this).parent().children(".input-dropdown-list");
    $(this)
      .parent()
      .children(".input-dropdown-list")
      .find("li")
      .each(function () {
        $(this).click(() => {
          input.value = $(this).find("img")[0].alt;
          console.log(
            $(this).parent().parent().parent().find(".selected-dropdown-image")[0].src
          );
          $(this).parent().parent().parent().find(".selected-dropdown-image")[0].src =
            $(this).find("img")[0].src;
          $(input).css("border-radius", "5px");
          $(inputdropdownlist).css("display", "none");
          $(this).parent().removeClass("border-danger");
          // $(this).parent().next().css("display", "none");
        });
      });
  });


  //--------- Input-radiobuttons-Dropdown -------
  var selectedin = "";
  $(".input-img2").focus(function () {
    $(this).parent().children(".input-dropdown-list").css("display", "block");
    $(this).parent().addClass("border-dark");
    $(this).css("border-radius", "5px 5px 0 0");
    let input2 = this;
    let inputdropdownlist2 = $(this).parent().children(".input-dropdown-list");
    $(this)
      .parent()
      .children(".input-dropdown-list")
      .find("li")
      .each(function () {
        $(this).click(() => {
          input2.value = $(this).find("input")[0].alt;
          console.log(
            $(this).parent().parent().parent().find(".selected-dropdown-image")[0].src
          );
          $(this).parent().parent().parent().find(".selected-dropdown-image")[0].src =
            $(this).find("input")[0].src;
          $(input2).css("border-radius", "5px");
          $(inputdropdownlist2).css("display", "none");
          $(this).parent().removeClass("border-danger");
        });
      });
  });

  $(".input-img").on("blur", function () {
    let input = this;
    input.value = selectedin;
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

  $(".input-img").on("input", function () {
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

  //--------- Input-Search-Dropdown (image-no-image) -------
  var selectedin = "";
  $(".input-no-img").focus(function () {
    $(this).parent().children(".input-dropdown-list").css("display", "block");
    $(this).parent().addClass("border-dark");
    $(this).css("border-radius", "5px 5px 0 0");
    let input = this;
    let inputdropdownlist = $(this).parent().children(".input-dropdown-list");
    $(this)
      .parent()
      .children(".input-dropdown-list")
      .find("li")
      .each(function () {
        $(this).click(() => {
          $(this).find(".tb-radio:checked").attr('checked', true);
          input.value = $(this).find(".tb-radio")[0].value;

          $(input).css("border-radius", "5px");
          $(inputdropdownlist).css("display", "none");
          $(this).parent().removeClass("border-danger");
          // $(this).parent().next().css("display", "none");
        });
      });
  });

  $(".input-no-img").on("blur", function () {
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
  $(".input-no-img").on("input", function () {
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
});

//============== Javascript ============
//-------------- Sidebar-toggle --------

$("#datepicker-input").datepicker({
  // altField: "#datepicker-input",
  // altFormat: "yy-mm-dd",
  showButtonPanel: true,
  dateFormat: "yy-mm-dd",
  changeMonth: true,
  changeYear: true,
  yearRange: "c-100:c+10",
  dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  defaultDate: +1,
  buttonImageOnly: true,
  currentText: "Set",
  firstDay: 1,
  buttonImage:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAABGUlEQVQ4jc2UP06EQBjFfyCN3ZR2yxHwBGBCYUIhN1hqGrWj03KsiM3Y7p7AI8CeQI/ATbBgiE+gMlvsS8jM+97jy5s/mQCFszFQAQN1c2AJZzMgA3rqpgcYx5FQDAb4Ah6AFmdfNxp0QAp0OJvMUii2BDDUzS3w7s2KOcGd5+UsRDhbAo+AWfyU4GwnPAYG4XucTYOPt1PkG2SsYTbq2iT2X3ZFkVeeTChyA9wDN5uNi/x62TzaMD5t1DTdy7rsbPfnJNan0i24ejOcHUPOgLM0CSTuyY+pzAH2wFG46jugupw9mZczSORl/BZ4Fq56ArTzPYn5vUA6h/XNVX03DZe0J59Maxsk7iCeBPgWrroB4sA/LiX/R/8DOHhi5y8Apx4AAAAASUVORK5CYII=",
  buttonText: "Pick Date",
  showOn: "button",
});


