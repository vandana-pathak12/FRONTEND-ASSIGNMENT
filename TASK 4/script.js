const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();


    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

 
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        name.classList.add("error-border");
        isValid = false;
    } else {
        nameError.textContent = "";
        name.classList.remove("error-border");
        name.classList.add("success");
    }

    
    if (!email.value.includes("@")) {
        emailError.textContent = "Invalid email";
        email.classList.add("error-border");
        isValid = false;
    } else {
        emailError.textContent = "";
        email.classList.remove("error-border");
        email.classList.add("success");
    }


    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        password.classList.add("error-border");
        isValid = false;
    } else {
        passwordError.textContent = "";
        password.classList.remove("error-border");
        password.classList.add("success");
    }


    if (isValid) {
        alert("Form submitted successfully!");
    }
});
