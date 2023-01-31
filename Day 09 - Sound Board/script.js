const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelector('#buttons');


function interruptAllSounds() {
  sounds.forEach(soundName => {
    const sound = document.getElementById(soundName);
    sound.pause();
    sound.currentTime = 0;
  });
}


sounds.forEach(soundName => {

  const button = document.createElement('button');

  button.innerText = soundName;

  button.addEventListener('click', () => {
    interruptAllSounds();
    document.getElementById(soundName).play();
  });

  buttons.appendChild(button);

});
