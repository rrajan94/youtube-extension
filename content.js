// content.js
const addButton = () => {
    const player = document.querySelector('.html5-video-player');
    if (player) {
      // Create your custom button
      const customButton = document.createElement('button');
      customButton.innerHTML = 'Custom Button';
  
      // Customize your button styles
      customButton.style.backgroundColor = 'blue';
      customButton.style.color = 'white';
      customButton.style.marginBottom = '10px';
  
      // Find the full-screen button
      const fullScreenButton = player.querySelector('.ytp-fullscreen-button');
      if (fullScreenButton) {
        fullScreenButton.parentNode.insertBefore(customButton, fullScreenButton.nextSibling);
      }
  
      // Add an event listener to your custom button to show video URL and timestamp
      customButton.addEventListener('click', () => {
        const videoURL = window.location.href;
        const timestamp = getCurrentTimestamp();
  
        // Display the video URL and timestamp in an alert
        alert(`Video URL: ${videoURL}\nView Timestamp: ${timestamp}`);
      });
    }
  };
  
  // Delay the execution of the addButton function to ensure the YouTube player is ready
  setTimeout(addButton, 2000); // You may need to adjust the delay based on your testing
  
  // Function to get the current timestamp from the YouTube player
  function getCurrentTimestamp() {
    // Access the YouTube player
    const player = document.querySelector('.html5-video-player');

    // Ensure that the player is available
    if (player && player.getVideoData) {
      const videoData = player.getVideoData();
      const currentTime = player.getCurrentTime();
      return formatTimestamp(currentTime);
    }
  
    return 'N/A';
  }
  
  // Function to format the timestamp in hours:minutes:seconds
  function formatTimestamp(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}:${minutes}:${secs}`;
  }
  