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

        // Update the dashboard with check-in data
        updateDashboard();

        // Fetch and display other dashboard data (mood trends, etc.)
        fetchOtherDashboardData();

        // Clear the form for new check-in
        clearCheckInForm();
        
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
        wellnessTips.innerHTML = "<p>Wellness tips</p>";
        
        var moodDisplay = document.getElementById("mood");

        if (document.getElementById('mood').value == "happy"){
            moodDisplay.innerHTML = "We’re happy that you’re happy! Use this mood as a chance to spread positivity by performing a random act of kindness today. Receivers of a random act of kindness tend to appreciate it more than the giver realizes, and are likely to pay it forward.";
        } else if (document.getElementById('mood').value == "sad"){
            moodDisplay.innerHTML = "It is ok to be sad. Take a break, give yourself space, and talk to someone. Try activities that can help you process your feelings in a healthy way, such as journaling, meditation, or taking a warm shower.";
        } else if (document.getElementById('mood').value == "anxious"){
            moodDisplay.innerHTML = "Take a deep breath. Focus on what you can control, and find ways to stay grounded. Try square breathing, listening to comforting music, or talking to someone who can comfort you.";
        } else if (document.getElementById('mood').value == "excited"){
            moodDisplay.innerHTML = "We’re glad that you’re excited! Whatever you are looking forward to, take a moment to celebrate, and channel that energy into trying a new hobby, talk to someone new, or go outside for a run.";
        } else if (document.getElementById('mood').value == "neutral"){
            moodDisplay.innerHTML = "Not a lot going on at the moment? Take a moment to organize your to-do list, finish something you have been putting off, and keep up with your self-care.";
        } else {
            moodDisplay.innerHTML = "no feelings";
        }


        var stressLevelDisplay = document.getElementById("stressLevelDisplay");

        if (document.getElementById('stressLevel').value <= 4) {
            stressLevelDisplay.innerHTML = "Your stress level is low! This is great, as a little stress can be beneficial for daily motivation. Make sure to keep up with your tasks for the day, take a leisurely walk, and watch something that will make you laugh.";
        } else if (document.getElementById('stressLevel').value <=7) {
            stressLevelDisplay.innerHTML = "Your stress level is moderate. Try clearing your mind by clearing your space, breaking down tasks into baby steps, and setting boundaries to limit additional stress.";
        } else {
            stressLevelDisplay.innerHTML = "Your stress level is high. Take it easy if you can, talk to someone, and engage in something that makes you happy. Remember to take deep breaths, baby steps, think positive affirmations. Also, feel free to vent in the notes - this is a safe space!";
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
