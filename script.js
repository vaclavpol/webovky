// Funkce pro aplikaci motivu na tělo stránky
function applyTheme() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.add(currentTheme); // Použije motiv podle uloženého nastavení
    } else {
        document.body.classList.add("dark-mode"); // Výchozí režim, pokud není motiv nastaven
    }
}

// Při načtení stránky nastav motiv
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
});

// Přepínání motivu při kliknutí na tlačítko
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        // Přepnutí mezi motivy
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        // Uložení nového motivu do localStorage
        const newTheme = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
        localStorage.setItem("theme", newTheme); // Uložení preferovaného motivu
    });
}
