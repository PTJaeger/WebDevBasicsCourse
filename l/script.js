
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("orderForm");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phonenumber");

  fullName.addEventListener("input", (event) => {
    if (fullName.validity.tooShort || fullName.validity.tooLong) {
        fullName.setCustomValidity("Valid name must be between 5 and 50 characters long.");
    } else {
        fullName.setCustomValidity("");
    }
    });

  phoneNumber.addEventListener("input", (event) => {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumber.setCustomValidity("Invalid phone number. Format: +2-4 digits - 2-4 digits - 2-4 digits - 2-4 digits (e.g., +358-44-234-5450).");
    } else {
        phoneNumber.setCustomValidity("");
    }
    });

  email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }
    });

  
        

  form.addEventListener("submit", (event) => {
    event.preventDefault();

   

    // Reset form and focus
    form.reset();
    fullName.focus();
  });
});
