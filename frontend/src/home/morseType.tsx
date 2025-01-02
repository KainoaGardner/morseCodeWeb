function MorseType({ setMorseType }) {
  return (
    <>
      <div className="morseType">
        <button onClick={() => setMorseType("standard")}>Standard</button>
        <button onClick={() => setMorseType("wabun")}>和文</button>
      </div>
    </>
  );
}

export default MorseType;
