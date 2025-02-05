function createSpeedAdjuster() {
    const speedAdjuster = document.createElement('div');
    speedAdjuster.id = 'speed-adjuster';
    speedAdjuster.innerHTML = `
      <label for="speed-input">Playback Speed:</label>
      <input type="number" id="speed-input" min="0.1" max="16" step="0.1" value="1">
    `;
    document.body.appendChild(speedAdjuster);
  
    const speedInput = document.getElementById('speed-input');
    speedInput.addEventListener('change', function() {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = parseFloat(this.value);
      }
    });
  }
  
  function checkForVideo() {
    if (document.querySelector('video') && !document.getElementById('speed-adjuster')) {
      createSpeedAdjuster();
    }
  }
  
  // Check for video every second
  setInterval(checkForVideo, 1000);