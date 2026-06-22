"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
    
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
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                        role="presentation"
                    />
                    
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div 
                            className="bg-white p-8 rounded-[40px] max-w-2xl w-full relative pointer-events-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                        >
                            <button 
                                onClick={onClose} 
                                className="absolute top-8 right-8 text-2xl cursor-pointer hover:opacity-60 transition-opacity"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}