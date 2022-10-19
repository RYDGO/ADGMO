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
  //   buttonImage:
  //     "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDUuNzVIMjIuNzVWMy43NUMyMi43NSAzLjYxMjUgMjIuNjM3NSAzLjUgMjIuNSAzLjVIMjAuNzVDMjAuNjEyNSAzLjUgMjAuNSAzLjYxMjUgMjAuNSAzLjc1VjUuNzVIMTIuNVYzLjc1QzEyLjUgMy42MTI1IDEyLjM4NzUgMy41IDEyLjI1IDMuNUgxMC41QzEwLjM2MjUgMy41IDEwLjI1IDMuNjEyNSAxMC4yNSAzLjc1VjUuNzVINUM0LjQ0Njg3IDUuNzUgNCA2LjE5Njg4IDQgNi43NVYyNy41QzQgMjguMDUzMSA0LjQ0Njg3IDI4LjUgNSAyOC41SDI4QzI4LjU1MzEgMjguNSAyOSAyOC4wNTMxIDI5IDI3LjVWNi43NUMyOSA2LjE5Njg4IDI4LjU1MzEgNS43NSAyOCA1Ljc1Wk0yNi43NSAyNi4yNUg2LjI1VjE0LjM3NUgyNi43NVYyNi4yNVpNNi4yNSAxMi4yNVY4SDEwLjI1VjkuNUMxMC4yNSA5LjYzNzUgMTAuMzYyNSA5Ljc1IDEwLjUgOS43NUgxMi4yNUMxMi4zODc1IDkuNzUgMTIuNSA5LjYzNzUgMTIuNSA5LjVWOEgyMC41VjkuNUMyMC41IDkuNjM3NSAyMC42MTI1IDkuNzUgMjAuNzUgOS43NUgyMi41QzIyLjYzNzUgOS43NSAyMi43NSA5LjYzNzUgMjIuNzUgOS41VjhIMjYuNzVWMTIuMjVINi4yNVoiIGZpbGw9IiM4QzhDOEMiLz4KPC9zdmc+Cg==",
  //   buttonText: "Pick Date",
  //   showOn: "button"
});


$("#datepicker-div").datepicker({
  // altField: "#datepicker-input",
  // altFormat: "yy-mm-dd",
  // hideIfNoPrevNext = true,
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
  // defaultDate: +1,
});

$("#datepicker-div").on("change", function () {
  var selected = $(this).val();
  alert(selected);
});