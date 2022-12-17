"use strict";
// registracion form
let regForm = document.getElementById("reg-form");

regForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let userNameValue = document.getElementById("userNameField").value;
  if (userNameValue == "") {
    errors.username = "Enter Username";
  }
  let passwordValue = document.getElementById("passwordField").value;
  let passwordValue2 = document.getElementById("passwordFildRepeat").value;
  if (passwordValue != passwordValue2) {
    errors.password2 = "Passwords do NOT match";
  }
  if (passwordValue == "") {
    errors.password = "Enter your password";
  }
  let agreeField = document.getElementById("agreeTearms").checked;
  if (!agreeField) {
    errors.agree = "You mast agree with tearsm and conditions";
  }
  document.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });
  for (let key in errors) {
    let spanText = document.getElementById("error_" + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }
    if (Object.keys(errors).length == 0) {
        regForm.submit();
    }
});

let password = document.getElementById('passwordField');
let icon = document.getElementById('passicon');

icon.addEventListener('click', function() {
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        password.setAttribute('type', 'password');
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});
let password2 = document.getElementById('passwordFildRepeat');
let icon2 = document.getElementById('passicon2');

icon2.addEventListener('click', function() {
    if (password2.type == 'password') {
        password2.setAttribute('type', 'text');
        icon2.classList.remove('fa-eye');
        icon2.classList.add('fa-eye-slash');
    } else {
        password2.setAttribute('type', 'password');
        icon2.classList.remove('fa-eye-slash');
        icon2.classList.add('fa-eye');
    }
});
