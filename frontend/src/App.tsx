import { useState } from "react";

import Home from "./home/home.tsx";
import Learn from "./learn/learn.tsx";
import Test from "./test/test.tsx";
import Translator from "./translator/translator.tsx";
import Settings from "./home/settings.tsx";
import AudioBar from "./morseAudio/audioBar.tsx";

function App() {
  const [page, setPage] = useState("home");
  const [freq, setFreq] = useState(800);
  const [volume, setVolume] = useState(0.2);
  const [wpm, setWpm] = useState(12);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [morseType, setMorseType] = useState("standard");

  return (
    <>
      <div className="nav"></div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("learn")}>Learn</button>
      <button onClick={() => setPage("test")}>Test</button>
      <button onClick={() => setPage("translator")}>Translator</button>
      <button onClick={() => setPage("settings")}>Settings</button>
      <AudioBar audioPlaying={audioPlaying} />

      <Tab
        page={page}
        freq={freq}
        setFreq={setFreq}
        volume={volume}
        setVolume={setVolume}
        wpm={wpm}
        setWpm={setWpm}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
        morseType={morseType}
        setMorseType={setMorseType}
      />
    </>
  );
}

function Tab({
  page,
  freq,
  setFreq,
  volume,
  setVolume,
  wpm,
  setWpm,
  audioPlaying,
  setAudioPlaying,
  morseType,
  setMorseType,
}) {
  switch (page) {
    case "learn":
      return (
        <Learn
          freq={freq}
          volume={volume}
          wpm={wpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
          morseType={morseType}
          setMorseType={setMorseType}
        />
      );
    case "test":
      return (
        <Test
          freq={freq}
          volume={volume}
          wpm={wpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
          morseType={morseType}
          setMorseType={setMorseType}
        />
      );
    case "translator":
      return (
        <Translator
          freq={freq}
          volume={volume}
          wpm={wpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
          morseType={morseType}
          setMorseType={setMorseType}
        />
      );
    case "settings":
      return (
        <Settings
          freq={freq}
          setFreq={setFreq}
          volume={volume}
          setVolume={setVolume}
          wpm={wpm}
          setWpm={setWpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
        />
      );
    default:
      return <Home />;
  }
}

export default App;
