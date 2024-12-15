import React, { useState } from "react";

const VoiceToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return <p>Your browser does not support Speech Recognition.</p>;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Allows continuous speech recognition
  recognition.interimResults = true; // Show intermediate results
  recognition.lang = "en-US"; // Set language (can be customized)

  const startListening = () => {
    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = 0; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      setText(finalTranscript + interimTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition:", event.error);
    };
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voice to Text Converter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Your text will appear here..."
        style={{ margin: "20px", padding: "10px", fontSize: "16px" }}
      />
      <br />
      {isListening ? (
        <button onClick={stopListening} style={buttonStyle}>
          Stop Listening
        </button>
      ) : (
        <button onClick={startListening} style={buttonStyle}>
          Start Listening
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default VoiceToText;
