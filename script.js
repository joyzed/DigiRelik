// script.js – v1a.0.0.0 – 24/05/2025 19:45:00 – Script dynamique DigiRelik
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}
