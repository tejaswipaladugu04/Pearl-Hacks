document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const checkInForm = document.getElementById('checkInForm');
    const dashboard = document.getElementById('dashboard');
    const dashboardContent = document.getElementById('dashboardContent');
    const wellnessTips = document.getElementById('wellnessTips');
    const communitySupport = document.getElementById('communitySupport');
    const allCheckInsContent = document.getElementById('allCheckInsContent'); // New element

    // Store all check-in data
    const allCheckInData = [];

    // Store current check-in data
    let checkInData = [];

    // Check-in function
    window.submitCheckIn = function () {
        const mood = document.getElementById('mood').value;
        const stressLevel = document.getElementById('stressLevel').value;
        const happinessLevel = document.getElementById('happinessLevel').value;
        const positiveNote = document.getElementById('positiveNote').value;
        const negativeNote = document.getElementById('negativeNote').value;

        // Create a check-in object
        const checkInEntry = {
            mood,
            stressLevel,
            happinessLevel,
            positiveNote,
            negativeNote,
            timestamp: new Date().toLocaleString() // Timestamp for simplicity
        };

        // Add the entry to the current check-in data
        checkInData.push(checkInEntry);

        // Add the entry to the all check-in data
        allCheckInData.push(checkInEntry);

        // Show dashboard
        showDashboard();
    };

    // Update the dashboard with check-in data
    function updateDashboard() {
        // Display check-in data on the dashboard
        dashboardContent.innerHTML = "<h3>Recent Check-ins:</h3>";

        checkInData.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.innerHTML = `
                <p><strong>Mood:</strong> ${entry.mood}</p>
                <p><strong>Stress Level:</strong> ${entry.stressLevel}</p>
                <p><strong>Happiness Level:</strong> ${entry.happinessLevel}</p>
                <p><strong>Positive Note:</strong> ${entry.positiveNote}</p>
                <p><strong>Negative Note:</strong> ${entry.negativeNote}</p>
                <p><strong>Timestamp:</strong> ${entry.timestamp}</p>
                <hr>
            `;
            dashboardContent.appendChild(entryDiv);
        });

        // Add button for creating a new check-in
        const newCheckInButton = document.createElement('button');
        newCheckInButton.textContent = "New Check-in";
        newCheckInButton.onclick = showCheckInForm;
        dashboardContent.appendChild(newCheckInButton);
    }

    // Show dashboard
    function showDashboard() {
        checkInForm.style.display = 'none';
        dashboard.style.display = 'block';

        // Clear the form for new check-in
        clearCheckInForm();

        // Update the dashboard with check-in data
        updateDashboard();

        // Fetch and display other dashboard data (mood trends, etc.)
        fetchOtherDashboardData();
    }

    // Function to show the Check-in Form
    function showCheckInForm() {
        checkInForm.style.display = 'block';
        dashboard.style.display = 'none';
        allCheckInsContent.style.display = 'none';
    }

    // Function to clear the Check-in Form
    function clearCheckInForm() {
        document.getElementById('mood').value = '';
        document.getElementById('stressLevel').value = '';
        document.getElementById('happinessLevel').value = '';
        document.getElementById('positiveNote').value = '';
        document.getElementById('negativeNote').value = '';
    }

    // Fetch other dashboard data
    function fetchOtherDashboardData() {
        // Add logic to fetch and display additional dashboard data
        // For now, let's just display a message
        document.getElementById('otherDashboardData').innerHTML = "<p>Other dashboard data will be displayed here.</p>";

        // Fetch wellness tips and community support
        fetchWellnessTips();
        fetchCommunitySupport();
    }

    // Fetch wellness tips
    function fetchWellnessTips() {
        // Add logic to fetch and display wellness tips
        // For now, let's just display a message
        wellnessTips.innerHTML = "<p>Wellness tips will be displayed here.</p>";
        
        var stressLevelDisplay = document.getElementById("stressLevelDisplay");

        if (checkInData[1] == 1) {
            stressLevelDisplay.innerHTML = "No stress";
        } else {
            stressLevelDisplay.innerHTML = checkInData;
        }

    }

    // Fetch community support
    function fetchCommunitySupport() {
        // Add logic to fetch and display community support
        // For now, let's just display a message
        communitySupport.innerHTML = "<p>Community support will be displayed here.</p>";

    }

    // Initial display
    showCheckInForm();
});
