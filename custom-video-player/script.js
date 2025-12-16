const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const videoTitle = document.getElementById('video-title');

// Playlist with 2 videos
const playlist = [
  {src: 'videos/gone.mp4', title: 'gone.mp4'},
  {src: 'videos/Beautiful-Nature.mp4', title: 'Beautiful-Nature.mp4'}
];

let currentIndex = 0;

// Load first video
loadVideo(currentIndex);

function loadVideo(index) {
  video.src = playlist[index].src;
  videoTitle.textContent = playlist[index].title;
  video.load();
  video.play();
}

// Play / Pause
function toggleVideo() {
  video.paused ? video.play() : video.pause();
  updatePlayIcon();
}

function updatePlayIcon() {
  playBtn.innerHTML = video.paused
    ? '<i class="fa fa-play fa-2x"></i>'
    : '<i class="fa fa-pause fa-2x"></i>';
}

// Stop
function stopVideo() {
  video.currentTime = 0;
  video.pause();
  updatePlayIcon();
}

// Next / Previous
function nextVideo() {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadVideo(currentIndex);
}

function prevVideo() {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadVideo(currentIndex);
}

// Update progress & timestamp
function updateProgress() {
  if(!video.duration) return;
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  let secs = Math.floor(video.currentTime % 60);
  if(mins < 10) mins = '0'+mins;
  if(secs < 10) secs = '0'+secs;

  timestamp.textContent = `${mins}:${secs}`;
}

// Set progress
function setProgress() {
  video.currentTime = (+progress.value * video.duration)/100;
}

// Event listeners
playBtn.addEventListener('click', toggleVideo);
stopBtn.addEventListener('click', stopVideo);
nextBtn.addEventListener('click', nextVideo);
prevBtn.addEventListener('click', prevVideo);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setProgress);
video.addEventListener('ended', nextVideo); // auto play next video
video.addEventListener('click', toggleVideo);
