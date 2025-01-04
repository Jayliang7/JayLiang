function sendMail() {
  let params = {
    name: document.getElementsById("name").value,
    email: document.getElementsById("email").value,
    message: document.getElementsById("message").value,
  };

  emailjs
    .send("service_t30e8pv", "template_sprtwng", parms)
    .then(alert("Email sent!"));
}
