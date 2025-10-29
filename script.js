// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Apply saved theme: default = dark
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
} else {
  // default dark (no data-theme attribute so :root dark variables apply)
  document.documentElement.removeAttribute('data-theme');
}

function updateThemeIcon() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon'); // show moon to indicate "switch to dark"
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // show sun to indicate "switch to light"
  }
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    // switch to dark
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    // switch to light
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
  updateThemeIcon();
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
