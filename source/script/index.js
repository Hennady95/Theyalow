const videoPLayer = document.getElementById('video');

const bigPLayBtn = document.getElementById('big-play');
const smallPLayBtn = document.getElementById('small-play');
const seekBar = document.getElementById('seekBar');
const timeline = document.getElementById('timeline');

bigPLayBtn.addEventListener('click', event => {
    event.preventDefault();
    if(videoPLayer.paused) {
        videoPLayer.play();
    } else {
        videoPLayer.pause();
    }
    bigPLayBtn.style.opacity = 0;
})

smallPLayBtn.addEventListener('click', event => {
    event.preventDefault();
    if(videoPLayer.paused) {
        videoPLayer.play();
        bigPLayBtn.style.opacity = 0;
    } else {
        videoPLayer.pause();
        bigPLayBtn.style.opacity = 0.7;
    }
})

seekBar.addEventListener("change", () => {
    // Calculate the new time
    var time = videoPLayer.duration * (seekBar.value / 100);
    // Update the video time
    videoPLayer.currentTime = time;
    timeline.style.width = `${404 / videoPLayer.duration * videoPLayer.currentTime}px`;
  });

  videoPLayer.addEventListener("timeupdate", () => {
    // Calculate the slider value
    var value = (100 / videoPLayer.duration) * videoPLayer.currentTime;
  
    // Update the slider value
    seekBar.value = value;
    timeline.style.width = `${ 404 / videoPLayer.duration * videoPLayer.currentTime}px`;
  });