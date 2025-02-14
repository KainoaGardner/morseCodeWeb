import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_PUBL_KEY = import.meta.env.VITE_EMAIL_PUBL_KEY;
const EMAIL_SERV_ID = import.meta.env.VITE_EMAIL_SERV_ID;
const EMAIL_TEMP_ID = import.meta.env.VITE_EMAIL_TEMP_ID;

emailjs.init({
  publicKey: EMAIL_PUBL_KEY,
});

function Home() {
  return (
    <>
      <Feedback />
    </>
  );
}

function handleFeedback(event, feedback, setFeedback, setSent) {
  event.preventDefault();
  sendFeedback(feedback);
  setFeedback("");
  setSent(true);
}

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <h2>Feedback</h2>
      <form onSubmit={(e) => handleFeedback(e, feedback, setFeedback, setSent)}>
        <label htmlFor="feedback">Enter some feedback</label>
        <input
          onChange={(e) => setFeedback(e.target.value)}
          type="text"
          value={feedback}
          id="feedback"
        />
        <input type="submit" />
      </form>

      <p>{sent ? "Feedback has been sent. Thanks for the feedback" : ""}</p>
    </>
  );
}

function sendFeedback(text: string) {
  const tempParams = { message: text };

  emailjs.send(EMAIL_SERV_ID, EMAIL_TEMP_ID, tempParams);
}

export default Home;
