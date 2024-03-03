import React, { useEffect, useRef, useState } from "react";
import "./InputField.css";
import { useNavigate } from "react-router-dom";

const InputField = ({ gptModel, setChatsArray, user }) => {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    autoResizeTextarea();
  }, [prompt]);

  function autoResizeTextarea() {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scroll height
  }

  const handleApiCall = async () => {
    let formData = {
      prompt: prompt,
      model: gptModel,
    };
    let userObj = {
      user: "user",
      response: prompt,
    };
    let assistantObj = {
      user: "assistant",
      response: "Generating",
    };
    setPrompt("");
    setChatsArray((prevChatsArray) => {
      if (
        prevChatsArray.length > 1 &&
        prevChatsArray[prevChatsArray.length - 1]?.response ===
          "Something bad happened please try again"
      ) {
        return prevChatsArray.slice(0, -2).concat(userObj).concat(assistantObj);
      } else {
        return [...prevChatsArray, userObj, assistantObj];
      }
    });
    try {
      const response = await fetch("http://127.0.0.1:5000/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(user.email)}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      const assistantObj = {
        user: "assistant",
        response: data.response,
      };
      setChatsArray((prevChatsArray) => [
        ...prevChatsArray.slice(0, -1),
        assistantObj,
      ]);
    } catch (error) {
      console.error("Error:", error);
      const assistantObj = {
        user: "assistant",
        response: "Something bad happened please try again",
      };
      setChatsArray((prevChatsArray) => [
        ...prevChatsArray.slice(0, -1),
        assistantObj,
      ]);
    } finally {
      setPrompt("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
    } else if (e.key === "Enter" && prompt.trim()) {
      handleApiCall();
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <textarea
          className="input-textarea"
          ref={textareaRef}
          tabindex="0"
          rows="1"
          value={prompt}
          placeholder="Message ChatGPT…"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}></textarea>
        <button
          className="send-button"
          onClick={handleApiCall}
          disabled={!prompt.trim()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="text-white dark:text-black">
            <path
              d="M7 11L12 6L17 11M12 18V7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
      <div className="disclaimer">
        ChatGPT can make mistakes. Consider checking important information.
      </div>
    </div>
  );
};

export default InputField;
