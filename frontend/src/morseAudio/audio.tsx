const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//THIS IS BAD I SHOULDNT RESET THE VARIBLES EVERY SINGLE DOT
function beep(volume: number, freq: number, type: string, duration: number) {
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  gain.gain.value = volume;
  oscillator.frequency.value = freq;
  oscillator.type = type;

  oscillator.start();

  setTimeout(function () {
    oscillator.stop();
  }, duration);
}

function Play(
  word: string,
  volume: number,
  freq: number,
  type: string,
  duration: number,
) {
  let i = 0;
  const len = word.length - 1;
  let tempDuration = duration;

  const intervalId = setInterval(() => {
    if (i === len) {
      clearInterval(intervalId);
    }
    if (word[i] === "·") {
      beep(volume, freq, type, duration);
      tempDuration = duration;
    } else if (word[i] === "−") {
      beep(volume, freq, type, duration * 3);
      tempDuration = duration * 3;
    }
    console.log(word[i]);
    i++;
  }, tempDuration + duration);
}

export default Play;
