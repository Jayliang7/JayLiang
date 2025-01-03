// Initialize EmailJS
emailjs.init("0J10yI7ak3uNPQHUK");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Disable submit button while sending
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Get form data
  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    to_email: "jayliang518@gmail.com",
  };

  // Send email using EmailJS
  emailjs
    .send("service_t30e8pv", "template_sprtwng", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");

        // Reset form
        document.getElementById("contactForm").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    )
    .finally(function () {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    });
});
