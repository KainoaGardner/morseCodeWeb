import { Play } from "../morseAudio/audio.tsx";

function Settings({
  freq,
  setFreq,
  volume,
  setVolume,
  wpm,
  setWpm,
  audioPlaying,
  setAudioPlaying,
}) {
  return (
    <>
      <h1>Audio</h1>
      <label htmlFor="freq">Freq</label>
      <input
        id="freq"
        type="range"
        min="100"
        max="1600"
        onChange={(e) => setFreq(e.target.value)}
      />
      <p>{freq}</p>

      <label htmlFor="volume">Volume</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        onChange={(e) => setVolume(e.target.value / 100)}
      />
      <p>{volume}</p>

      <label htmlFor="duration">Words per minute</label>
      <input
        id="duration"
        type="range"
        min="0"
        max="50"
        onChange={(e) => setWpm(e.target.value)}
      />
      <p>{wpm} wpm</p>

      <button
        onClick={() =>
          Play(
            "·−·−·−",
            volume,
            freq,
            "sine",
            wpm,
            audioPlaying,
            setAudioPlaying,
          )
        }
      >
        Letter Test
      </button>
    </>
  );
}

export default Settings;
