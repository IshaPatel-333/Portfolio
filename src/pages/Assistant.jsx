import React from "react";

function Assistant({ messages }) {
  return (
    <div className="space-y-3">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-lg text-sm shadow-md ${
              msg.sender === "user"
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white"
                : "bg-gray-800 text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Assistant;
