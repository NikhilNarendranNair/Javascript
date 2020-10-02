const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//shows Error if we make mistake while filling form
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//shows green outline based on css if we fill form properly
function showSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}
//This function will validate if we had input all fields of forms
function validate(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "")
      showError(input, `${returnField(input)} is required`);
    else showSucess(input);
  });
}

function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucess(input);
  } else {
    showError(input, `${returnField(input)} is not Valid`);
  }
}

function returnField(input) {
  return input.id[0].toUpperCase() + input.id.slice(1);
  //This can also be done by : return input.id.charAt(0).toUppercase and so on
}

function checkPasswordMatch(input1, input2) {
  if (input1 !== input2) {
    showError(input2, "Password's don't match");
  } else {
    showSucess(input2);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validate([username, email, password, password2]);
  validateEmail(email);
  checkPasswordMatch(password, password2);
});
