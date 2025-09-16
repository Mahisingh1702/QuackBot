import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import moment from "moment";
import Markdown from "react-markdown";
import Prism from "prismjs";

const Message = ({ message }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [message.content]);

  return (
    <div>
      {message.role === "user" ? (
        <div className="flex items-start justify-end my-4 gap-2">
          <div className="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#D6B018]/30 border border-[#FFD731]/30 rounded-md max-w-2xl">
            <p className="text-sm dark:text-primary">{message.content}</p>
            <span className="text-xs text-gray-400 dark:text-[#FFDF5E]">
              {moment(message.timestamp).fromNow()}
            </span>
          </div>
          <img src={assets.user_icon} className="w-8 rounded-full" />
        </div>
      ) : (
        <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#D6B018]/30 border border-[#FFD731]/30 rounded-md my-4">
          {message.isImage ? (
            <img
              src={message.content}
              className="w-full max-w-md mt-2 rounded-md"
            />
          ) : (
            <div className="text-sm dark:text-primary reset-tw">
              <Markdown>{message.content}</Markdown>
              <button
                onClick={() => navigator.clipboard.writeText(message.content)}
                className="absolute top-2 right-2 bg-white/80 rounded-full p-1 text-gray-500 hover:text-gray-700 dark:text-[#FFDF5E] dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                title="Copy"
              >
                📋
              </button>
            </div>
          )}
          <span className="text-xs text-gray-400 dark:text-[#FFDF5E]">
            {moment(message.timestamp).fromNow()}
          </span>
        </div>
      )}
    </div>
  );
};
export default Message;
