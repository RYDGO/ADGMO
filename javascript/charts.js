window.onload = function () {
  /*  ww  w  .j a va2s . com*/
  var data = [
    {
      data: [30, 40, 10, 20],
      backgroundColor: [
        "rgb(245, 168, 65)",
        "rgb(229, 204, 70)",
        "rgb(86, 195, 162)",
        "rgb(59, 166, 247)",
      ],
      borderColor: "#fff",
    },
  ];
  var options = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets;
          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            let percentage = Math.round((value / sum) * 100) + "%";
            return percentage;
          } else {
            return percentage;
          }
        },
        color: "#fff",
      },
    },
  };
  var ctx = document.getElementById("pie-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      datasets: data,
    },
    options: options,
  });
};
