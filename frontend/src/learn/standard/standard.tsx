import standardMaps from "../../maps/standardMaps.tsx";
function Standard() {
  return (
    <>
      <p>Standard</p>

      <h2>Letters</h2>
      {Array.from(standardMaps.letters).map((letter, index) => (
        <p key={index}>
          {letter},{index}
        </p>
      ))}

      <h2>Numbers</h2>
      {Array.from(standardMaps.numbers).map((number, index) => (
        <p key={index}>
          {number},{index}
        </p>
      ))}

      <h2>Symbols</h2>
      {Array.from(standardMaps.symbols).map((symbols, index) => (
        <p key={index}>
          {symbols},{index}
        </p>
      ))}

      <h2>Prosigns</h2>
      {Array.from(standardMaps.prosigns).map((prosign, index) => (
        <p key={index}>
          {prosign},{index}
        </p>
      ))}
    </>
  );
}

export default Standard;
