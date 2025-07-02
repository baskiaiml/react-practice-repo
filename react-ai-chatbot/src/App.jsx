import { useState, Ref } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";
import { Assistant } from "./assistants/deepseek";
//import { Assistant } from "./assistants/openai";
import { Loader } from "./components/loader/Loader";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

 function updateLastMessageContent(content) {
    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? { ...message, content: `${message.content}${content}` }
          : message
      )
    );
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chatStream(content, messages);
      let isFirstChunk = false;
      for await (const chunk of result){
        if(!isFirstChunk){
          isFirstChunk = true;
          addMessage({content:"", role:"assistant"});
          setIsLoading(false);
          setIsStreaming(true);
        }

        updateLastMessageContent(chunk);
      }
    } catch (error) {
      console.log(error);
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
      setIsLoading(false);
          setIsStreaming(false);
    }finally{
          setIsLoading(false);
    }
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <img src="/chatbot.png" className={styles.Logo} alt="AI Chatbot" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>

      <Controls isDisabled={isLoading || isStreaming} onSend={handleContentSend} />
    </div>
  );
}

export default App;
