import { useState } from "react";

function Test() {
  const [wabun, setWabun] = useState(false);
  const [type, setType] = useState("letter");

  return (
    <>
      <Type />
    </>
  );
}

function Type({ type }) {
  switch (type) {
    case "read":
      return <h1>Read</h1>;
    case "write":
      return <h1>Write</h1>;

    default:
      return <h1>Single Letter</h1>;
  }
}

export default Test;
