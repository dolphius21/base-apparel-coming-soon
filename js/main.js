const emailInput = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");
const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

function validate(email, regex) {
  if (regex.test(email.value)) {
    email.classList.add('valid');
    email.classList.remove('invalid');
    errorIcon.style.display = "none";
    errorMessage.style.top = "10px";
  } else {
    email.classList.add('invalid')
    email.classList.remove('valid');
    errorIcon.style.display = "block";
    errorMessage.style.top = "55px";
  }
}


emailInput.addEventListener('keyup', (e) => {
    validate(e.target, emailRegex);
});
