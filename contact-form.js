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
const form = document.querySelector(".contact-form");
const submitBtn = document.querySelector(".submit-btn");

// Add click event listener to the button to prevent form submission
submitBtn.addEventListener("click", function (e) {
  // Prevent the default form submission
  e.preventDefault();
});

// Add submit event listener to the form
form.addEventListener("submit", function (e) {
  // Prevent the default form submission
  e.preventDefault();
});
