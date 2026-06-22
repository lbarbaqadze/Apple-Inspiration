"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; 

const FAQ_DATA = [
  {
    id: "01",
    question: "How do I update my device?",
    answer: "Go to Settings > General > Software Update. Ensure you are connected to Wi-Fi to download and install the latest macOS or iOS version."
  },
  {
    id: "02",
    question: "What should I do if my battery drains quickly?",
    answer: "Check Settings > Battery to see which apps are using the most power. Lowering your screen brightness and turning off background app refresh can significantly improve battery life."
  },
  {
    id: "03",
    question: "How can I back up my data?",
    answer: "The easiest way is to use iCloud Backup in your settings. Alternatively, you can connect your device to a Mac or PC and use Finder or iTunes to create a full local backup."
  },
  {
    id: "04",
    question: "My device won't turn on, what now?",
    answer: "Try a force restart by following the specific button combination for your device model. If it still doesn't respond, connect it to a power source for 30 minutes and try again."
  },
  {
    id: "05",
    question: "How do I reset my Apple ID password?",
    answer: "Go to iforgot.apple.com to start the recovery process. You will need access to your trusted phone number or email to verify your identity."
  }
];

export default function CompactFAQ_MinimalPhoto() {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section className="w-full md:py-20 py-10 font-sans text-neutral-900">
      <div className="container mx-auto px-6 max-w-7xl"> 
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"> 
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex relative max-w-[400px] h-[500px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/support-images/faq.png" 
                alt="Apple Support assistance"
                fill
                className="object-cover"
                priority 
              />
            </div>
          </motion.div>

          <div className="w-full space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Frequently asked questions.
            </h2>

            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {FAQ_DATA.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div key={item.id} className="py-2 cursor-pointer">
                    <button
                      onClick={() => setActiveId(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between text-left group py-4"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold text-neutral-300">
                          {item.id}
                        </span>
                        <span className={`text-base md:text-lg font-medium transition-colors ${isOpen ? "text-black" : "text-neutral-500 group-hover:text-neutral-800"}`}>
                          {item.question}
                        </span>
                      </div>
                      
                      <div className={`cursor-pointer flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${isOpen ? "bg-black text-white" : "bg-neutral-50 text-neutral-400"}`}>
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-[9px]" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pl-12 text-neutral-600 leading-relaxed font-light text-sm max-w-md">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}