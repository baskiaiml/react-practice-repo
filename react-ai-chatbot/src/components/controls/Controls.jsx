import { useEffect, useRef, useState } from "react";
import styles from "./Controls.module.css";
import TextareaAutosize from "react-textarea-autosize";
export function Controls({ isDisabled = false, onSend }) {
  const textarearef = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!isDisabled) {
      textarearef.current.focus();
    }
  }, [isDisabled]);
  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }
  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <TextareaAutosize
          placeholder="Message AI Chatbot"
          className={styles.TextArea}
          value={content}
          ref={textarearef}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
          maxRows={4}
          minRows={1}
          isDisabled={isDisabled}
        ></TextareaAutosize>
      </div>
      <button
        className={styles.Button}
        isDisabled={isDisabled}
        onClick={handleContentSend}
      >
        <SendIcon />
      </button>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#1f1f1f"
    >
      <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
    </svg>
  );
}
