// Create an audio object
const audio = new Audio('/UEditor_Untitled_Project_V1_1.mp3');

// Set audio properties
audio.loop = true; // Enable looping

// Function to play audio on mousemove
function playAudioOnMouseMove() {
  audio.play().then(() => {
    console.log("Audio is playing");
    // Remove the event listener once the audio starts playing
    document.removeEventListener('mousemove', playAudioOnMouseMove);
  }).catch((error) => {
    console.error("Audio play failed:", error);
  });
}

// Add the event listener
document.addEventListener('mousemove', playAudioOnMouseMove);
