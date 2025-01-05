document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const html = document.documentElement;
  const body = document.body;

  // Create backdrop element
  const backdrop = document.createElement("div");
  backdrop.classList.add("nav-backdrop");
  body.appendChild(backdrop);

  // Toggle menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    backdrop.classList.toggle("active");
    html.classList.toggle("menu-open");
    body.classList.toggle("menu-open");
  });

  // Close menu when clicking on backdrop
  backdrop.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
    html.classList.remove("menu-open");
    body.classList.remove("menu-open");
  });

  // Close menu when clicking on links
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      backdrop.classList.remove("active");
      html.classList.remove("menu-open");
      body.classList.remove("menu-open");
    });
  });
});
