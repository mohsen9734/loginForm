const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

nameField.addEventListener('input', validateName);
emailField.addEventListener('input', validateEmail);
passwordField.addEventListener('input', validatePassword);

function validateName() {
  const name = nameField.value.trim();
  const lettersRegex = /^[a-zA-Z]+$/;

  if (name.length < 1) {
    nameField.style.borderColor = 'red';
    nameField.parentElement.setAttribute('data-error', 'Name field is required');
  } else if (name.length > 15) {
    nameField.style.borderColor = 'red';
    nameField.parentElement.setAttribute('data-error', 'Name must be less than 15 characters');
  } else if (!lettersRegex.test(name)) {
    nameField.style.borderColor = 'red';
    nameField.parentElement.setAttribute('data-error', 'Name can only contain letters');
  } else {
    nameField.style.borderColor = 'green';
    nameField.parentElement.removeAttribute('data-error');
  }
}

function validateEmail() {
  const email = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    emailField.style.borderColor = 'red';
    emailField.parentElement.setAttribute('data-error', 'Email field is required');
  } else if (!emailRegex.test(email)) {
    emailField.style.borderColor = 'red';
    emailField.parentElement.setAttribute('data-error', 'Invalid email format');
  } else {
    emailField.style.borderColor = 'green';
    emailField.parentElement.removeAttribute('data-error');
  }
}

function validatePassword() {
  const password = passwordField.value.trim();
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (password.length < 8) {
    passwordField.style.borderColor = 'red';
    passwordField.parentElement.setAttribute('data-error', 'Password must be at least 8 characters');
  } else if (!passwordRegex.test(password)) {
    passwordField.style.borderColor = 'red';
    passwordField.parentElement.setAttribute('data-error', 'Password must contain at least one uppercase letter, one lowercase letter, and one number');
  } else {
    passwordField.style.borderColor = 'green';
    passwordField.parentElement.removeAttribute('data-error');
  }
}
