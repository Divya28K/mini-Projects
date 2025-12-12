let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");

// Generate random colors
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Setup game
let colors = [];
for (let i = 0; i < squares.length; i++) {
    const color = randomColor();
    colors.push(color);
    squares[i].style.background = color;
}

// Pick a correct color
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
colorDisplay.textContent = pickedColor;

// Add click event
squares.forEach(square => {
    square.addEventListener("click", function () {
        if (this.style.background === pickedColor) {
            message.textContent = "Correct! 🎉";
            document.querySelector("h1").style.background = pickedColor;

            // Change all squares to winning color
            squares.forEach(sq => sq.style.background = pickedColor);

        } else {
            this.style.background = "#ccc";
            message.textContent = "Try Again!";
        }
    });
});
