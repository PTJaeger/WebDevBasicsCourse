// index.js
// Author: Santeri Saari
// Date: 13-11-2025

//Set timestamp, get cell values and append row to table
function createRow() {
    const today = new Date();
    document.getElementById("timeStamp").value = today.toISOString();
    var timeStamp = document.getElementById("timeStamp").value;
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var birthDate = document.getElementById("birthDate").value;
    // Validation redundancy checks
    if (fullName === "" || email === "" || phoneNumber === "" || birthDate === "") {
        alert("Please fill in all fields.");
        return false;
    }
    if (!document.getElementById("accept").checked) {
        alert("Accept the terms and conditions.");
        return false;
    }
    
    else {
        var newRow= ""; 
        
        newRow="<tr><td>" + timeStamp + "</td><td>" + fullName + "</td><td>" + email + "</td><td>" + phoneNumber + "</td><td>" + birthDate + "</td></tr>";
        document.getElementById("tableBody").innerHTML += newRow;
    }
    

    
 }


document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("addInformationForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phoneNumber");

  fullName.addEventListener("input", (event) => {
    if (fullName.validity.tooShort || fullName.validity.tooLong) {
        fullName.setCustomValidity("Valid name must be between 5 and 50 characters long.");
    } else {
        fullName.setCustomValidity("");
    }
    });

  phoneNumber.addEventListener("input", (event) => {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumber.setCustomValidity("Enter a number that conforms to the pattern +XXX-XX-XXX-XXXX.");
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
