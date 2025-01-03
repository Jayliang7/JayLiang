document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
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
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
  });

  // Close menu when clicking on backdrop
  backdrop.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
    body.style.overflow = "";
  });

  // Close menu when clicking on links
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      backdrop.classList.remove("active");
      body.style.overflow = "";
    });
  });
});
