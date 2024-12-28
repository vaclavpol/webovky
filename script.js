// Najdi tlačítko a odkaz na CSS
const toggleButton = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-style');

// Načti motiv z lokálního úložiště (pokud existuje)
const currentTheme = localStorage.getItem('theme') || 'light';
themeLink.href = currentTheme === 'light' ? 'light.css' : 'dark.css';

// Přepínač motivů
toggleButton.addEventListener('click', () => {
  // Zkontroluj aktuální motiv
  const newTheme = themeLink.href.includes('light') ? 'dark' : 'light';

  // Změň styl na nový motiv
  themeLink.href = newTheme + '.css';

  // Ulož motiv do lokálního úložiště
  localStorage.setItem('theme', newTheme);
});
