let map;

document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const checkInForm = document.getElementById('checkInForm');
    const dashboard = document.getElementById('dashboard');
    const chartContainer = document.getElementById('chartContainer');
    const wellnessTips = document.getElementById('wellnessTips');
    const resourcesNearby = document.getElementById('resourcesNearby');
    const communitySupport = document.getElementById('communitySupport');

    // Check-in function
    window.submitCheckIn = function () {
        const mood = document.getElementById('mood').value;
        const stressLevel = document.getElementById('stressLevel').value;
        const happinessLevel = document.getElementById('happinessLevel').value;
        const positiveNote = document.getElementById('positiveNote').value;
        const negativeNote = document.getElementById('negativeNote').value;

        // Add logic to store check-in data and update the dashboard

        // For now, let's just display a message
        alert("Check-in successful!");

        // Show dashboard
        showDashboard();
    };

    // Show dashboard
    function showDashboard() {
        checkInForm.style.display = 'none';
        dashboard.style.display = 'block';

        // Add logic to fetch and display dashboard data (mood trends, etc.)
        // For now, let's just display a message
        chartContainer.innerHTML = "<p>Dashboard data will be displayed here.</p>";

        // Fetch wellness tips and community support
        fetchWellnessTips();
        fetchCommunitySupport();

        // Initialize Google Maps for nearby resources
        initMap();
        fetchNearbyResources();
    }

    // Fetch wellness tips
    function fetchWellnessTips() {
        // Add logic to fetch and display wellness tips
        // For now, let's just display a message
        wellnessTips.innerHTML = "<p>Wellness tips will be displayed here.</p>";
    }

    // Fetch community support
    function fetchCommunitySupport() {
        // Add logic to fetch and display community support
        // For now, let's just display a message
        communitySupport.innerHTML = "<p>Community support will be displayed here.</p>";
    }

    // Initialize Google Maps
    window.initMap = function () {
        map = new google.maps.Map(document.getElementById('resourcesNearby'), {
            center: { lat: 35.9049, lng: -79.0469 }, // UNC Chapel Hill Coordinates
            zoom: 14,
        });
    };

    // Fetch nearby resources using Google Maps Places API
    function fetchNearbyResources() {
        // Add logic to fetch and display nearby resources
        // For now, let's just display a message
        resourcesNearby.innerHTML = "<p>Nearby resources will be displayed here.</p>";
    }
});
