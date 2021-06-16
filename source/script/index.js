const videoPLayer = document.getElementById('video');

const bigPLayBtn = document.getElementById('big-play');
const seekBar = document.getElementById('seekBar');
const timeline = document.getElementById('timeline');
const volumeBtn =document.getElementById('volumeBtn');
const volumebar = document.getElementById('volumebar');
const volumePanel = document.getElementById('volume-control');
const volumeValue = document.getElementById('volume-shadow');
const volumeShadow = document.getElementById('volume-shadow');
const bigPlayShadow = document.getElementById('video-shadow');

const videoContainer = document.querySelector('.video-container'); 

let showVolume = false;
let lastVolumeValue = 0;

videoContainer.addEventListener('click', event => {
  event.preventDefault();
  if(event.target.className === 'video-shadow' || event.target.className === 'big-play-btn' || event.target.className === 'mini-play-btn') {
      if(videoPLayer.paused) {
        videoPLayer.play();
        bigPlayShadow.style.opacity = 0;
    } else {
        videoPLayer.pause();
        bigPlayShadow.style.opacity = 1;
    }
  }
  if(event.target.className === 'volume-btn') {
    if (videoPLayer.muted == false) {
      videoPLayer.muted = true;
      volumeBtn.style.background = "url('../source/img/close_volume_icon.png')";
      lastVolumeValue = volumebar.value;
      volumeValue.style.height = '0px';
    } else {
      videoPLayer.muted = false;
      volumeBtn.style.background = "url('../source/img/volume_icon.png')";
      volumeValue.style.height = `${70 / 100 * lastVolumeValue}px`;
    }
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