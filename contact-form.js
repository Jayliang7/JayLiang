// Initialize EmailJS
(function () {
  emailjs.init("0J10yI7ak3uNPQHUK");
})();

// Form validation and submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form elements
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector("textarea");
    const submitButton = this.querySelector(".submit-btn");

    // Reset previous error states
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.style.borderColor = "";
    });

    // Validation
    let isValid = true;
    const errors = [];

    if (!nameInput.value.trim()) {
      isValid = false;
      nameInput.style.borderColor = "red";
      errors.push("Name is required");
    }

    if (!emailInput.value.trim()) {
      isValid = false;
      emailInput.style.borderColor = "red";
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      isValid = false;
      emailInput.style.borderColor = "red";
      errors.push("Please enter a valid email address");
    }

    if (!messageInput.value.trim()) {
      isValid = false;
      messageInput.style.borderColor = "red";
      errors.push("Message is required");
    }

    if (!isValid) {
      alert(errors.join("\n"));
      return;
    }

    // Prepare email parameters
    const templateParams = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      message: messageInput.value,
      to_email: "jayliang518@gmail.com",
    };

    // Update button state
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Send email using EmailJS
    emailjs.send("service_om7di5k", "template_sprtwng", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        submitButton.textContent = "Message Sent!";

        // Reset form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        }, 3000);
      },
      function (error) {
        console.log("FAILED...", error);
        submitButton.textContent = "Error Sending";
        alert("Failed to send message. Please try again later.");

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        }, 3000);
      }
    );
  });
