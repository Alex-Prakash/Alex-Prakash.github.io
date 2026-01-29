const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
} else {
  body.setAttribute('data-theme', systemTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
