// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check and apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle between light and dark mode
themeToggle.addEventListener('click', () => {
  const darkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  if (darkMode) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
});

// ===== Fade-in Animation on Scroll =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .zoom-in').forEach(el => observer.observe(el));

// ===== Contact Form Alert =====
function sendMail(event) {
  event.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
}
