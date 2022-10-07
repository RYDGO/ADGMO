//============== JQuery ============
//-------------- Table Pagination --
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
});

//============== Javascript ============
//-------------- Sidebar-toggle --------
