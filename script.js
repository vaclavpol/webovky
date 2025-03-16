document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("dark-mode"); // Výchozí režim
    }

    themeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.contains("dark-mode");

        if (isDarkMode) {
            document.body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            document.body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });
});