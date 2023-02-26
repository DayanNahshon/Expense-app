//-----Analytics
var monitorChart = document.querySelector("#monitorChart");
var ctx = monitorChart.getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Groceries', 'Car payment', 'Bills and Rent', 'Entertainment', 'Cell phone', 'Personal care'],
        datasets: [{
                label: 'Expense',
                data: [500, 270, 970, 100, 45, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(243, 157, 107, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 0.5,
                borderColor: '#363d55',
                hoverBorderWidth: 2,
                hoverBorderColor: '#000'
            }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
