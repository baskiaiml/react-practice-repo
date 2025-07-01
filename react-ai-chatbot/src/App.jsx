import { useState, Ref } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";
//import { Assistant } from "./assistants/googleai";
import { Assistant } from "./assistants/openai";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    try {
      const result = await assistant.chat(content, messages);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      console.log(error);
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chatbot.png" className={styles.Logo} alt="AI Chatbot" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>

      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;
