const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function timeout(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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

async function Play(
  word: string,
  volume: number,
  freq: number,
  type: string,
  wpm: number,
  audioPlaying: bool,
  setAudioPlaying,
) {
  if (audioPlaying) {
    return;
  }

  setAudioPlaying(true);

  if (word === "/") {
    await timeout(duration * 7);
  } else if (word === " ") {
    await timeout(duration * 3);
  } else {
    const duration = (60 / (50 * wpm)) * 1000;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === "·") {
        beep(volume, freq, type, duration);
        await timeout(duration * 2);
      } else if (word[i] === "−") {
        beep(volume, freq, type, duration * 3);
        await timeout(duration * 4);
      }
    }
  }

  setAudioPlaying(false);
}

export default Play;
