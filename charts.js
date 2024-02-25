document.addEventListener('DOMContentLoaded', function () {
    // ... (your existing code)

    // Create line charts for stress and happiness levels
    const stressChart = createLineChart('stressChart', 'Stress Levels', 'rgba(255, 99, 132, 0.7)');
    const happinessChart = createLineChart('happinessChart', 'Happiness Levels', 'rgba(75, 192, 192, 0.7)');

    // Function to create a line chart
    function createLineChart(chartId, label, color) {
        const ctx = document.getElementById(chartId).getContext('2d');
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: label,
                    data: [],
                    fill: false,
                    borderColor: color,
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        max: 10,
                        min: 0
                    }
                }
            }
        });
    }

    // Update line charts with check-in data
    function updateLineCharts() {
        const stressData = checkInData.map(entry => entry.stressLevel);
        const happinessData = checkInData.map(entry => entry.happinessLevel);

        stressChart.data.labels = [...Array(stressData.length).keys()];
        stressChart.data.datasets[0].data = stressData;
        stressChart.update();

        happinessChart.data.labels = [...Array(happinessData.length).keys()];
        happinessChart.data.datasets[0].data = happinessData;
        happinessChart.update();
    }

    // Check-in function
    window.submitCheckIn = function () {
        // ... (your existing code)

        // Update line charts with new check-in data
        updateLineCharts();
    };

    // Show dashboard
    function showDashboard() {
        // ... (your existing code)

        // Update line charts with existing check-in data
        updateLineCharts();
    }

    // ... (your existing code)
});
