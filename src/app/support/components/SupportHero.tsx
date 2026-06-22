'use client'
import ChatModal from "./ChatModal";
import { useState } from "react";

export function ContactSupportSection() {

  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <section className="py-18">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">Still need help?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
            <h4 className="font-semibold mb-2">Chat</h4>
            <p className="text-zinc-500 text-sm mb-4">Connect with an Apple Support expert.</p>
            <button className="text-blue-500 cursor-pointer hover:text-blue-600 font-medium"
            onClick={() => setIsChatOpen(true)}
            >Start Chat →</button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
            <h4 className="font-semibold mb-2">Call</h4>
            <p className="text-zinc-500 text-sm mb-4">Talk to an expert over the phone.</p>
            <button className="text-blue-500 cursor-pointer hover:text-blue-600 font-medium">Call Now →</button>
          </div>
        </div>
      </div>
      {isChatOpen && <ChatModal onClose={() => setIsChatOpen(false)} />}
    </section>
  );
}