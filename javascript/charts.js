const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'pie',
  data: {
      datasets: [{
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'Green',
          ],
        data: [30, 40, 10,20],
        backgroundColor: [
          'rgb(245, 168, 65)',
          'rgb(229, 204, 70)',
          'rgb(86, 195, 162)',
          'rgb(59, 166, 247)',
        ],
        hoverOffset: 4
      }],
  },
  options: {
    responsive: true,
    plugins: {
        datalabels: {
            display: true,
            backgroundColor: '#ccc',
          
            borderRadius: 3,
            font: {
                color: '#000',
              weight: 'bold',
            }
    }
    }
  },
});
