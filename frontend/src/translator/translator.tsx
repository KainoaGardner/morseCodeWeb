import { useState } from "react";

import MorseType from "../home/morseType.tsx";

function Translator({ morseType, setMorseType }) {
  const [toMorse, setToMorse] = useState("");
  const [fromMorse, setFromMorse] = useState("");

  return (
    <>
      <h1>Translator</h1>

      <MorseType setMorseType={setMorseType} />
      <ChooseType morseType={morseType} />

      <label htmlFor="text">Enter Text</label>
      <input
        onChange={(e) =>
          handleToMorse(e, toMorse, setToMorse, fromMorse, setFromMorse)
        }
        value={toMorse}
        type="text"
        id="text"
      />

      <label htmlFor="morse">Enter Morse code</label>
      <input
        onChange={(e) =>
          handleFromMorse(e, toMorse, setToMorse, fromMorse, setFromMorse)
        }
        value={fromMorse}
        type="text"
        id="text"
      />

      <button>Play Morse</button>
      <button onClick={() => handleClear(setToMorse, setFromMorse)}>
        Clear
      </button>
    </>
  );
}

function handleToMorse(e, toMorse, setToMorse, fromMorse, setFromMorse) {
  setToMorse(e.target.value);
}

function handleFromMorse(e, toMorse, setToMorse, fromMorse, setFromMorse) {
  setFromMorse(e.target.value);
}

function handleClear(setToMorse, setFromMorse) {
  setToMorse("");
  setFromMorse("");
}

function ChooseType({ morseType }) {
  switch (morseType) {
    case "wabun":
      return <h2>和文</h2>;
    default:
      return <h2>Standard</h2>;
  }
}

// function handleTranslate

export default Translator;
