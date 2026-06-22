"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [step, setStep] = useState(1);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-500/30 backdrop-blur-md"
                        onClick={onClose}
                        role="presentation"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-white border border-gray-200 p-12 rounded-[40px] max-w-lg w-full shadow-2xl relative pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            {step === 1 ? (
                                <>
                                    <h2 id="modal-title" className="text-3xl font-semibold text-black mb-2 tracking-tight">
                                        Help us refine the experience.
                                    </h2>
                                    <p className="text-gray-500 mb-8">Which product would you like to see improved or redesigned?</p>

                                    <div className="space-y-3">
                                        {[
                                            { title: 'iPhone', desc: 'Design and camera refinements' },
                                            { title: 'MacBook', desc: 'Performance and hardware layout' },
                                            { title: 'iPad', desc: 'Interface and multitasking flow' },
                                            { title: 'Accessories', desc: 'Ergonomics and integration' }
                                        ].map((item) => (
                                            <button
                                                key={item.title}
                                                onClick={() => setStep(2)}
                                                className="cursor-pointer w-full text-left p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200 group"
                                                aria-label={`Improve ${item.title}`}
                                            >
                                                <div className="font-medium text-black text-lg">{item.title}</div>
                                                <div className="text-sm text-gray-500 group-hover:text-gray-600">{item.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-blue-600 text-2xl font-bold" aria-hidden="true">✓</span>
                                    </div>
                                    <h2 className="text-2xl font-semibold text-black mb-2">Thank you for your insight.</h2>
                                    <p className="text-gray-500 mb-8">
                                        We've logged your feedback. Your input helps us iterate and evolve our product line.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="cursor-pointer bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                                    >
                                        Return to store
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}