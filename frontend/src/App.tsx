import { useState } from "react";

import Home from "./home/home.tsx";
import Learn from "./learn/learn.tsx";
import Test from "./test/test.tsx";
import Translator from "./translator/translator.tsx";
import Settings from "./home/settings.tsx";

function App() {
  const [page, setPage] = useState("home");
  const [freq, setFreq] = useState(800);
  const [volume, setVolume] = useState(0.2);
  const [duration, setDuration] = useState(800);

  return (
    <>
      <div className="nav"></div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("learn")}>Learn</button>
      <button onClick={() => setPage("test")}>Test</button>
      <button onClick={() => setPage("translator")}>Translator</button>
      <button onClick={() => setPage("settings")}>Settings</button>

      <Tab
        page={page}
        freq={freq}
        setFreq={setFreq}
        volume={volume}
        setVolume={setVolume}
        duration={duration}
        setDuration={setDuration}
      />
    </>
  );
}

function Tab({
  page,
  freq,
  setFreq,
  volume,
  setVolume,
  duration,
  setDuration,
}) {
  switch (page) {
    case "learn":
      return <Learn />;
    case "test":
      return <Test />;
    case "translator":
      return <Translator />;
    case "settings":
      return (
        <Settings
          freq={freq}
          setFreq={setFreq}
          volume={volume}
          setVolume={setVolume}
          duration={duration}
          setDuration={setDuration}
        />
      );
    default:
      return <Home />;
  }
}

export default App;
