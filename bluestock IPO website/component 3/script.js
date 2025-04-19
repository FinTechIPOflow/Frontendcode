document.addEventListener("DOMContentLoaded", function () {
  new Chart(document.getElementById('clientsChart'), {
    type: 'bar',
    data: {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Angel One',
          data: [350, 420, 390, 470, 520, 610, 890, 720],
          backgroundColor: 'orange'
        },
        {
          label: 'Zerodha',
          data: [200, 300, 340, 480, 650, 770, 890, 1020],
          backgroundColor: 'blue'
        }
      ]
    }
  });

  new Chart(document.getElementById('complaintsChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Angel One Complaints',
          data: [10, 30, 20, 50, 40, 60],
          borderColor: 'orange',
          borderWidth: 2,
          fill: false
        },
        {
          label: 'Zerodha Complaints',
          data: [15, 25, 45, 35, 55, 70],
          borderColor: 'blue',
          borderWidth: 2,
          fill: false
        }
      ]
    }
  });

  new Chart(document.getElementById('shareChart'), {
    type: 'doughnut',
    data: {
      labels: ['Angel One', 'Zerodha'],
      datasets: [{
        data: [45, 55],
        backgroundColor: ['orange', 'blue']
      }]
    }
  });

  new Chart(document.getElementById('financialsChart'), {
    type: 'bar',
    data: {
      labels: ['2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Angel One Revenue',
          data: [100, 200, 300, 400],
          backgroundColor: 'orange'
        },
        {
          label: 'Zerodha Revenue',
          data: [150, 250, 350, 450],
          backgroundColor: 'blue'
        }
      ]
    }
  });
});
