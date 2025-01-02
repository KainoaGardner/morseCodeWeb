import { useState } from "react";
import MorseType from "../home/morseType.tsx";
import Standard from "./standard/standard.tsx";
import Wabun from "./wabun/wabun.tsx";

function Learn() {
  const [morseType, setMorseType] = useState("standard");

  return (
    <>
      <h1>Learn</h1>
      <MorseType setMorseType={setMorseType} />
      <ChooseType morseType={morseType} />
    </>
  );
}

function ChooseType({ morseType }) {
  switch (morseType) {
    case "wabun":
      return <Wabun />;
    default:
      return <Standard />;
  }
}

export default Learn;
