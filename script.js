document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary elements
    const themeToggleCheckbox = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the selected theme
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeToggleCheckbox) {
                themeToggleCheckbox.checked = true;
            }
        } else {
            body.classList.remove('light-theme');
            if (themeToggleCheckbox) {
                themeToggleCheckbox.checked = false;
            }
        }
    };

    // Check for a saved theme in local storage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('dark'); // Default to dark theme
    }

    // Add event listener to the theme toggle checkbox
    if (themeToggleCheckbox) {
        themeToggleCheckbox.addEventListener('change', () => {
            const newTheme = themeToggleCheckbox.checked ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});


