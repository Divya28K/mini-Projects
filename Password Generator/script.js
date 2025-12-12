function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?/{}[]|";

    let characters = "";
    let password = "";

    if (document.getElementById("lower").checked) characters += lower;
    if (document.getElementById("upper").checked) characters += upper;
    if (document.getElementById("number").checked) characters += numbers;
    if (document.getElementById("symbol").checked) characters += symbols;

    let length = document.getElementById("length").value;

    if (characters.length === 0) {
        document.getElementById("password").value = "Select at least one option!";
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById("password").value = password;
}
