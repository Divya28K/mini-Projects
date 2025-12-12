const quotes = {
    happy: [
        "Happiness is a journey, not a destination.",
        "Smile, it’s free therapy.",
        "Do more of what makes you happy."
    ],
    sad: [
        "Tough times never last, but tough people do.",
        "Every storm runs out of rain.",
        "Sadness is part of the journey to happiness."
    ],
    motivated: [
        "Believe in yourself and all that you are.",
        "Push yourself, because no one else is going to do it for you.",
        "Dream it. Wish it. Do it."
    ]
};

// Backgrounds for moods
const backgrounds = {
    happy: "url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1350&q=80')",
    sad: "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1350&q=80')",
    motivated: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1350&q=80')"
};

function generateQuote(mood) {
    // Random quote
    const moodQuotes = quotes[mood];
    const randomIndex = Math.floor(Math.random() * moodQuotes.length);
    const quoteText = moodQuotes[randomIndex];

    // Change background
    document.body.style.backgroundImage = backgrounds[mood];

    // Animate quote
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.style.opacity = 0;

    setTimeout(() => {
        document.getElementById("quoteText").textContent = quoteText;
        quoteBox.style.opacity = 1;
    }, 300);
}

// Copy quote to clipboard
document.getElementById("copyBtn").addEventListener("click", () => {
    const quote = document.getElementById("quoteText").textContent;
    navigator.clipboard.writeText(quote).then(() => {
        alert("Quote copied to clipboard!");
    });
});
