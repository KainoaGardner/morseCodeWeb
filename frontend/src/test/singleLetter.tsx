import { useState, useEffect } from "react";
import standardMaps from "../maps/standardMaps.tsx";
import wabunMaps from "../maps/wabunMaps.tsx";
import { Play } from "../morseAudio/audio.tsx";

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

  const [answer, setAnswer] = useState("");

  const [multiChoice, setMultiChoice] = useState(false);

  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    Play(word, volume, freq, "sine", wpm, audioPlaying, setAudioPlaying);
  }, [word]);

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
          onChange={(e) =>
            handleSettingChange(
              "letters",
              e,
              setLetters,
              setNumbers,
              setSymbols,
              setProsigns,
              morseType,
              fromMorse,
              letters,
              numbers,
              symbols,
              prosigns,
              setWord,
            )
          }
          defaultChecked={letters}
        />
        <label htmlFor="letters">Letters</label>
        <input
          type="checkbox"
          id="numbers"
          onChange={(e) =>
            handleSettingChange(
              "numbers",
              e,
              setLetters,
              setNumbers,
              setSymbols,
              setProsigns,
              morseType,
              fromMorse,
              letters,
              numbers,
              symbols,
              prosigns,
              setWord,
            )
          }
          defaultChecked={numbers}
        />
        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          id="symbols"
          onChange={(e) =>
            handleSettingChange(
              "symbols",
              e,
              setLetters,
              setNumbers,
              setSymbols,
              setProsigns,
              morseType,
              fromMorse,
              letters,
              numbers,
              symbols,
              prosigns,
              setWord,
            )
          }
          defaultChecked={symbols}
        />
        <label htmlFor="symbols">Symbols</label>
        <input
          type="checkbox"
          id="prosigns"
          onChange={(e) =>
            handleSettingChange(
              "prosigns",
              e,
              setLetters,
              setNumbers,
              setSymbols,
              setProsigns,
              morseType,
              fromMorse,
              letters,
              numbers,
              symbols,
              prosigns,
              setWord,
            )
          }
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

      <h3>{word}</h3>
      <button
        onClick={() =>
          Play(word, volume, freq, "sine", wpm, audioPlaying, setAudioPlaying)
        }
      >
        Play Audio
      </button>

      <AnswerBox
        correct={correct}
        setCorrect={setCorrect}
        answered={answered}
        setAnswered={setAnswered}
        answer={answer}
        setAnswer={setAnswer}
        word={word}
        setWord={setWord}
        score={score}
        setScore={setScore}
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
        morseType={morseType}
        fromMorse={fromMorse}
        letters={letters}
        numbers={numbers}
        symbols={symbols}
        prosigns={prosigns}
      />
    </>
  );
}

function handleSettingChange(
  setting,
  e,
  setLetters,
  setNumbers,
  setSymbols,
  setProsigns,
  morseType,
  fromMorse,
  letters,
  numbers,
  symbols,
  prosigns,
  setWord,
) {
  setWord(getWord(morseType, fromMorse, letters, numbers, symbols, prosigns));
  switch (setting) {
    case "letters":
      setLetters(e.target.checked);
      break;
    case "numbers":
      setNumbers(e.target.checked);
      break;
    case "symbols":
      setSymbols(e.target.checked);
      break;
    case "prosigns":
      setProsigns(e.target.checked);
      break;
  }
}

function handleAnswerText(e, setAnswer) {
  setAnswer(e.target.value);
}

function handleAnswer(
  answered,
  setAnswered,
  answer,
  setAnswer,
  word,
  setWord,
  score,
  setScore,
  questionCount,
  setQuestionCount,
  setCorrect,
) {
  setQuestionCount(questionCount + 1);
  setAnswered(!answered);

  answer = answer.toUpperCase();

  if (
    word === standardMaps.letters.get(answer) ||
    word === standardMaps.numbers.get(answer) ||
    word === standardMaps.symbols.get(answer) ||
    word === standardMaps.prosigns.get(answer)
  ) {
    setScore(score + 1);
    setCorrect(true);
  } else {
    setCorrect(false);
  }
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

function nextWord(
  setAnswer,
  setAnswered,
  setWord,
  morseType,
  fromMorse,
  letters,
  numbers,
  symbols,
  prosigns,
) {
  setWord(getWord(morseType, fromMorse, letters, numbers, symbols, prosigns));
  setAnswer("");
  setAnswered(false);
}

function AnswerBox({
  correct,
  setCorrect,
  answered,
  setAnswered,
  answer,
  setAnswer,
  word,
  setWord,
  score,
  setScore,
  questionCount,
  setQuestionCount,
  morseType,
  fromMorse,
  letters,
  numbers,
  symbols,
  prosigns,
}) {
  let wordAnswer;

  if (standardMaps.lettersR.has(word)) {
    wordAnswer = standardMaps.lettersR.get(word);
  } else if (standardMaps.numbersR.has(word)) {
    wordAnswer = standardMaps.numbersR.get(word);
  } else if (standardMaps.symbolsR.has(word)) {
    wordAnswer = standardMaps.symbolsR.get(word);
  } else if (standardMaps.prosignsR.has(word)) {
    wordAnswer = standardMaps.prosignsR.get(word);
  }

  switch (answered) {
    case true:
      if (correct) {
        return (
          <>
            <h3>{wordAnswer}</h3>
            <h3>Correct</h3>
            <button
              onClick={() =>
                nextWord(
                  setAnswer,
                  setAnswered,
                  setWord,
                  morseType,
                  fromMorse,
                  letters,
                  numbers,
                  symbols,
                  prosigns,
                )
              }
            >
              Continue
            </button>
          </>
        );
      } else {
        return (
          <>
            <h3>{wordAnswer}</h3>
            <h3>Incorrect</h3>
            <button
              onClick={() =>
                nextWord(
                  setAnswer,
                  setAnswered,
                  setWord,
                  morseType,
                  fromMorse,
                  letters,
                  numbers,
                  symbols,
                  prosigns,
                )
              }
            >
              Continue
            </button>
          </>
        );
      }

    case false:
      return (
        <>
          <input
            type="text"
            name="answer"
            onInput={(e) => handleAnswerText(e, setAnswer)}
            value={answer}
          />
          <button
            onClick={() =>
              handleAnswer(
                answered,
                setAnswered,
                answer,
                setAnswer,
                word,
                setWord,
                score,
                setScore,
                questionCount,
                setQuestionCount,
                setCorrect,
              )
            }
          >
            Answer
          </button>
        </>
      );
  }
}

function Mode({ fromMorse }) {
  switch (fromMorse) {
    default:
      return <h2>fromMorse</h2>;
  }
}

export default SingleLetter;
