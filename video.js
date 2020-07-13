var video = document.getElementByID("videoID");

async function startPlaying(){
  await video.load();
  video.play();
}
startPlaying();

