import { useState } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";

function App() {

  const [messages, setMessages] = useState([]);

  function handleContentSend(content){
    setMessages((prevMessages)=>[...prevMessages, {content, role :'user'}]);
  }


  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chatbot.png" className={styles.Logo} />
        <h2 className={styles.Title}>AI chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages}></Chat>
      </div>
      <Controls onSend={handleContentSend}/>
    </div>
  );
}


export default App;
