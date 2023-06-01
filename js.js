// function playSound(animal) {
//     document.getElementById(animal).play();
//   };
 
function playSound(animal) {
    var audioElement = document.getElementById(animal);
    var textElement = document.getElementById(animal + "-text");
  
    if (audioElement.paused) {
      audioElement.play();
      textElement.style.display = "block"; // Show the text
    } else {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset the audio to the beginning
      textElement.style.display = "none"; // Hide the text
    }
  }