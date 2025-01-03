const contactForm = document.querySelector(".contact-form");
const submitButton = contactForm.querySelector(".submit-btn");

// Add submit event listener to the form
contactForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Change button text
  submitButton.textContent = "Successfully Sent!";

  // Change button background color
  submitButton.style.backgroundColor = "var(--accent-secondary)";

  // Optional: Reset form fields
  contactForm.reset();
});
