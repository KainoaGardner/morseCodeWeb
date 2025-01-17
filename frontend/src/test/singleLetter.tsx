import { useState } from "react";
import standardMaps from "../maps/standardMaps.tsx";
import wabunMaps from "../maps/wabunMaps.tsx";

function SingleLetter({
  morseType,
  freq,
  volume,
  wpm,
  audioPlaying,
  setAudioPlaying,
}) {
  const [fromMorse, setFromMorse] = useState(true);
  const [audio, setAudio] = useState(true);

  const [letters, setLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [prosigns, setProsigns] = useState(true);

  const [word, setWord] = useState(
    getWord(morseType, fromMorse, letters, numbers, symbols, prosigns),
  );

  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const [multiChoice, setMultiChoice] = useState(false);

  return (
    <>
      <h1>Single Letter</h1>
      <Mode fromMorse={fromMorse} />

      <p>
        {score} / {questionCount}
      </p>

      <div>
        <input
          type="checkbox"
          id="letters"
          onChange={(e) => setLetters(e.target.checked)}
          defaultChecked={letters}
        />
        <label htmlFor="letters">Letters</label>
        <input
          type="checkbox"
          id="numbers"
          onChange={(e) => setNumbers(e.target.checked)}
          defaultChecked={numbers}
        />
        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          id="symbols"
          onChange={(e) => setSymbols(e.target.checked)}
          defaultChecked={symbols}
        />
        <label htmlFor="symbols">Symbols</label>
        <input
          type="checkbox"
          id="prosigns"
          onChange={(e) => setProsigns(e.target.checked)}
          defaultChecked={prosigns}
        />
        <label htmlFor="prosigns">Prosigns</label>

        <button onClick={() => setFromMorse(!fromMorse)}>
          {fromMorse ? "From Morse" : "To Morse"}
        </button>
      </div>

      <p>{letters ? "letters" : "no"}</p>
      <p>{numbers ? "numbers" : "no"}</p>
      <p>{symbols ? "symbols" : "no"}</p>
      <p>{prosigns ? "pro" : "no"}</p>

      <button
        onClick={() =>
          setWord(
            getWord(morseType, fromMorse, letters, numbers, symbols, prosigns),
          )
        }
      >
        Test
      </button>

      <h3>{word}</h3>
      <form onSubmit={(e) => handleAnswer(e)}>
        <input type="text" name="answer" />
        <button type="submit">Answer</button>
      </form>
    </>
  );
}

function handleAnswer(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log(formData.get("answer"));
}

function getWord(morseType, fromMorse, letters, numbers, symbols, prosigns) {
  let array = [];
  if (morseType == "wabun") {
    if (letters) {
      array = array.concat(Array.from(wabunMaps.moji));
    }
    if (numbers) {
      array = array.concat(Array.from(wabunMaps.suuji));
    }
    if (symbols) {
      array = array.concat(Array.from(wabunMaps.kigou));
    }
  } else {
    if (letters) {
      array = array.concat(Array.from(standardMaps.letters));
    }
    if (numbers) {
      array = array.concat(Array.from(standardMaps.numbers));
    }
    if (symbols) {
      array = array.concat(Array.from(standardMaps.symbols));
    }
    if (prosigns) {
      array = array.concat(Array.from(standardMaps.prosigns));
    }
  }

  if (array.length === 0) {
    return "";
  }

  const word = array[Math.floor(Math.random() * array.length)];

  if (fromMorse) {
    return word[1];
  } else {
    return word[0];
  }
}

function Mode({ fromMorse }) {
  switch (fromMorse) {
    default:
      return <h2>fromMorse</h2>;
  }
}

export default SingleLetter;
