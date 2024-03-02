import React, { useState } from "react";
import Searchbar from "../global/searchbar";
import x_icon from "../../assets/images/x_icon.svg";
import chat_icon from "../../assets/images/chat_icon.svg";
import attache_file from "../../assets/images/attache_file.svg";
import gif from "../../assets/images/gif.svg";
import emoji from "../../assets/images/emoji.svg";
import tag from "../../assets/images/tag.svg";
import send from "../../assets/images/send.svg";

import { useRef, useEffect } from 'react';

function Chat() {
  const [chatMessages, setChatMessages] = useState([]);
  const [topic, setTopic] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleMessageSubmit = (message) => {
    setChatMessages([...chatMessages, message]);
  };
  const chatContentRef = useRef(null);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
      <div className="flex justify-center items-center h-full">
      <div className="bg-light-grey w-full h-[100%] flex justify-center items-start">
          <div className="h-[70%] w-[60%] bg-white rounded-2xl shadow-[0px_0px_10px_0px_#3E3E40] mt-16">
            <div className="h-[10%] rounded-t-2xl rounded-b-none border-2 px-6 border-light-grey flex items-center justify-between">
              <p className="text-lg font-semibold">New Discussion</p>
              <div className="flex flex-row">
                <button>
                  <img
                    src={chat_icon}
                    alt="Chat"
                    className="h-[20px] w-[20px] mr-2"
                  />
                </button>
                <button>
                  <img src={x_icon} alt="Close" className="h-[20px] w-[20px]" />
                </button>
              </div>
            </div>
            <div className="px-4 pt-4 pb-8 h-[85%] w-full">
              <div className="flex ">
                To:{" "}
                <input
                  className="w-full outline-none bg-transparent"
                  placeholder="  Add teammates or an inbox"
                  type="text"
                  value={receiver}
                  onChange={(e) => setReceiver(e.target.value)}
                />
              </div>
              <div className="mt-1 ">
                Discussion topic:{" "}
                <input
                 className="outline-none bg-transparent"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div
      className="h-3/4 overflow-auto pt-6"
      id="chat-content"
      ref={chatContentRef}
      style={{
        overflowY: "auto",
        overflowX: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
        "-webkit-scrollbar": "none",
      }}
    >
      {chatMessages.map((message, index) => (
        <div key={index} className="mt-2 mb-2">
          <span
            className="bg-primary text-white p-1 px-2 rounded-lg inline-block"
            style={{ overflowWrap: "break-word" }}
          >
            {message}
          </span>
        </div>
      ))}
    </div>
              <div className="h-1/4 h-1/4 flex flex-row items-center  ">
                <span className=" justify-center  items-center w-[35px] h-[35px] rounded-full bg-orange-500 text-white text-3xl mx-2 hidden sm:flex" >
                  B
                </span>
                <div className="h-[100%] w-full bg-light-grey rounded-xl flex px-4 py-2">
                  <input
                    type="text"
                    className="w-full rounded-xl mr-2 border-none outline-none bg-transparent"
                    placeholder="Type a message..."
                    id="chat-field"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleMessageSubmit(e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                  <div className="flex flex-col justify-around items-center  rounded-xl">
                    <div className="flex flex-row"><button>
                      <img
                        src={attache_file}
                        alt="Attach File"
                        className="mx-2"
                      />
                    </button>
                    <button>
                      <img src={tag} alt="Tag" className="mx-2" />
                    </button>
                    <button>
                      <img src={emoji} alt="Emoji" className="mx-2" />
                    </button>
                    <button>
                      <img src={gif} alt="GIF" className="mx-2" />
                    </button></div>
                    <div className="bg-darkBlue px-3 py-1 text-white rounded-xl w-full  flex-row justify-around font-semibold hidden sm:flex  hover:shadow-[0px_0px_13px_0px_#013A66] ">
                        <p className="cursor-pointer">Send</p>
                        <button  ><img src={send} alt="send"  /></button>

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
