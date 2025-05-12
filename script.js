// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Toggle dark mode
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Set dynamic year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  