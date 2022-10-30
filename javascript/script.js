// // header Sidebar template
// const headSide = document.getElementById('headerSidebar');
// fetch('../components/headerSidebar.html').then(res=>res.text()).then(data=>{
//   headSide.innerHTML=data;
// })

//input dropdown hide/show
// -------------Dashboard toggle--------------
const sidebar = document.querySelector("#sidebar");
if (sidebar) {
  const toggle = document.querySelector("#sidebarToggle");
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

$(".target-dual").click(function () {
  $(".dual-content-button").click();
});

// Jquery: dropdown functionality
$(document).ready(function () {
  $("#exampletable").DataTable({
    pagingType: "simple",
    oLanguage: {
      oPaginate: {
        sNext:
          "<span class='gray-100 pad-8-12 gray-300-hover'><i class='fa-solid fa-chevron-right'></i> </span>",
        sPrevious:
          "<span class='gray-100 pad-8-12 gray-300-hover'><i class='fa-solid fa-chevron-left'></i> </span>",
      },
    },
  });

  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).toggleClass("active");
    // $(this).next('.sub-menu').toggleClass('show-menu');
    $(this).next(".sub-menu").toggleClass("show-menu");
    $(this).find(".dropdown").toggleClass("rotate");
    if ($(this).find(".fa-solid").hasClass("fa-plus")) {
      $(this).find(".fa-solid").removeClass("fa-plus");
      $(this).find(".fa-solid").addClass("fa-minus");
    } else {
      $(this).find(".fa-solid").addClass("fa-plus");
    }
  });

  $(".dropdown-input").focus(function () {
    $(".input-dropdown-list").show(1000);
  });
  $(".dropdown-input").blur(function () {
    $(".input-dropdown-list").hide(1000);
  });
});

$(document).ready(function () {
  $("input[name$='impacts']").click(function () {
    var test = $(this).val();
    if (test == "no") {
      $(".impact-show").hide();
    } else {
      $(".impact-show").show();
    }
  });
});

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
// assets three dots card popup
$(".ellipsis-btn").on("click", function () {
  $(this).next().toggle("d-block");
});
$("#redirectToViewAll").on("click", function () {
  window.location.href = "../workloadAsigntome/requestOverviewForm.html";
});
$("#requestAccepted").on("click", function () {
  window.location.href = "../workloadAsigntome/requestAcceptedForm.html";
});
$("#redirectToViewAllRequests").on("click", function () {
  window.location.href = "../pages/workloadAsigntome/viewAllRequest.html";
});

$("#redirectToViewAllSearchResults").on("click", function () {
  window.location.href = "../pages/globalSearchResult.html";
});

$("#prl-checkbox").on("change", function () {
  if ($(this).is(":checked")) {
    $("#nextBtnAddDel").attr("href", "#prlDeliverableModal");
  }
});

$("#social-checkbox").on("change", function () {
  if ($(this).is(":checked")) {
    $("#nextBtnAddDel").attr("href", "#socialMedia");
  }
});

$("#prl-image,#prl-video").on("change", function () {
  if ($(this).is(":checked")) {
    $("#prlNextBtn").attr("href", "#additionalModal");
    $("#addBackBtn").attr("href", "#prlDeliverableModal");
  }
});

$("#social-video,#social-image").on("change", function () {
  if ($(this).is(":checked")) {
    $("#socialNextBtn").attr("href", "#additionalModal");
    $("#addBackBtn").attr("href", "#socialMedia");
  }
});

$("input[name$='due_date']").click(function () {
  var test = $(this).val();
  if (test == "yes") {
    $(".impact-show").hide();
  } else {
    $(".impact-show").show();
  }
});

$(".radio").on("change", function () {
  $(".card-check-border").each(function () {
    $(this).removeClass("border-red");
  });

  if ($(this).is(":checked")) {
    $(this).parent().parent().parent().addClass("border-red");
  }
});

$.fn.extend({
  treed: function (o) {
    var openedClass = "glyphicon-minus-sign";
    var closedClass = "glyphicon-plus-sign";

    if (typeof o != "undefined") {
      if (typeof o.openedClass != "undefined") {
        openedClass = o.openedClass;
      }
      if (typeof o.closedClass != "undefined") {
        closedClass = o.closedClass;
      }
    }

    //initialize each of the top levels
    var tree = $(this);
    tree.addClass("tree");
    tree
      .find("li")
      .has("ul")
      .each(function () {
        var branch = $(this); //li with children ul
        branch.prepend(
          "<i class='indicator glyphicon " + closedClass + "'></i>"
        );
        branch.addClass("branch");
        branch.on("click", function (e) {
          if (this == e.target) {
            var icon = $(this).children("i:first");
            icon.toggleClass(openedClass + " " + closedClass);
            $(this).children().children().toggle();
          }
        });
        branch.children().children().toggle();
      });
    //fire event from the dynamically added icon
    tree.find(".branch .indicator").each(function () {
      $(this).on("click", function () {
        $(this).closest("li").click();
      });
    });
    //fire event to open branch if the li contains an anchor instead of text
    tree.find(".branch>a").each(function () {
      $(this).on("click", function (e) {
        $(this).closest("li").click();
        e.preventDefault();
      });
    });
    //fire event to open branch if the li contains a button instead of text
    tree.find(".branch>button").each(function () {
      $(this).on("click", function (e) {
        $(this).closest("li").click();
        e.preventDefault();
      });
    });
  },
});

//Initialization of treeviews

$("#tree2").treed();
