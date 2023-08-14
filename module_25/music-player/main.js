// I got this idea from ChatGPT

const audioTracks = [
  {src: "music/come-with-me-133764.mp3", title:"Come With Me"},
  {src: "music/for-future-bass-159125.mp3", title:"For Future Bass"},
  {src: "music/good-night-160166.mp3", title: "Good Night"},
  {src: "music/lofi-chill-medium-version-159456.mp3", title: "Lofi Chill"},
  // Add more audio track URLs here
];

// Extract from Object
let currentTrackIndex = 0;
const audioElement = document.getElementById("music-player");
const trackTitleElement = document.getElementById('track-title');

audioElement.addEventListener('play', function() {
  document.getElementById('play').disabled = true;
  document.getElementById('pause').disabled = false;
});
audioElement.addEventListener('pause', function(){
  document.getElementById('play').disabled = false;
  document.getElementById('pause').disabled = true;
});

document.getElementById('play').addEventListener('click', function() {
  audioElement.play();
});

document.getElementById('pause').addEventListener('click', function(){
  audioElement.pause();
});
document.getElementById('next').addEventListener('click', function(){
  currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
  updateTrackTitle();
  audioElement.src = audioTracks[currentTrackIndex].src;
  audioElement.play();
});
document.getElementById('previous').addEventListener('click', function(){
  currentTrackIndex = (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
  updateTrackTitle();
  audioElement.src = audioTracks[currentTrackIndex].src;
  audioElement.play();
});

function updateTrackTitle() {
  trackTitleElement.textContent = audioTracks[currentTrackIndex].title;
}
updateTrackTitle();
