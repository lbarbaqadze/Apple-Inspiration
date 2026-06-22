"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") resetQuiz();
        };
        if (isModalOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen]);

    const questions = [
        { question: "What will you use your Mac for?", options: ["Work", "Creative Design", "Studying", "Casual"] },
        { question: "Which size do you prefer?", options: ["13-inch", "15-inch", "16-inch"] }
    ];

    const handleNext = () => {
        if (step < questions.length - 1) setStep(step + 1);
        else setIsFinished(true);
    };

    const resetQuiz = () => {
        setIsModalOpen(false);
        setIsFinished(false);
        setStep(0);
    };

    return (
        <section className="md:py-10 md:mb-0 mb-15 px-6 w-full overflow-hidden">
            <div className="max-w-[1550px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10 px-2">Help me choose</h2>
                <div className="bg-[#f5f5f7] rounded-[2.5rem] flex flex-col items-center md:flex-row md:justify-between overflow-hidden">
                    <div className="p-8 md:p-16 flex-1 space-y-6 w-full">
                        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-sm">
                            Answer a few questions to find the best Mac for you
                        </h3>
                        <button onClick={() => setIsModalOpen(true)} className="bg-black text-white cursor-pointer px-8 py-3 rounded-full font-medium text-lg hover:bg-neutral-800 transition-all">
                            Get started
                        </button>
                    </div>
                    <div className="relative w-full md:w-[50%] h-[250px] md:h-[400px]">
                        <Image src="/macbook-image/mac.png" alt="Mac Selection" fill className="object-contain object-bottom p-4 md:p-0 md:translate-y-4" priority />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={resetQuiz}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                            role="presentation"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-[40px] p-8 md:p-12 max-w-lg w-full relative shadow-2xl text-center pointer-events-auto"
                                role="dialog"
                                aria-modal="true"
                            >
                                <button onClick={resetQuiz} className="absolute top-6 right-6 text-gray-400 hover:text-black text-2xl cursor-pointer" aria-label="Close modal">✕</button>
                                
                                {!isFinished ? (
                                    <>
                                        <h3 className="text-3xl font-semibold mb-6 text-left">{questions[step].question}</h3>
                                        <div className="space-y-3">
                                            {questions[step].options.map((option) => (
                                                <button key={option} onClick={handleNext} className="w-full text-left cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black hover:bg-gray-50 transition-all">
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="mt-8 text-sm text-gray-400 text-left" aria-live="polite">
                                            Step {step + 1} of {questions.length}
                                        </p>
                                    </>
                                ) : (
                                    <div className="py-10">
                                        <h3 className="text-4xl font-semibold mb-4">Thanks!</h3>
                                        <p className="text-gray-600 mb-8">We've found the perfect Mac for your needs.</p>
                                        <button onClick={resetQuiz} className="bg-black cursor-pointer text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-all">Finish</button>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}