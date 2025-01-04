(function () {
  emailjs.init({
    publicKey: "0J10yI7ak3uNPQHUK",
  });
})();

// Spam prevention variables
let lastSubmissionTime = 0;
const COOLDOWN_PERIOD = 60000; // 1 minute cooldown
const MAX_SUBMISSIONS = 5; // Maximum submissions per session
let submissionCount = 0;

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(message) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.style.display = "block";
  errorDiv.textContent = message;
}

function hideError() {
  document.getElementById("error-message").style.display = "none";
}

function updateSubmitButton() {
  const timeLeft = COOLDOWN_PERIOD - (Date.now() - lastSubmissionTime);
  const button = document.querySelector('button[type="submit"]');

  if (timeLeft > 0) {
    button.disabled = true;
    button.textContent = `Wait ${Math.ceil(timeLeft / 1000)}s`;
  } else {
    button.disabled = false;
    button.textContent = "Submit";
  }
}

async function sendMail(e) {
  e.preventDefault();
  hideError();

  // Check submission count
  if (submissionCount >= MAX_SUBMISSIONS) {
    showError("Maximum submission limit reached for this session.");
    return;
  }

  // Check cooldown period
  const currentTime = Date.now();
  const timeElapsed = currentTime - lastSubmissionTime;
  if (timeElapsed < COOLDOWN_PERIOD) {
    showError(
      `Please wait ${Math.ceil(
        (COOLDOWN_PERIOD - timeElapsed) / 1000
      )} seconds before submitting again.`
    );
    return;
  }

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    showError("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  // Check for suspicious patterns
  if (message.includes("http") || message.includes("www.")) {
    showError("Links are not allowed in the message.");
    return;
  }

  const params = {
    name: name,
    email: email,
    message: message,
  };

  try {
    const response = await emailjs.send(
      "service_t30e8pv",
      "template_djunc2m",
      params
    );

    if (response.status === 200) {
      alert("Email sent successfully!");
      document.getElementById("contact-form").reset();

      // Update spam prevention tracking
      lastSubmissionTime = Date.now();
      submissionCount++;
      updateSubmitButton();

      // Start cooldown timer
      const updateTimer = setInterval(() => {
        updateSubmitButton();
        if (Date.now() - lastSubmissionTime >= COOLDOWN_PERIOD) {
          clearInterval(updateTimer);
        }
      }, 1000);
    }
  } catch (error) {
    showError("Failed to send email. Please try again later.");
    console.error("EmailJS Error:", error);
  }
}
