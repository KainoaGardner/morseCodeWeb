import wabunMaps from "../maps/wabunMaps.tsx";
import { Play } from "../morseAudio/audio.tsx";

function Wabun({ freq, volume, wpm, audioPlaying, setAudioPlaying }) {
  return (
    <>
      <p>和文</p>

      <h2>文字</h2>
      {Array.from(wabunMaps.moji).map(([letter, morse], index) => (
        <div key={index}>
          <p>{letter}</p>
          <p>{morse}</p>
          <button
            onClick={() =>
              Play(
                morse,
                volume,
                freq,
                "sine",
                wpm,
                audioPlaying,
                setAudioPlaying,
              )
            }
          >
            Play
          </button>
        </div>
      ))}

      <h2>数字</h2>
      {Array.from(wabunMaps.suuji).map(([number, morse], index) => (
        <div key={index}>
          <p>{number}</p>
          <p>{morse}</p>
          <button
            onClick={() =>
              Play(
                morse,
                volume,
                freq,
                "sine",
                wpm,
                audioPlaying,
                setAudioPlaying,
              )
            }
          >
            Play
          </button>
        </div>
      ))}

      <h2>記号</h2>
      {Array.from(wabunMaps.kigou).map(([symbol, morse], index) => (
        <div key={index}>
          <p>{symbol}</p>
          <p>{morse}</p>
          <button
            onClick={() =>
              Play(
                morse,
                volume,
                freq,
                "sine",
                wpm,
                audioPlaying,
                setAudioPlaying,
              )
            }
          >
            Play
          </button>
        </div>
      ))}
    </>
  );
}

export default Wabun;
