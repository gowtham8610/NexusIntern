

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const email = document.getElementById("Signup-mail");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Error handling function
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Password strength check
const checkPasswordStrength = (password) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);

// Validate password
const validatePassword = (password) => {
  if (password === "") {
    showError(passwordInput, "Enter your password");
  } else if (!checkPasswordStrength(password)) {
    showError(
      passwordInput,
      "Please enter at least 8 characters with a number, symbol, lowercase, and uppercase letter."
    );
  }
};

//Email Verification
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const validateMail = (email) => {
  if (!emailPattern.test(email))
    showError(emailInput, "Enter a valid email address");
}

// Form submission event handling
form.addEventListener("submit", () =>
{
  validateMail(email);
  validatePassword(Password);
});