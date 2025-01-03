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

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const inputRef = useRef();

  const handleFeedback = (event) => {
    event.preventDefault();
    setFeedback(inputRef.current.value);
    sendFeedback(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <h2>Feedback</h2>
      <form onSubmit={handleFeedback}>
        <label htmlFor="feedback">Enter some feedback</label>
        <input type="text" ref={inputRef} id="feedback" name="feedback" />
        <input type="submit" />
      </form>

      <p>{feedback ? "Feedback has been sent. Thanks for the feedback" : ""}</p>
    </>
  );
}

function sendFeedback(text: string) {
  const tempParams = { message: text };

  emailjs.send(EMAIL_SERV_ID, EMAIL_TEMP_ID, tempParams);
}

export default Home;
