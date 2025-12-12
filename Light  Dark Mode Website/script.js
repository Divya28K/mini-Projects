const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Save theme
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
