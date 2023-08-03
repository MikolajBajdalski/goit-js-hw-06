const loginForm = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = {};

  let allFieldsFilled = true;
  for (const [name, value] of formData.entries()) {
    if (!value) {
      allFieldsFilled = false;
      break;
    }
    formValues[name] = value;
  }

  if (allFieldsFilled) {
    console.log("Form values:", formValues);
    loginForm.reset();
  } else {
    alert("Wszystkie pola powinny być wypełnione!");
  }
};

loginForm.addEventListener("submit", handleSubmit);
