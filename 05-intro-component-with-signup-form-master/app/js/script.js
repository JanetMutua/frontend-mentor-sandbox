// ================= loading form elements ============================
let first__name = document.getElementById("first-name");
let last__name = document.getElementById("last-name");
let email__data = document.getElementById("email");
let password = document.getElementById("password");

let btn = document.getElementById("submit-btn");

btn.addEventListener("click", (event) => {
  validateFormInputs(event);
});

// ===================== basic form validation ========================
function validateFormInputs(event__data) {
  let isFormValid = true;

  // check if first name and last name are filled
  if (first__name.value.trim() === "") {
    isFormValid = false;
    first__name.value = "";
    first__name.placeholder = "";
    displayError(first__name, "First Name cannot be empty");
  }

  // check if last name is filled
  if (last__name.value.trim() === "") {
    isFormValid = false;
    last__name.value = "";
    last__name.placeholder = "";
    displayError(last__name, "Last Name cannot be empty");
  }

  // check if email entered is valid
  if (!isEmailValid(email__data.value)) {
    isFormValid = false;
    email__data.value = "";
    email__data.placeholder = "email@example/com";
    displayError(email__data, "Looks like this is not an email");
  }

  // check if password is 8 characters long
  if (password.value < 8) {
    isFormValid = false;
    password.value = "";
    password.placeholder = "";
    displayError(password, "Password cannot be empty");
  }

  if (!isFormValid) {
    event__data.preventDefault();
  }
}

// ================ checking validity of email with regex ===============
function isEmailValid(email) {
  const email__pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email__pattern.test(email);
}

// ==================== displaying errors ===============================
function displayError(ui__element, message) {
  let error__message = document.createElement("div");
  error__message.className = "error";
  error__message.innerText = message;

  // Create or select an error icon for this field
  let icon = ui__element.parentNode.querySelector(".error-icon");
  icon.className = "error-icon-active";

  ui__element.className = "error-display";
  ui__element.parentNode.insertBefore(error__message, ui__element.nextSibling);
}
