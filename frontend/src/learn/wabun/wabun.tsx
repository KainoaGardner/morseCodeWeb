import wabunMaps from "../../maps/wabunMaps.tsx";
function Wabun() {
  return (
    <>
      <p>和文</p>

      <h2>文字</h2>
      {Array.from(wabunMaps.moji).map((letter, index) => (
        <p key={index}>
          {letter},{index}
        </p>
      ))}

      <h2>数字</h2>
      {Array.from(wabunMaps.suuji).map((number, index) => (
        <p key={index}>
          {number},{index}
        </p>
      ))}

      <h2>記号</h2>
      {Array.from(wabunMaps.kigou).map((symbols, index) => (
        <p key={index}>
          {symbols},{index}
        </p>
      ))}
    </>
  );
}

export default Wabun;
