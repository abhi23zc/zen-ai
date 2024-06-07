import React, { useState, useEffect, useRef } from "react";
import InputBox from "./InputBox";

function ChatBox() {
  const [apidata, setapidata] = useState(null);
  const [chatData, setchatData] = useState([]);
  const chatSectionRef = useRef(null);

  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  // Scroll to the bottom of the chat section whenever chatData changes
  useEffect(() => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
    }
  }, [chatData]);

  return (
    <div
      className="bg-black w-full h-screen m-auto flex flex-col justify-end "
      ref={chatSectionRef}
    >
      <div className="chatSection overflow-y-scroll">
        {chatData.map((e, index) => (
          <div key={index}>
            <div className="flex flex-col p-5">
              <div className="justify-end text-right lg:mr-5 md:mr-5 mr-2">
                <h1 className="text-white bg-gray-800 inline-block ml-2 px-4 py-2 text-sm rounded-lg">
                  {e.input}
                </h1>
              </div>
              <div className="flex mt-10">
                <img className="w-7 h-7" src="/zen.png" alt="icon" />
                <pre className="text-white lg:ml-10 leading-loose break-words text-base whitespace-pre-wrap">
                  <code
                    className="break-words"
                    dangerouslySetInnerHTML={{ __html: formatText(e.output) }}
                  ></code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>

      <InputBox props={{ apidata, setapidata, chatData, setchatData }} />
    </div>
  );
}

export default ChatBox;
