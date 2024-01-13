const fieldPw = document.getElementById("pass");
const fieldCpw = document.getElementById("confirm-pass");
const signUpBtn = document.getElementById("signup-btn");

const pwdFields = document.querySelectorAll(".pw-field");

const validateForm = (password, confirmedPassword) => {
  if (password == confirmedPassword && confirmedPassword !== "") {
    console.log("matching");
    pwdFields.forEach(function (element) {
      if (element.classList.contains("not-matching")) {
        element.classList.remove("not-matching");
      }
      element.classList.add("matching");
    });
  } else if (password !== confirmedPassword && confirmedPassword !== "") {
    console.log("not-matching");
    pwdFields.forEach(function (element) {
      if (element.classList.contains("matching")) {
        element.classList.remove("matching");
      }
      element.classList.add("not-matching");
    });
  } else {
    pwdFields.forEach(function (element) {
      if (element.classList.contains("matching")) {
        element.classList.remove("matching");
      } else if (element.classList.contains("not-matching")) {
        element.classList.remove("not-matching");
      }
    });
  }
};

signUpBtn.addEventListener("click", (e) => {
  console.log(e);
});

pwdFields.forEach((field) => {
  field.addEventListener("change", (e) => {
    var passwordField = document.getElementById("pass").value;
    var confirmPasswordField = document.getElementById("confirm-pass").value;
    console.log(passwordField, confirmPasswordField);
    validateForm(passwordField, confirmPasswordField);
  });
});
