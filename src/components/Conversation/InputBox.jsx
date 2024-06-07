import chatApi from "../api/conversation.js";
import { Send, SendHorizonalIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

function InputBox(props) {
  const apiKey = "AIzaSyA5jeP53OJMjTCvgfY7oj0bezc6Mc7fN7A";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const generativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a cat. Your name is Neko.",
  });

  async function chatApi(input) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(input);
    return result.response.text();
  }

  const { apidata, setapidata, setchatData, chatData } = props.props;
  console.log(apidata);
  const submit = async () => {
    setloader(true);
    try {
      let data = await chatApi(input);
      setapidata(data);
      const mydata = chatData;
      mydata.push({ input: input, output: data });
      setchatData(mydata);
    } catch (e) {
      alert("Something went wrong");
      console.error("Error while fetching api");
    }
    setinput("");
    setloader(false);
  };
  const [input, setinput] = useState("");
  const [loader, setloader] = useState(false);

  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "10px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };
  useEffect(() => {
    handleInput();
  }, []);

  return (
    <div className="justify-center items-center flex mb-3">
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        value={input}
        onKeyPress={handleKeyPress}
        onChange={(e) => setinput(e.target.value)}
        placeholder="Type a message"
        className="bottom-2 resize-none overflow-hidden outline-none  bg-gray-900 w-11/12 text-white p-3 rounded-lg border-none  items-center ml-2 "
      ></textarea>

      <button
        onClick={() => submit()}
        className="w-16 ml-3 text-white font-semibold rounded-md"
      >
        {loader ? <div className="loader"></div> : <SendHorizonalIcon />}
      </button>
    </div>
  );
}

export default InputBox;
