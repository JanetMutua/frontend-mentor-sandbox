// loading form elements
let first__name = document.getElementById("first-name");
let last__name = document.getElementById("last-name");
let email__data = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("free-trial-form");
let btn = document.getElementById("submit-btn");

btn.addEventListener("click", (event) => {
  validateFormInputs(event);
});

// basic form validation
function validateFormInputs(event__data) {
  let isFormValid = true;

  // check if first name and last name are filled
  if (first__name.value.trim() === "") {
    isFormValid = false;
    displayError(first__name, "First Name cannot be empty");
    console.log("hey");
  }

  // check if last name is filled
  if (last__name.value.trim() === "") {
    isFormValid = false;
    displayError(last__name, "Last Name cannot be empty");
    console.log("hey 2");
  }

  // check if email entered is valid
  if (!isEmailValid(email__data.value)) {
    isFormValid = false;
    displayError(email__data, "Looks like this is not an email");
    console.log("hey 3");
  }

  // check if password is 8 characters long
  if (password.value < 8) {
    isFormValid = false;
    displayError(password, "Password cannot be empty");
    console.log("hey 4");
  }

  if (!isFormValid) {
    event__data.preventDefault();
  }
}

// checking validity of email with regex
function isEmailValid(email) {
  const email__pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email__pattern.test(email);
}

// displaying errors
function displayError(ui__element, message) {
  let error__element = document.createElement("div");
  let error__icon = document.createElement("i");

  // setting error elements' class
  error__element.className = "error";
  ui__element.className = "error-display";

  error__element.innerText = message;
  ui__element.parentNode.insertBefore(error__element, ui__element.nextSibling);
}
