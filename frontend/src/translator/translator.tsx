import { useState, useEffect } from "react";

import MorseType from "../home/morseType.tsx";
import { TranslateToMorse, TranslateFromMorse } from "./standard.tsx";
import { Play, Timeout } from "../morseAudio/audio.tsx";

function Translator({
  freq,
  volume,
  wpm,
  audioPlaying,
  setAudioPlaying,
  morseType,
  setMorseType,
}) {
  const [toMorse, setToMorse] = useState("");
  const [fromMorse, setFromMorse] = useState("");

  useEffect(() => {
    handleClear(setToMorse, setFromMorse);
  }, [morseType]);

  return (
    <>
      <h1>Translator</h1>

      <MorseType setMorseType={setMorseType} />
      <ChooseType morseType={morseType} />

      <label htmlFor="text">Enter Text</label>
      <input
        onChange={(e) =>
          handleToMorse(
            e,
            toMorse,
            setToMorse,
            fromMorse,
            setFromMorse,
            morseType,
          )
        }
        value={toMorse}
        type="text"
        id="text"
      />

      <label htmlFor="morse">Enter Morse code</label>
      <input
        onChange={(e) =>
          handleFromMorse(
            e,
            toMorse,
            setToMorse,
            fromMorse,
            setFromMorse,
            morseType,
          )
        }
        value={fromMorse}
        type="text"
        id="text"
      />
      <p>Use (.-) or (·−)</p>

      <button
        onClick={() =>
          playMorse(
            fromMorse,
            volume,
            freq,
            "sine",
            wpm,
            audioPlaying,
            setAudioPlaying,
          )
        }
      >
        Play Morse
      </button>
      <button onClick={() => handleClear(setToMorse, setFromMorse)}>
        Clear
      </button>
    </>
  );
}

function handleToMorse(
  e,
  toMorse,
  setToMorse,
  fromMorse,
  setFromMorse,
  morseType,
) {
  setToMorse(e.target.value);

  if (morseType === "wabun") {
    // setFromMorse(StandardTranslate(e.target.value, fromMorse, morseType));
  } else {
    setFromMorse(TranslateToMorse(e.target.value));
  }
}

function handleFromMorse(
  e,
  toMorse,
  setToMorse,
  fromMorse,
  setFromMorse,
  morseType,
) {
  let input = e.target.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") {
      input = setCharAt(input, i, "·");
    } else if (input[i] === "-") {
      input = setCharAt(input, i, "−");
    }
  }
  setFromMorse(input);

  if (morseType === "wabun") {
    // setFromMorse(StandardTranslate(e.target.value, fromMorse, morseType));
  } else {
    setToMorse(TranslateFromMorse(input));
  }
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function handleClear(setToMorse, setFromMorse) {
  setToMorse("");
  setFromMorse("");
}

async function playMorse(
  fromMorse,
  volume,
  freq,
  type,
  wpm,
  audioPlaying,
  setAudioPlaying,
) {
  const duration = (60 / (50 * wpm)) * 1000;
  const words = fromMorse.split(" ");
  for (let i = 0; i < words.length; i++) {
    await Play(
      words[i],
      volume,
      freq,
      type,
      wpm,
      audioPlaying,
      setAudioPlaying,
    );
    if (i !== words.length - 1) {
      await Timeout(duration * 3);
    }
  }
}

function ChooseType({ morseType }) {
  switch (morseType) {
    case "wabun":
      return <h2>和文</h2>;
    default:
      return <h2>Standard</h2>;
  }
}

export default Translator;
