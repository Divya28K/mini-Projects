// Art prompts array
const prompts = [
  "Draw a cat surfing on the moon 🌙",
  "A robot baking cupcakes in space",
  "An octopus playing the piano underwater",
  "A dinosaur wearing sunglasses and riding a skateboard",
  "A flying elephant with rainbow wings",
  "A squirrel as a medieval knight",
  "A futuristic city made of candy",
  "A dragon sipping coffee at a café",
  "A penguin DJ at a rave",
  "A giant snail painting a landscape"
];

// Saved prompts
let savedPrompts = JSON.parse(localStorage.getItem('savedPrompts')) || [];
const savedList = document.getElementById("savedList");

// Display saved prompts
function renderSaved() {
  savedList.innerHTML = "";
  savedPrompts.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = p;
    savedList.appendChild(li);
  });
}
renderSaved();

// Generate prompt
function generatePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  const promptText = prompts[randomIndex];

  const promptBox = document.getElementById("promptBox");
  promptBox.style.opacity = 0;

  setTimeout(() => {
    document.getElementById("promptText").textContent = promptText;
    promptBox.style.opacity = 1;
    changeBackground();
    launchConfetti();
  }, 300);
}

// Copy prompt
document.getElementById("copyBtn").addEventListener("click", () => {
  const prompt = document.getElementById("promptText").textContent;
  navigator.clipboard.writeText(prompt).then(() => alert("Prompt copied!"));
});

// Save prompt
document.getElementById("saveBtn").addEventListener("click", () => {
  const prompt = document.getElementById("promptText").textContent;
  if (!savedPrompts.includes(prompt)) {
    savedPrompts.push(prompt);
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    renderSaved();
    alert("Prompt saved!");
  }
});

// Share prompt (Twitter)
document.getElementById("shareBtn").addEventListener("click", () => {
  const prompt = document.getElementById("promptText").textContent;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(prompt)}`, "_blank");
});

// Change gradient background
function changeBackground() {
  const colors = [
    ['#ff7e5f','#feb47b'],
    ['#43cea2','#185a9d'],
    ['#ff9966','#ff5e62'],
    ['#00c6ff','#0072ff'],
    ['#f7971e','#ffd200']
  ];
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(120deg, ${randomColors[0]}, ${randomColors[1]})`;
}

// Simple confetti animation
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  for (let i=0; i<100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random()*6+2,
      d: Math.random()*20+10,
      color: `hsl(${Math.random()*360}, 100%, 50%)`,
      tilt: Math.random()*10-10
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.r*2);
      ctx.stroke();
      c.y += Math.sin(frame/10)+1+c.d/10;
      c.x += Math.sin(frame/10);
      if (c.y > canvas.height) c.y = -10;
    });
    frame++;
    if(frame < 50) requestAnimationFrame(draw);
  }
  draw();
}
