const videoPLayer = document.getElementById('video');

const bigPLayBtn = document.getElementById('big-play');
const smallPLayBtn = document.getElementById('small-play');
const seekBar = document.getElementById('seekBar');
const timeline = document.getElementById('timeline');
const volumeBtn =document.getElementById('volumeBtn');
const volumebar = document.getElementById('volumebar');
const volumePanel = document.getElementById('volume-control');
const volumeValue = document.getElementById('volume-shadow');
const volumeShadow = document.getElementById('volume-shadow');

let showVolume = false;

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

seekBar.addEventListener("input", () => {
    var time = videoPLayer.duration * (seekBar.value / 100);
    videoPLayer.currentTime = time;
    timeline.style.width = `${404 / videoPLayer.duration * videoPLayer.currentTime}px`;
  });

  videoPLayer.addEventListener("timeupdate", () => {
    var value = (100 / videoPLayer.duration) * videoPLayer.currentTime;
    seekBar.value = value;
    timeline.style.width = `${ 404 / videoPLayer.duration * videoPLayer.currentTime}px`;
  });

  volumeBtn.addEventListener('click', () => {
    if (videoPLayer.muted == false) {
        videoPLayer.muted = true;
        muteButton.innerHTML = "Unmute";
      } else {
        videoPLayer.muted = false;
        muteButton.innerHTML = "Mute";
      }
  })

  volumebar.addEventListener('input', () => {
    videoPLayer.volume = volumebar.value / 100;
    volumeValue.style.height = `${ 70 / 100 * volumebar.value}px`;
  })

  volumePanel.addEventListener('mouseenter', () => {
        volumebar.style.opacity = 1
        volumeShadow.style.opacity =1
  })

  volumePanel.addEventListener('mouseout', () => {
    volumebar.style.opacity = 0
    volumeShadow.style.opacity = 0
})
