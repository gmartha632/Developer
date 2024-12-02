let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let Cpassword = document.getElementById("C_password");

form.addEventListener("submit", (event) => {
  if (!validateInputs()) {
    event.preventDefault();
  }
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const CpasswordVal = Cpassword.value.trim();
  let success = true;
  if (usernameVal == "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, "Password must be atleast 8 characters long");
  } else {
    setSuccess(password);
  }

  if (CpasswordVal === "") {
    success = false;
    setError(Cpassword, " Confirm Password is required");
  } else if (CpasswordVal !== passwordVal) {
    success = false;
    setError(Cpassword, "Password does not match");
  } else {
    setSuccess(Cpassword);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message ;
  // inputGroup.classList.add("error");
  // inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  // inputGroup.classList.add("success");
  // inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
