const popup = document.getElementById('popupForm');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const themeToggle = document.getElementById('theme-toggle');

openPopup.addEventListener('click', () => popup.style.display = 'flex');
closePopup.addEventListener('click', () => popup.style.display = 'none');

// Theme toggle
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
