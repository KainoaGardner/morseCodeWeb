import { useState } from "react";

import Home from "./home/home.tsx";
import Learn from "./home/learn.tsx";
import Test from "./test/test.tsx";
import Translator from "./translator/translator.tsx";
import Settings from "./home/settings.tsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <div className="nav"></div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("learn")}>Learn</button>
      <button onClick={() => setPage("test")}>Test</button>
      <button onClick={() => setPage("translator")}>Translator</button>
      <button onClick={() => setPage("settings")}>Settings</button>

      <Tab page={page} />
    </>
  );
}

function Tab({ page }) {
  switch (page) {
    case "learn":
      return <Learn />;
    case "test":
      return <Test />;
    case "translator":
      return <Translator />;

    case "settings":
      return <Settings />;

    default:
      return <Home />;
  }
}

export default App;
