document.addEventListener('DOMContentLoaded', function() {
    // IPO Chart
    const ipoChartCtx = document.getElementById('ipoChart').getContext('2d');
    const ipoChart = new Chart(ipoChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Total IPO', 'IPO in Gain', 'IPO in Loss'],
            datasets: [{
                data: [30, 20, 9],
                backgroundColor: [
                    '#f97316',  // Orange
                    '#14b8a6',  // Teal
                    '#6366f1'   // Purple
                ],
                borderWidth: 0,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Main Board Chart
    const mainBoardChartCtx = document.getElementById('mainBoardChart').getContext('2d');
    const mainBoardChart = new Chart(mainBoardChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Upcoming', 'New Listed', 'Ongoing'],
            datasets: [{
                data: [15, 25, 2],
                backgroundColor: [
                    '#6366f1',  // Purple
                    '#10b981',  // Green
                    '#f97316'   // Orange
                ],
                borderWidth: 0,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        title: function() {
                            return 'Afternoon';
                        },
                        label: function(context) {
                            return `IPO NSE & BSE: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('mobile-open');
    };

    // Responsive adjustments
    const handleResize = () => {
        const tooltip = document.getElementById('chartTooltip');
        if (window.innerWidth < 768) {
            tooltip.style.display = 'none';
        } else {
            tooltip.style.display = 'block';
        }
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Simulate data loading
    setTimeout(() => {
        document.querySelectorAll('.chart-container').forEach(container => {
            container.classList.add('loaded');
        });
    }, 500);
});