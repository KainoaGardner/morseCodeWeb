import standardMaps from "../../maps/standardMaps.tsx";
import Play from "../../morseAudio/audio.tsx";

function Standard({ freq, volume, wpm, audioPlaying, setAudioPlaying }) {
  return (
    <>
      <p>Standard</p>

      <h2>Letters</h2>
      {Array.from(standardMaps.letters).map(([letter, morse], index) => (
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

      <h2>Numbers</h2>
      {Array.from(standardMaps.numbers).map(([number, morse], index) => (
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

      <h2>Symbols</h2>
      {Array.from(standardMaps.symbols).map(([symbol, morse], index) => (
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

      <h2>Prosigns</h2>
      {Array.from(standardMaps.prosigns).map(([prosign, morse], index) => (
        <div key={index}>
          <p>{prosign}</p>
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

export default Standard;
