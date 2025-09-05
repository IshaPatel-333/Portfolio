import React, { useState, useRef } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import Assistant from "./Assistant";
import skills from "../data/skills";

function AssistantWrapper() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatMessagesRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase().trim();
    const newMessages = [...messages, { sender: "user", text: input }];
    let response = "🤔 I'm not sure about that. Could you rephrase?";

    // --- Skill-related answers ---
    Object.keys(skills).forEach((skill) => {
      if (userMessage.includes(skill)) {
        if (skills[skill].proficient) {
          response = `✅ Yes, I am proficient in **${skill}**. I've applied it in: ${skills[skill].projects.join(", ")}.`;
        } else {
          response = `❌ I am not proficient in **${skill}** yet, but I am open to learning it.`;
        }
      }
    });

    // --- Recruiter-related answers ---
    if (userMessage.includes("education")) {
      response =
        "🎓 I'm a final-year B.Tech IT student with a strong focus on AI/ML, backend development, and full-stack projects.";
    } else if (
      userMessage.includes("experience") ||
      userMessage.includes("projects")
    ) {
      response =
        "💼 I've worked on projects like:\n- Sign Language Detection (TensorFlow + OpenCV)\n- Kidney Disease Detection (CNN, MobileNet, ResNet)\n- MERN Book Club (JWT Auth)\n- Personal Expense Tracker (Node.js, Express, MongoDB)\n- Task Management App\n- Research in Chaos Theory Cryptography.";
    } else if (
      userMessage.includes("strength") ||
      userMessage.includes("strengths")
    ) {
      response =
        "💡 My strengths are problem-solving, quick learning, and applying AI/ML to real-world problems. I’m also strong in backend and database integration.";
    } else if (
      userMessage.includes("goal") ||
      userMessage.includes("career") ||
      userMessage.includes("future")
    ) {
      response =
        "🚀 My goal is to become an AI/ML engineer and contribute to impactful projects, especially in healthcare and digital psychiatry.";
    } else if (
      userMessage.includes("internship") ||
      userMessage.includes("work experience")
    ) {
      response =
        "📌 I've applied my skills in academic projects, research papers, and internships like the Digital Psychiatry internship at USC.";
    } else if (userMessage.includes("contact")) {
      response =
        "📧 You can contact me via the Contact section of this portfolio or directly at **ishapatel@email.com**.";
    }

    // Add bot response
    newMessages.push({ sender: "bot", text: response });
    setMessages(newMessages);
    setInput("");

    // Auto-scroll to bottom
    setTimeout(() => {
      chatMessagesRef.current?.scrollTo({
        top: chatMessagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transform transition-all duration-200"
      >
        <MessageCircle />
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div
          className="
            fixed bottom-20 
            left-1/2 -translate-x-1/2
            w-[95vw] max-w-sm 
            h-[70vh] 
            bg-[#0f172a] rounded-2xl shadow-2xl flex flex-col border border-gray-700 overflow-hidden
            
            sm:bottom-20 sm:right-0 sm:left-auto sm:translate-x-0
            sm:w-96 sm:h-[450px]
          "
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-4 flex justify-between items-center animate-gradient-x bg-200%">
            <div>
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span role="img" aria-label="robot">🤖</span>
                Ishaa's AI Assistant
              </h3>
              <p className="text-gray-200 text-xs">
                Ask me anything about Ishaa's skills or experience!
              </p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatMessagesRef}
            className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
          >
            <Assistant messages={messages} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700 bg-[#111827]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me about skills, projects, or goals..."
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white p-2 rounded-lg hover:opacity-90 transition"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default AssistantWrapper;
