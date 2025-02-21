// Placeholder for future functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log("Smart Greenhouse App Loaded");
    // Additional functionality can be added here

    // Initialize animations
    const cards = document.querySelectorAll('.metric-card, .garden-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';

    // Handle theme toggle
    themeToggle.addEventListener('change', () => {
        const theme = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // Handle light toggle
    const lightToggle = document.querySelector('.switch input');
    lightToggle.addEventListener('change', () => {
        const lightStatus = lightToggle.checked ? 'On' : 'Off';
        console.log(`Light status: ${lightStatus}`);
    });

    // Notification functionality
    const addNotificationButton = document.getElementById('add-notification');
    const clearNotificationsButton = document.getElementById('clear-notifications');
    const notificationInput = document.getElementById('notification-input');
    const notificationList = document.getElementById('notification-list');

    addNotificationButton.addEventListener('click', () => {
        const notificationText = notificationInput.value.trim();
        if (notificationText) {
            const newNotification = document.createElement('li');
            newNotification.textContent = notificationText;
            notificationList.appendChild(newNotification);
            notificationInput.value = ''; // Clear input
        }
    });

    // Clear all notifications
    clearNotificationsButton.addEventListener('click', () => {
        notificationList.innerHTML = ''; // Clear the notification list
        const noNotification = document.createElement('li');
        noNotification.textContent = 'No new notifications';
        notificationList.appendChild(noNotification); // Reset to default message
    });

    // Handle navigation button clicks
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked nav item
            item.classList.add('active');
        });
    });

    // Simulate real-time updates with smooth transitions
    function updateMetrics() {
        const metrics = [
            {
                selector: '.metric-card:nth-child(1)',
                min: 70,
                max: 80,
                unit: '%'
            },
            {
                selector: '.metric-card:nth-child(2)',
                min: 20,
                max: 25,
                unit: '°C'
            },
            {
                selector: '.metric-card:nth-child(3)',
                min: 80,
                max: 90,
                unit: '%'
            }
        ];

        metrics.forEach(metric => {
            const value = Math.floor(Math.random() * (metric.max - metric.min) + metric.min);
            const card = document.querySelector(metric.selector);
            const valueDisplay = card.querySelector('h3');
            const progressBar = card.querySelector('.progress');

            // Animate value change
            valueDisplay.style.transition = 'color 0.3s ease';
            valueDisplay.style.color = '#ff6b6b';
            valueDisplay.textContent = `${value}${metric.unit}`;

            // Animate progress bar
            progressBar.style.width = `${value}%`;

            // Reset color after animation
            setTimeout(() => {
                valueDisplay.style.color = 'var(--primary-color)';
            }, 300);
        });
    }

    // Update metrics every 5 seconds
    setInterval(updateMetrics, 5000);
});
