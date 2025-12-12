function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Confirm modal functionality
function confirmAction() {
    alert("Action confirmed!");
    closeModal('confirmModal');
}

// Form modal functionality
function submitForm() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful!");
    closeModal('formModal');
}
