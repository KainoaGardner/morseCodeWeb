import { useState } from "react";
import MorseType from "../home/morseType.tsx";
import SingleLetter from "./singleLetter.tsx";

function Test({
  freq,
  volume,
  wpm,
  audioPlaying,
  setAudioPlaying,
  morseType,
  setMorseType,
}) {
  const [type, setType] = useState("letter");

  return (
    <>
      <MorseType setMorseType={setMorseType} />
      <Type
        type={type}
        freq={freq}
        volume={volume}
        wpm={wpm}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
        morseType={morseType}
      />
    </>
  );
}

function Type({
  type,
  freq,
  volume,
  wpm,
  audioPlaying,
  setAudioPlaying,
  morseType,
}) {
  switch (type) {
    case "read":
      return <h1>Read</h1>;
    case "write":
      return <h1>Write</h1>;

    default:
      return (
        <SingleLetter
          freq={freq}
          volume={volume}
          wpm={wpm}
          audioPlaying={audioPlaying}
          setAudioPlaying={setAudioPlaying}
          morseType={morseType}
        />
      );
  }
}

export default Test;
