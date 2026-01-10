// Helper function to show error
function showError(input, span, message) {
    input.classList.add("invalid"); // Turn border red
    span.textContent = message;     // Set error text
    span.style.display = "inline";  // Show the span
}

// Helper function to clear error
function clearError(input, span) {
    input.classList.remove("invalid");
    span.style.display = "none";
}

function validateAndAdd(e) {
    // 1. Stop the page from reloading
    e.preventDefault();

    // 2. Get DOM Elements
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var emailInput = document.getElementById("email");

    var nameErr = document.getElementById("nameErr");
    var ageErr = document.getElementById("ageErr");
    var emailErr = document.getElementById("emailErr");

    // 3. Define State (assume valid initially)
    var isValid = true;

    // --- Validate Name ---
    // Rule: Not empty AND Not a number
    if (nameInput.value.trim() === "") {
        showError(nameInput, nameErr, "this field is required");
        isValid = false;
    } else if (!isNaN(nameInput.value)) { // isNaN returns false if it IS a number
        showError(nameInput, nameErr, "Name should be characters");
        isValid = false;
    } else {
        clearError(nameInput, nameErr);
    }

    // --- Validate Age ---
    // Rule: Not empty AND Must be a number
    if (ageInput.value.trim() === "") {
        showError(ageInput, ageErr, "this field is required");
        isValid = false;
    } else if (isNaN(ageInput.value)) {
        showError(ageInput, ageErr, "Age must be a number");
        isValid = false;
    } else {
        clearError(ageInput, ageErr);
    }

    // --- Validate Email ---
    // Rule: Not empty AND Must contain '@' and '.'
    var emailVal = emailInput.value.trim();
    // Simple regex for email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailVal === "") {
        showError(emailInput, emailErr, "this field is required");
        isValid = false;
    } else if (!emailPattern.test(emailVal)) {
        showError(emailInput, emailErr, "Not a valid e-mail address");
        isValid = false;
    } else {
        clearError(emailInput, emailErr);
    }

    // 4. If everything is valid, ADD to Table
    if (isValid) {
        addToTable(nameInput.value, ageInput.value, emailInput.value);
        resetForm(); // Optional: clear inputs after success
    }
}

function addToTable(name, age, email) {
    var tableBody = document.querySelector("#dataTable tbody");
    
    // Create new row
    var row = document.createElement("tr");

    // Insert cells
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${email}</td>
    `;

    // Append to table
    tableBody.appendChild(row);
}

function resetForm() {
    // Clear values
    document.getElementById("userForm").reset();
    
    // Clear all red borders and error messages
    var inputs = document.querySelectorAll("input");
    var spans = document.querySelectorAll(".error-msg");
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("invalid");
    }
    for (var j = 0; j < spans.length; j++) {
        spans[j].style.display = "none";
    }
}