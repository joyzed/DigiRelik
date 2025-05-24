// script.js – v3.0.0 – 24/05/2025 22:00:00 – Fonctions globales DigiRelik
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  } else {
    showSection('home');
  }
});
