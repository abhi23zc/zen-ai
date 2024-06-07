import React, { useEffect, useRef, useState } from "react";
import ReactMarkDown from "react-markdown";
import { SendHorizonalIcon } from "lucide-react";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const Code = () => {
  const apiKey = "AIzaSyA5jeP53OJMjTCvgfY7oj0bezc6Mc7fN7A";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are a code generator . Your name is Gen-Z and you must answer only in markdown code snippets. Use code comments for explanation",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function codeGenerate(input) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(input);
    return result.response.text();
  }

  const [message, setmessage] = useState("");
  const [loader, setloader] = useState(false);
  const [input, setinput] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "5px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [input]);

  const submit = async () => {
    setloader(true);
    const data = await codeGenerate(input);
    setmessage(data);
    setinput("");
    setloader(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5  rounded-lg">
      <div className="flex items-center mb-5">
        <img src={"/coding.png"} className="w-10" />
        <div className="ml-5">
          <h1 className="text-2xl font-semibold">Code Generation</h1>
          {/* <p className="text-sm text-gray-600">Generate Code using Gen-Z</p> */}
        </div>
      </div>
      <div className="flex w-full lg:w-2/4 mb-5">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message"
          className="resize-none flex-1 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
        <button
          onClick={submit}
          className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-600"
        >
          {loader ? <div className="loader"></div> : <SendHorizonalIcon />}
        </button>
      </div>
      <div className="overflow-y-auto w-full lg:w-2/4 max-h-[400px]">
        <ReactMarkDown className="bg-gray-100 font-medium p-3 rounded-lg">
          {message}
        </ReactMarkDown>
      </div>
    </div>
  );
};

export default Code;
