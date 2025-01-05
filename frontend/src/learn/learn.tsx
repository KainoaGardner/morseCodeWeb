import { useState } from "react";
import MorseType from "../home/morseType.tsx";
import Standard from "./standard/standard.tsx";
import Wabun from "./wabun/wabun.tsx";

function Learn({ freq, volume, wpm, audioPlaying, setAudioPlaying }) {
  const [morseType, setMorseType] = useState("standard");

  return (
    <>
      <h1>Learn</h1>
      <MorseType setMorseType={setMorseType} />
      <ChooseType
        morseType={morseType}
        freq={freq}
        volume={volume}
        wpm={wpm}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
      />
    </>
  );
}

function ChooseType({
  morseType,
  freq,
  volume,
  wpm,
  audioPlaying,
  setAudioPlaying,
}) {
  switch (morseType) {
    case "wabun":
      return (
        <Wabun
          freq={freq}
          volume={volume}
          wpm={wpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
        />
      );
    default:
      return (
        <Standard
          freq={freq}
          volume={volume}
          wpm={wpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
        />
      );
  }
}

export default Learn;
