const gameContainer = document.getElementById("game");
const movesSpan = document.getElementById("moves");
const restartBtn = document.getElementById("restart");

let moves = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Emoji pairs
const emojis = ["🍎","🍎","🍌","🍌","🍓","🍓","🍇","🍇","🍒","🍒","🥝","🥝","🍉","🍉","🍑","🍑"];

// Shuffle emojis
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    gameContainer.innerHTML = "";
    shuffle(emojis).forEach(emoji => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="inner">
                <div class="front">?</div>
                <div class="back">${emoji}</div>
            </div>
        `;

        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesSpan.textContent = moves;

    checkMatch();
}

function checkMatch() {
    let isMatch =
        firstCard.querySelector(".back").textContent ===
        secondCard.querySelector(".back").textContent;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetChoices();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetChoices();
    }, 800);
}

function resetChoices() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

restartBtn.addEventListener("click", () => {
    moves = 0;
    movesSpan.textContent = 0;
    createBoard();
});

createBoard();
