"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatModal({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you with your Apple device today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "Thanks for your message. As this is a demo, I'm just a simulated bot!" }]);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
         className="fixed z-50 bg-white border border-neutral-200 shadow-2xl overflow-hidden
         sm:bottom-6 sm:right-6 sm:w-96 sm:rounded-3xl
         max-sm:bottom-4 max-sm:left-4 max-sm:right-4 max-sm:w-[calc(100vw-32px)] max-sm:rounded-2xl">
      <div className="bg-neutral-100 p-4 flex justify-between items-center">
        <h4 className="font-bold">Apple Support Bot</h4>
        <button onClick={onClose} className="text-neutral-500 hover:text-black p-1 cursor-pointer">✕</button>
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-2xl max-w-[85%] ${m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-neutral-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 ">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-neutral-300 rounded-full px-4 py-2 outline-none focus:border-neutral-400"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-black cursor-pointer text-white px-5 py-2.5 rounded-full font-medium">Send</button>
      </div>
    </motion.div>
  );
}