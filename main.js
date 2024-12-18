let input = document.querySelector("input");
let submit = document.querySelector("button");
let errorText = document.querySelector(".error-text");

submit.addEventListener('click', () => {
  const valid = validateEmail(input.value);  
  if (valid) {
    input.value = "";
    errorText.style.display = "none";
  } else {
    errorText.style.display = "block";
    input.style.borderColor = "var(--light-red)";
  }
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
