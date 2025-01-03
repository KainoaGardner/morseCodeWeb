import Play from "../morseAudio/audio.tsx";

function Settings({ freq, setFreq, volume, setVolume, duration, setDuration }) {
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

      <label htmlFor="duration">Dot Duration</label>
      <input
        id="duration"
        type="range"
        min="0"
        max="5000"
        onChange={(e) => setDuration(e.target.value)}
      />
      <p>{duration} ms</p>

      <button onClick={() => Play("···", volume, freq, "sine", duration)}>
        Letter Test
      </button>
    </>
  );
}

export default Settings;
