// Gestion de l'activation du menu et du scroll vers section
document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll("nav a[href^='#']");
  const sections = document.querySelectorAll("main > section, #hexekta");

  menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY - 40,
          behavior: "smooth"
        });
      }
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Active la section au scroll
  window.addEventListener("scroll", () => {
    let found = false;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (!found && rect.top < 90 && rect.bottom > 70) {
        menuLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href").replace("#", "") === section.id
          );
        });
        found = true;
      }
    });
  });
});