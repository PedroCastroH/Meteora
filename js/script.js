const toggleBtn = document.getElementById('toggleDarkMode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  toggleBtn.innerHTML = isDark
    ? '<i class="bi bi-sun-fill"></i> Modo Claro'
    : '<i class="bi bi-moon-fill"></i> Modo Escuro';
});

