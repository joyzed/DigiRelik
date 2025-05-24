// script.js – v1a.0.0.3 – 24/05/2025 20:45:00 – JS central DigiRelik v1a
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// Gestion du hash à l’ouverture de la page
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash) showSection(hash);
});
