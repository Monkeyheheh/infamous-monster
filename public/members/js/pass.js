const correctPassword = "your_secret_password"; // Replace with your desired password

const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");

submitButton.addEventListener("click", () => {
  const userPassword = passwordInput.value;

  if (userPassword === correctPassword) {
    window.location.href = "homepage.html"; // Redirect to homepage
  } else {
    errorMessage.textContent = "Incorrect password";
  }
});